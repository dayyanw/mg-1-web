export function SiteBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-zinc-100 via-teal-50/40 to-violet-100/50 dark:from-zinc-950 dark:via-teal-950/20 dark:to-violet-950/30"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed -left-1/4 top-1/4 -z-20 h-[min(80vw,36rem)] w-[min(80vw,36rem)] rounded-full bg-teal-400/25 blur-3xl dark:bg-teal-500/15"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed -right-1/4 bottom-0 -z-20 h-[min(90vw,42rem)] w-[min(90vw,42rem)] rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/12"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed left-1/2 top-1/2 -z-20 h-px w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10"
        aria-hidden
      />
    </>
  );
}
