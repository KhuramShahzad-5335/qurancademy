"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MotionEffects() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    if (preference.matches || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("reveal-wait");
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    elements.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add("reveal-wait");
      observer.observe(element);
    });
    const stopMotion = () => {
      if (!preference.matches) return;
      observer.disconnect();
      elements.forEach(element => element.classList.remove("reveal-wait", "is-revealed"));
    };
    preference.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", stopMotion);
      elements.forEach(element => element.classList.remove("reveal-wait", "is-revealed"));
    };
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const amount = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${amount})`;
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return <div ref={progress} style={{ transform: "scaleX(0)" }} className="pointer-events-none fixed top-0 left-0 z-100 h-[3px] w-full origin-left bg-blue-bell-200" aria-hidden="true" />;
}
