interface LineIconProps {
  kind: "book" | "spark" | "clock" | "path" | "shield" | "message" | "home" | "question";
  className?: string;
}

const paths = {
  book: <><path d="M12 19.5c-2.5-1.5-5-1.5-7.5 0V5.2c2.5-1.5 5-1.5 7.5 0m0 14.3c2.5-1.5 5-1.5 7.5 0V5.2c-2.5-1.5-5-1.5-7.5 0m0 0v14.3" /><path d="M8 8.2c.9-.2 1.8-.1 2.7.3M16 8.2c-.9-.2-1.8-.1-2.7.3" /></>,
  spark: <><path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3L12 3Z" /><path d="m19 16 .5 2.5L22 19l-2.5.5L19 22l-.5-2.5L16 19l2.5-.5L19 16Z" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.2 2" /></>,
  path: <><path d="M4 18.5c3.8-4.8 6-7.5 8.8-7.5 2.3 0 2.8 2.5 5.2 2.5 1.1 0 1.8-.6 2-1.5" /><path d="m17 9 3 3-3 3" /><circle cx="5" cy="18.5" r="1.5" /></>,
  shield: <><path d="M12 3.5 19 6v5.2c0 4.2-2.8 7.2-7 9.3-4.2-2.1-7-5.1-7-9.3V6l7-2.5Z" /><path d="m8.7 12 2.2 2.2 4.6-4.7" /></>,
  message: <><path d="M5 5.5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-4.5 3v-3H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" /><path d="M7 10h10M7 13h6" /></>,
  home: <><path d="m4 11 8-7 8 7" /><path d="M6.5 10v9h11v-9M10 19v-5h4v5" /></>,
  question: <><circle cx="12" cy="12" r="8.5" /><path d="M9.5 9.5a2.7 2.7 0 1 1 4.5 2c-1.2.9-2 1.2-2 2.5M12 17h.01" /></>,
};

export default function LineIcon({ kind, className = "" }: LineIconProps) {
  return (
    <svg className={`size-6 shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  );
}
