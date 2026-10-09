import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import LineIcon from "../common/lineIcon";
import { artwork, type IconKind } from "./design";

export function ActionLink({ href, children, secondary = false, className = "" }: { href: string; children: ReactNode; secondary?: boolean; className?: string }) {
  const classes = `story-button ${secondary ? "story-button--secondary" : ""} ${className}`;
  const contents = <>{children}<span className="button-arrow" aria-hidden="true">↗</span></>;
  return /^https?:/.test(href)
    ? <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{contents}</a>
    : <Link href={href} className={classes}>{contents}</Link>;
}

export function SectionHeading({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description?: string; children?: ReactNode }) {
  return <div className="story-heading" data-reveal><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{description && <p className="section-intro">{description}</p>}{children}</div>;
}

export function StorySection({ id, theme = "dark", className = "", children }: { id?: string; theme?: "dark" | "paper" | "soft"; className?: string; children: ReactNode }) {
  return <section id={id} className={`story-section story-section--${theme} ${className}`}><div className="story-container">{children}</div></section>;
}

export function StoryImage({ kind = "study", caption, className = "", priority = false }: { kind?: keyof typeof artwork; caption?: string; className?: string; priority?: boolean }) {
  return <figure className={`story-photo ${className}`} data-reveal><Image src={artwork[kind].src} alt={artwork[kind].alt} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 50vw" priority={priority} />{caption && <figcaption><span className="caption-dot" />{caption}</figcaption>}</figure>;
}

export function Feature({ icon, title, children, number }: { icon: IconKind; title: string; children: ReactNode; number?: string }) {
  return <div className="story-feature" data-reveal><div className="feature-marker"><LineIcon kind={icon} />{number && <span>{number}</span>}</div><h3>{title}</h3><div className="feature-copy">{children}</div></div>;
}

export function CallToAction({ eyebrow = "Your next chapter", title = "Every journey starts with a conversation.", description = "Tell us about your learner, the course you’re considering and the times that suit your family. We’ll discuss a starting point together.", href = "/contact", label = "Let’s find your starting point" }: { eyebrow?: string; title?: string; description?: string; href?: string; label?: string }) {
  return <StorySection className="closing-section"><div className="closing-panel" data-reveal><div className="closing-orbit" aria-hidden="true" /><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p><ActionLink href={href}>{label}</ActionLink><span className="closing-note">A free trial enquiry. A thoughtful first step.</span></div></StorySection>;
}
