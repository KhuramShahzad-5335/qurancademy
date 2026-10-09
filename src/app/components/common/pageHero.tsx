import type { ReactNode } from "react";
import Image from "next/image";
import { artwork } from "../story/design";
import IslamicMotifs from "../story/islamicMotifs";
interface PageHeroProps {
  eyebrow: string; title: ReactNode; description: string; asideLabel?: string;
  asideValue?: string; image?: keyof typeof artwork; home?: boolean; children?: ReactNode;
}
export default function PageHero({ eyebrow, title, description, asideLabel = "A thoughtful beginning", asideValue = "Room to grow.", image = "study", home = false, children }: PageHeroProps) {
  return <section className="relative bg-blue-bell-950 py-12 text-blue-bell-50 min-[761px]:py-[clamp(45px,6vw,90px)]">
    <div className="pointer-events-none absolute top-0 right-0 size-[450px] max-w-[60vw] bg-[radial-gradient(ellipse,rgba(166,213,242,.045),transparent_70%)]" aria-hidden="true" />
    <IslamicMotifs variant={image === "hifz" || image === "planning" ? "lantern" : image === "courtyard" ? "arch" : "star"} position={home ? "left" : "right"} />
    <div className={`relative z-[1] mx-auto grid w-[calc(100%_-_36px)] items-center gap-[clamp(30px,5vw,75px)] min-[761px]:w-[min(1180px,calc(100%_-_clamp(2rem,8vw,7rem)))] min-[761px]:grid-cols-[1.13fr_1fr] ${home ? "min-[761px]:min-h-[540px]" : ""}`}>
      <div className="relative z-[1]">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={`mt-6 text-balance font-editorial font-normal leading-[1.07] tracking-[-.05em] [&_em]:text-blue-bell-300 ${home ? "text-[clamp(43px,10vw,67px)] min-[761px]:text-[clamp(47px,6.1vw,87px)]" : "text-[clamp(43px,10vw,67px)] min-[761px]:text-[clamp(43px,5.5vw,76px)]"}`}>{title}</h1>
        <p className="mt-[25px] max-w-[490px] text-sm leading-[1.9] text-[var(--muted)] max-[760px]:max-w-[560px]">{description}</p>{children}
      </div>
      <div className="relative mx-auto mt-2.5 w-full max-w-[530px] px-3 pt-4 pb-9 min-[761px]:mt-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-[23px] rotate-3 animate-arch-breathe rounded-[48%_48%_14px_14px] border border-blue-bell-200/30 motion-reduce:animate-none" aria-hidden="true" />
        <div className="relative aspect-[1.18] overflow-hidden rounded-[47%_47%_10px_10px] bg-blue-bell-800 min-[761px]:aspect-[1/1.02]">
          <Image src={artwork[image].src} alt={artwork[image].alt} width={1440} height={960} sizes="(max-width: 760px) 100vw, 50vw" priority className="h-full w-full animate-gentle-arrival object-cover motion-reduce:animate-none" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(4,21,31,.16)]" aria-hidden="true" />
        </div>
        <div className="absolute right-0 bottom-2.5 left-[43%] max-w-[320px] rounded-[7px] bg-blue-bell-50 px-5 py-[18px] text-blue-bell-900 shadow-[0_12px_40px_rgba(0,0,0,.2)] min-[1101px]:-right-2.5 min-[1101px]:left-[42%] min-[761px]:max-[1100px]:left-[20%] max-[480px]:left-[30%] max-[480px]:p-3.5">
          <strong className="block font-editorial text-[22px] font-normal leading-[1.18]">{asideValue}</strong><span className="mt-[7px] block text-[10px] leading-[1.6] text-blue-bell-600">{asideLabel}</span>
        </div>
        <p className="mt-6 text-center text-[11px] tracking-[.05em] text-blue-bell-400">An illustrated moment of learning</p>
      </div>
    </div>
  </section>;
}
