import { MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-full flex-1 flex-col overflow-hidden">
      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-12 sm:px-6 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 p-8 shadow-md shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-700/60 dark:bg-zinc-900/75 dark:shadow-black/30 sm:p-10">
          <div className="relative">
            <p className="mg-animate-in text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
              Habit tracking
            </p>
            <h1 className="mg-animate-in mg-delay-1 mt-3 bg-gradient-to-br from-zinc-900 via-zinc-800 to-teal-800 bg-clip-text text-4xl font-semibold tracking-tight text-transparent dark:from-zinc-50 dark:via-zinc-200 dark:to-teal-300 sm:text-5xl">
              MG-1
            </h1>
            <p className="mg-animate-in mg-delay-2 mt-5 text-pretty text-[0.9375rem] leading-relaxed text-zinc-600 dark:text-zinc-400">
              MG-1 is a habit tracking app focused on productivity, routines, and
              goals. This site provides product information and how to reach
              support.
            </p>

            <section className="mg-animate-in mg-delay-3 mt-10">
              <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 dark:border-zinc-600/80 dark:bg-zinc-800/50">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Support
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  For questions, feedback, or help with MG-1, contact us by email.
                </p>
                <a
                  href={MAILTO_SUPPORT}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-teal-600 dark:hover:bg-teal-500"
                >
                  <svg
                    className="h-4 w-4 shrink-0 opacity-90"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="truncate">{SUPPORT_EMAIL}</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
