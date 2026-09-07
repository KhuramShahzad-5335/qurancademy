import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  asideLabel: string;
  asideValue: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  asideLabel,
  asideValue,
  children,
}: PageHeroProps) {
  return (
    <section className="site-page-hero">
      <div className="site-page-hero__wash" aria-hidden="true" />
      <div className="site-page-hero__content">
        <div className="site-page-hero__copy">
          <span className="site-page-hero__eyebrow">
            <span className="site-page-hero__dot" />
            {eyebrow}
          </span>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
        <div className="site-page-hero__aside" aria-hidden="true">
          <div className="site-page-hero__ring site-page-hero__ring--outer" />
          <div className="site-page-hero__ring site-page-hero__ring--inner">
            <span>{asideValue}</span>
            <small>{asideLabel}</small>
          </div>
          <div className="site-page-hero__glint">۞</div>
        </div>
      </div>
    </section>
  );
}