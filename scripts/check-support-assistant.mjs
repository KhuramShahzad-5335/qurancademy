import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

async function contentModule(path, prefix = "") {
  const source = prefix + fs.readFileSync(new URL(path, import.meta.url), "utf8").replace(/^import[^\n]*\n/gm, "");
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ESNext } }).outputText;
  return import("data:text/javascript;base64," + Buffer.from(output).toString("base64"));
}
const { answerQuestion } = await contentModule("../src/lib/supportAssistant.ts");
const { whatsappNumber, whatsappUrl } = await contentModule("../src/lib/contact.ts");
const { siteConfig } = await contentModule("../src/app/content/site.config.ts", `const whatsappNumber = ${JSON.stringify(whatsappNumber)}; const whatsappUrl = () => ${JSON.stringify(whatsappUrl())};\n`);
const { faqsData } = await contentModule("../src/app/content/faqs.tsx");
const knowledge = { courses: siteConfig.courses, faqs: faqsData, contactUrl: siteConfig.whatsappLink };
let checks = 0;
function ask(query, context = {}) { checks++; return answerQuestion(query, context, knowledge); }

const course = ask("Tell me about Hifz");
assert.equal(course.context.courseSlug, "quran-memorization");
assert.equal(course.blocks[0].title, "Quran Memorization (Hifz)");
const followup = ask("What about the fees?", course.context);
assert.match(followup.blocks[0].title, /Hifz/);
assert.match(followup.blocks[0].body, /written quote/);
assert.equal(followup.blocks[0].href, "/pricing");
const compare = ask("Compare Qaida and Tajweed");
assert.equal(compare.blocks.length, 2);
assert.ok(compare.blocks.some(item => item.href === "/courses/noorani-qaida"));
assert.ok(compare.blocks.some(item => item.href === "/courses/quran-reading-tajweed"));
const compound = ask("What are the fees, can we have a trial, and are evening times available?");
assert.ok(compound.blocks.some(item => item.href === "/pricing"));
assert.ok(compound.blocks.some(item => item.href === "/contact"));
assert.ok(compound.blocks.some(item => item.href.includes("time-zones")));
const teacher = ask("Can I have a female teacher who teaches in Urdu?");
assert.match(teacher.blocks[0].body, /available teachers/);
const privacy = ask("Is my data saved?");
assert.match(privacy.blocks[0].body, /current page session/);
const booking = ask("Has my enquiry been sent?");
assert.match(booking.blocks[0].body, /press Send/);
const timing = ask("What times do classes run?");
assert.ok(timing.blocks.some(item => item.href.includes("time-zones")));
const list = ask("What courses are available?");
assert.ok(list.blocks.some(item => item.href === "/courses"));
const age = ask("Is this suitable for adults?", course.context);
assert.equal(age.blocks[0].title, "Who this course is for");
assert.doesNotMatch(age.blocks[0].body, /Noorani/);
const free = ask("Is it free?", course.context);
assert.equal(free.blocks[0].href, "/pricing");
const more = ask("Tell me more", course.context);
assert.match(more.blocks[0].title, /Hifz/);
const unknown = ask("Who won the football match?");
assert.equal(unknown.blocks[0].href, siteConfig.whatsappLink);
assert.match(unknown.blocks[0].body, /could not find/);
const human = ask("I want to speak with a human");
assert.equal(human.blocks[0].href, siteConfig.whatsappLink);
assert.equal(human.blocks[0].title, "Speak with Qurancademy");
const falseSubstring = ask("Sometimes I wonder about astronomy.");
assert.match(falseSubstring.blocks[0].body, /could not find/);
const changes = ask("How do refunds and rescheduling work?");
assert.ok(changes.blocks.some(item => item.href === "/terms"));
for (const answer of [course,followup,compare,compound,teacher,privacy,booking,timing,list,age,free,more,unknown,human,falseSubstring,changes]) {
  for (const block of answer.blocks) {
    assert.ok(block.body.length > 30);
    assert.ok(block.href.startsWith("/") || block.href.startsWith("https://wa.me/"));
    assert.doesNotMatch(block.body, /your booking is confirmed|you have a guaranteed slot|\$\d|£\d/);
  }
}
console.log(`Passed ${checks} support scenarios: course context, comparisons, multiple topics, fees, trials, teachers, privacy, delivery, timing, age, fallback and handoff.`);

