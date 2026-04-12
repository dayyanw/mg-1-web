"use client";

type Buddy = {
  left: number;
  top: number;
  delay: number;
  duration: number;
  variant: "a" | "b" | "c";
} & (
  | { kind: "dot"; className: string }
  | { kind: "emoji"; char: string }
);

const BUDDIES: Buddy[] = [
  { kind: "dot", className: "bg-teal-400 dark:bg-teal-400", left: 6, top: 14, delay: 0.1, duration: 2.2, variant: "a" },
  { kind: "emoji", char: "✨", left: 14, top: 72, delay: 0.6, duration: 2.8, variant: "b" },
  { kind: "dot", className: "bg-violet-400 dark:bg-violet-400", left: 22, top: 38, delay: 0.3, duration: 1.9, variant: "c" },
  { kind: "emoji", char: "🌱", left: 88, top: 12, delay: 0.9, duration: 2.5, variant: "a" },
  { kind: "dot", className: "bg-amber-400 dark:bg-amber-400", left: 78, top: 55, delay: 0.2, duration: 2.1, variant: "b" },
  { kind: "emoji", char: "◇", left: 4, top: 48, delay: 1.1, duration: 3.0, variant: "c" },
  { kind: "dot", className: "bg-sky-400 dark:bg-sky-400", left: 52, top: 8, delay: 0.4, duration: 2.4, variant: "a" },
  { kind: "emoji", char: "★", left: 94, top: 42, delay: 0.7, duration: 2.0, variant: "b" },
  { kind: "dot", className: "bg-rose-400 dark:bg-rose-400", left: 38, top: 88, delay: 0.5, duration: 2.6, variant: "c" },
  { kind: "emoji", char: "✦", left: 68, top: 78, delay: 1.3, duration: 2.3, variant: "a" },
  { kind: "dot", className: "bg-emerald-400 dark:bg-emerald-400", left: 12, top: 92, delay: 0.8, duration: 1.85, variant: "b" },
  { kind: "emoji", char: "·", left: 45, top: 22, delay: 0.15, duration: 2.7, variant: "c" },
  { kind: "dot", className: "bg-fuchsia-400 dark:bg-fuchsia-400", left: 58, top: 62, delay: 1.0, duration: 2.15, variant: "a" },
  { kind: "emoji", char: "○", left: 30, top: 18, delay: 0.45, duration: 2.9, variant: "b" },
  { kind: "dot", className: "bg-cyan-400 dark:bg-cyan-400", left: 84, top: 88, delay: 1.2, duration: 2.05, variant: "c" },
  { kind: "emoji", char: "✧", left: 72, top: 28, delay: 0.35, duration: 2.55, variant: "a" },
  { kind: "dot", className: "bg-lime-400 dark:bg-lime-400", left: 48, top: 94, delay: 0.55, duration: 2.35, variant: "b" },
  { kind: "emoji", char: "⬡", left: 96, top: 68, delay: 1.4, duration: 2.65, variant: "c" },
  { kind: "dot", className: "bg-orange-400 dark:bg-orange-400", left: 18, top: 58, delay: 0.25, duration: 1.95, variant: "a" },
  { kind: "emoji", char: "◆", left: 56, top: 44, delay: 0.95, duration: 2.45, variant: "b" },
  { kind: "dot", className: "bg-indigo-400 dark:bg-indigo-400", left: 92, top: 28, delay: 0.65, duration: 2.75, variant: "c" },
  { kind: "emoji", char: "🎯", left: 8, top: 30, delay: 1.15, duration: 2.95, variant: "a" },
  { kind: "dot", className: "bg-pink-400 dark:bg-pink-400", left: 62, top: 16, delay: 0.05, duration: 2.12, variant: "b" },
  { kind: "emoji", char: "📌", left: 40, top: 70, delay: 1.25, duration: 2.18, variant: "c" },
];

function variantClass(v: Buddy["variant"]) {
  if (v === "a") return "mg-hop-a";
  if (v === "b") return "mg-hop-b";
  return "mg-hop-c";
}

export function HoppingBuddies() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {BUDDIES.map((b, i) => {
        const style = {
          left: `${b.left}%`,
          top: `${b.top}%`,
          animationDelay: `${b.delay}s`,
          animationDuration: `${b.duration}s`,
        } as const;
        const hop = variantClass(b.variant);
        if (b.kind === "dot") {
          return (
            <span
              key={i}
              className={`mg-hop-buddy absolute h-2.5 w-2.5 rounded-full opacity-80 shadow-sm ${b.className} ${hop}`}
              style={style}
            />
          );
        }
        return (
          <span
            key={i}
            className={`mg-hop-buddy absolute select-none text-lg leading-none opacity-85 text-zinc-700 drop-shadow-sm dark:text-zinc-200 ${hop}`}
            style={style}
          >
            {b.char}
          </span>
        );
      })}
    </div>
  );
}
