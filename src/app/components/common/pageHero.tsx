import type { ReactNode } from "react";
import Image from "next/image";
import { artwork } from "../story/design";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  asideLabel?: string;
  asideValue?: string;
  image?: keyof typeof artwork;
  home?: boolean;
  children?: ReactNode;
}
export default function PageHero({ eyebrow, title, description, asideLabel = "A thoughtful beginning", asideValue = "Room to grow.", image = "study", home = false, children }: PageHeroProps) {
  return <section className={`hero-section ${home ? "hero-section--home" : ""}`}><div className="story-container hero-grid">
    <div className="hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p>{children}</div>
    <div className="hero-visual"><div className="hero-art"><Image src={artwork[image].src} alt={artwork[image].alt} width={1440} height={960} sizes="(max-width: 760px) 100vw, 50vw" priority /></div><div className="hero-caption"><strong>{asideValue}</strong><span>{asideLabel}</span></div><p className="hero-image-note">An illustrated moment of learning</p></div>
  </div></section>;
}
