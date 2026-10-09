type MotifVariant = "star" | "lantern" | "arch";

export default function IslamicMotifs({ variant = "star", position = "right" }: { variant?: MotifVariant; position?: "right" | "left" }) {
  return <div className={`pointer-events-none absolute z-0 w-[clamp(100px,13vw,190px)] overflow-visible text-[var(--motif)] opacity-[var(--motif-opacity)] max-[760px]:w-[100px] max-[760px]:opacity-12 ${position === "left" ? "top-0 -left-10 max-[760px]:-left-[35px]" : "-top-[45px] -right-[35px]"}`} aria-hidden="true">
    <svg className="h-auto w-full stroke-current [stroke-width:1.2]" viewBox="0 0 200 300" fill="none" focusable="false">
      <path className="opacity-55 [stroke-dasharray:3_6]" d="M100 0v95" />
      <g className={`origin-[100px_95px] animate-pendant-sway motion-reduce:animate-none ${variant === "lantern" ? "[animation-duration:11s] [animation-delay:-3s]" : variant === "arch" ? "[animation-duration:13s] [animation-delay:-6s]" : ""}`}>
        {variant === "lantern" ? <><path d="M86 114v-12q14-20 28 0v12M74 126l12-12h28l12 12M74 126h52l-7 60H81zM81 186l19 17 19-17M100 203v17M90 220h20" /><path d="M87 138v36M100 132v48M113 138v36" /><path d="M65 128h70M76 187h48" /></>
        : variant === "arch" ? <><path d="M61 187v-38c0-29 39-49 39-49s39 20 39 49v38zM74 180v-31c0-20 26-34 26-34s26 14 26 34v31M52 193h96" /><path d="M100 204v16m-10 0h20" /></>
        : <><path d="M100 103l16 23 28-5-5 28 23 16-23 16 5 28-28-5-16 23-16-23-28 5 5-28-23-16 23-16-5-28 28 5z" /><path d="M100 126l39 39-39 39-39-39zM76 141h48v48H76z" /><circle cx="100" cy="165" r="11" /></>}
      </g>
      <circle cx="43" cy="231" r="3" /><circle cx="163" cy="94" r="2" />
    </svg>
  </div>;
}

