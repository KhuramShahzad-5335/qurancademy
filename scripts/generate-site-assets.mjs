// One-time asset authoring utility; uses the sharp dependency already supplied by Next.js.
// Generated assets are checked in and do not require this script at build time.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const directory = path.resolve(__dirname, "../public/images");
fs.mkdirSync(directory, { recursive: true });
const variants = [
  ["qaida-guide", "GETTING STARTED", "A thoughtful first step", "#a6d5f2", "book"],
  ["routine-guide", "LEARNING ROUTINES", "Make room for practice", "#79c0ec", "calendar"],
  ["reading-guide", "CHOOSING A COURSE", "Listen. Try. Learn.", "#d2eaf9", "book"],
  ["teacher-guide", "FOR PARENTS", "Ask the questions that matter", "#a6d5f2", "cards"],
  ["first-lesson-guide", "FIRST LESSON", "Start with a little preparation", "#79c0ec", "laptop"],
  ["time-zone-guide", "FAMILY SCHEDULES", "Find a time that fits", "#d2eaf9", "calendar"],
];

function picture(kind, accent) {
  const lines = `<path d="M755 282h120m-120 35h140m-140 35h105M960 282h120m-120 35h140m-140 35h105" stroke="${accent}" stroke-width="8" stroke-linecap="round" opacity=".6"/>`;
  if (kind === "book") return `<path d="M720 220q90-30 200 0q110-30 200 0v225q-110-25-200 0q-110-25-200 0z" fill="#0d3c59" stroke="${accent}" stroke-width="5"/><path d="M920 222v224" stroke="${accent}" stroke-width="5"/>${lines}<path d="M1060 220v110l-20-15-20 15V220" fill="${accent}"/>`;
  if (kind === "calendar") return `<rect x="745" y="190" width="350" height="270" rx="24" fill="#0d3c59" stroke="${accent}" stroke-width="5"/><path d="M745 255h350M820 168v48m200-48v48" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>${[0,1,2].map(row => [0,1,2,3].map(col => `<rect x="${780+col*75}" y="${285+row*48}" width="36" height="25" rx="6" fill="${accent}" opacity="${row===1&&col===2?1:0.25}"/>`).join("")).join("")}`;
  if (kind === "laptop") return `<rect x="765" y="195" width="300" height="210" rx="18" fill="#0d3c59" stroke="${accent}" stroke-width="5"/><path d="M720 420h390l-30 34H750z" fill="${accent}"/><rect x="795" y="225" width="245" height="150" rx="10" fill="#04151f"/><path d="M825 260l13 13 24-30m-37 75 13 13 24-30m20-40h120m-120 50h120" stroke="${accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`;
  return `<rect x="750" y="192" width="275" height="155" rx="25" fill="#0d3c59" stroke="${accent}" stroke-width="5"/><rect x="845" y="340" width="270" height="130" rx="25" fill="#061e2d" stroke="${accent}" stroke-width="5"/><path d="M795 240h185m-185 45h140m-50 100h165m-165 40h130" stroke="${accent}" stroke-width="8" stroke-linecap="round" opacity=".7"/>`;
}

function cover(label, title, accent, kind) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><radialGradient id="wash"><stop stop-color="${accent}" stop-opacity=".13"/><stop offset="1" stop-color="#04151f" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="630" fill="#04151f"/><circle cx="960" cy="300" r="320" fill="url(#wash)"/><g fill="none" stroke="${accent}" stroke-opacity=".12"><circle cx="930" cy="320" r="225"/><circle cx="930" cy="320" r="270"/><path d="M55 555h1090"/></g><rect x="70" y="100" width="50" height="6" rx="3" fill="${accent}"/><text x="70" y="163" fill="${accent}" font-family="Arial,sans-serif" font-size="20" letter-spacing="3">${label}</text><text x="70" y="300" fill="#e9f4fc" font-family="Arial,sans-serif" font-size="35" font-weight="700">${title}</text><text x="70" y="353" fill="#79c0ec" font-family="Arial,sans-serif" font-size="22">Practical guidance for parents</text><text x="70" y="525" fill="#79c0ec" font-family="Arial,sans-serif" font-size="21">Qurancademy</text>${picture(kind,accent)}</svg>`;
}

async function main() {
  for (const [name,label,title,accent,kind] of variants) fs.writeFileSync(path.join(directory, `${name}.svg`), cover(label,title,accent,kind));
  const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#04151f"/><circle cx="1030" cy="240" r="240" fill="#0d3c59"/><circle cx="1030" cy="240" r="180" fill="none" stroke="#a6d5f2" stroke-opacity=".35"/><rect x="80" y="100" width="70" height="8" rx="4" fill="#a6d5f2"/><text x="80" y="190" font-family="Arial,sans-serif" font-size="43" font-weight="700" fill="#a6d5f2">Qurancademy.</text><text x="80" y="300" font-family="Arial,sans-serif" font-size="62" font-weight="700" fill="#e9f4fc">Online Quran learning.</text><text x="80" y="382" font-family="Arial,sans-serif" font-size="42" fill="#e9f4fc">One learner. One thoughtful start.</text><text x="80" y="510" font-family="Arial,sans-serif" font-size="26" fill="#79c0ec">Courses, free trial enquiries and practical parent guides</text></svg>`;
  await sharp(Buffer.from(social)).png().toFile(path.resolve(__dirname, "../public/social-preview.png"));
  console.log("Created six original SVG covers and a 1200 x 630 social preview.");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
