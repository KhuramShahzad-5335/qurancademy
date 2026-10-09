import { siteConfig } from "@/app/content/site.config";
import LineIcon from "../common/lineIcon";
export default function JourneySteps() {
  return <ol className="mt-[55px] grid gap-[35px] min-[481px]:grid-cols-3 min-[481px]:gap-[25px] min-[761px]:gap-[50px]">{siteConfig.steps.map((step,index) => <li key={step.step} data-reveal>
    <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 text-[var(--marker)] min-[481px]:pb-7"><span className="font-editorial text-[44px] text-[var(--muted)] opacity-50">{step.step}</span><LineIcon kind={index === 0 ? "message" : index === 1 ? "spark" : "path"} /></div>
    <h3 className="mt-[18px] font-editorial text-2xl leading-[1.2] tracking-[-.03em] min-[481px]:mt-[25px] min-[761px]:text-[28px]">{step.title}</h3><p className="mt-[15px] text-sm leading-[1.9] text-[var(--muted)]">{step.desc}</p>
  </li>)}</ol>;
}
