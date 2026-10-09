import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import LineIcon from "../common/lineIcon";
import IslamicMotifs from "./islamicMotifs";
import { artwork, type IconKind } from "./design";

export function ActionLink({ href, children, secondary = false, className = "" }: { href: string; children: ReactNode; secondary?: boolean; className?: string }) {
  const classes = `group inline-flex min-h-[50px] items-center justify-center gap-6 rounded-full border px-6 py-3.5 text-center text-xs font-semibold leading-[1.4] transition-all duration-250 ease-story hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.15)] motion-reduce:transform-none ${secondary ? "border-[var(--line)] bg-transparent text-[var(--ink)] hover:bg-blue-bell-500/10" : "border-transparent bg-[var(--action-bg)] text-[var(--action-ink)] hover:bg-[var(--action-hover)]"} ${className}`;
  const contents = <>{children}<span className="text-xl leading-none transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" aria-hidden="true">↗</span></>;
  return /^https?:/.test(href)
    ? <a href={href} className={classes} data-action target="_blank" rel="noopener noreferrer">{contents}</a>
    : <Link href={href} className={classes} data-action>{contents}</Link>;
}
export function SectionHeading({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description?: string; children?: ReactNode }) {
  return <div className="mb-[35px] grid items-end gap-[22px] min-[761px]:mb-12 min-[761px]:grid-cols-[1.2fr_1fr] min-[761px]:gap-[50px]" data-reveal><div><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 max-w-[700px] text-balance font-editorial text-[clamp(34px,4.1vw,58px)] font-normal leading-[1.1] tracking-[-.045em] [&_em]:text-[var(--heading-accent)]">{title}</h2></div>{description && <p className="max-w-[430px] text-[15px] leading-[1.9] text-[var(--muted)]">{description}</p>}{children}</div>;
}
const lightTheme = "[--ink:var(--color-blue-bell-900)] [--muted:var(--color-blue-bell-800)] [--line:rgba(6,30,45,.18)] [--marker:var(--color-blue-bell-600)] [--heading-accent:var(--color-blue-bell-600)] [--eyebrow:var(--color-blue-bell-600)] [--focus:var(--color-blue-bell-700)] [--action-bg:var(--color-blue-bell-900)] [--action-ink:var(--color-blue-bell-50)] [--action-hover:var(--color-blue-bell-700)] [--card-hover:var(--color-blue-bell-100)] [--motif:var(--color-blue-bell-700)] [--motif-opacity:.12]";
export function StorySection({ id, theme = "dark", className = "", motif, children }: { motif?: "star" | "lantern" | "arch"; id?: string; theme?: "dark" | "paper" | "soft"; className?: string; children: ReactNode }) {
  const surface = theme === "paper" ? `bg-blue-bell-50 ${lightTheme}` : theme === "soft" ? `bg-blue-bell-200 ${lightTheme}` : "bg-blue-bell-900";
  return <section id={id} className={`relative py-[clamp(64px,8vw,116px)] text-[var(--ink)] ${surface} ${className}`}>{motif && <IslamicMotifs variant={motif} position={theme === "paper" ? "right" : "left"} />}<div className="relative z-[1] mx-auto w-[calc(100%_-_36px)] min-[761px]:w-[min(1180px,calc(100%_-_clamp(2rem,8vw,7rem)))]">{children}</div></section>;
}
export function StoryImage({ kind = "study", caption, className = "", arch = false, priority = false }: { kind?: keyof typeof artwork; caption?: string; className?: string; arch?: boolean; priority?: boolean }) {
  return <figure className={`relative min-w-0 ${className}`} data-reveal><Image src={artwork[kind].src} alt={artwork[kind].alt} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 50vw" priority={priority} className={`block h-auto w-full object-cover ${arch ? "aspect-[1/1.12] rounded-[45%_45%_12px_12px] max-[760px]:aspect-[1.15]" : "aspect-[1.25] rounded-xl max-[760px]:aspect-[1.3]"}`} />{caption && <figcaption className="mt-[15px] flex items-center gap-2.5 text-[10px] leading-[1.6] text-[var(--muted)]"><span className="size-[5px] shrink-0 rounded-full bg-blue-bell-600" />{caption}</figcaption>}</figure>;
}
export function Feature({ icon, title, children, number }: { icon: IconKind; title: string; children: ReactNode; number?: string }) {
  return <div className="border-t border-[var(--line)] pt-[25px] pb-2.5" data-reveal><div className="mb-6 flex items-center justify-between text-[var(--marker)]"><LineIcon kind={icon} />{number && <span className="font-mono text-[10px] opacity-60">{number}</span>}</div><h3 className="mb-[15px] font-editorial text-[26px] leading-tight tracking-[-.025em]">{title}</h3><div className="text-sm leading-[1.9] text-[var(--muted)] [&_p+p]:mt-3.5">{children}</div></div>;
}
export function CallToAction({ eyebrow = "Your next chapter", title = "Every journey starts with a conversation.", description = "Tell us about your learner, the course you’re considering and the times that suit your family. We’ll discuss a starting point together.", href = "/contact", label = "Let’s find your starting point" }: { eyebrow?: string; title?: string; description?: string; href?: string; label?: string }) {
  return <StorySection className="!bg-blue-bell-950"><div className="relative overflow-hidden rounded-xl border border-blue-bell-200/25 bg-[radial-gradient(ellipse_at_top,var(--color-blue-bell-800),var(--color-blue-bell-900)_70%)] px-6 py-[clamp(40px,6vw,80px)] text-center" data-reveal><div className="pointer-events-none absolute -top-2.5 -right-[290px] size-[450px] rounded-full border border-blue-bell-200/15 shadow-[0_0_0_35px_rgba(166,213,242,.025),0_0_0_70px_rgba(166,213,242,.015)]" aria-hidden="true" /><p className="eyebrow relative">{eyebrow}</p><h2 className="relative mx-auto my-5 max-w-[720px] text-balance font-editorial text-[clamp(34px,5vw,64px)] font-normal leading-[1.15] tracking-[-.045em]">{title}</h2><p className="relative mx-auto mb-[30px] max-w-[520px] text-sm leading-[1.9] text-[var(--muted)]">{description}</p><ActionLink href={href} className="relative">{label}</ActionLink><span className="relative mt-5 block text-[10px] text-blue-bell-300">A free trial enquiry. A thoughtful first step.</span></div></StorySection>;
}
