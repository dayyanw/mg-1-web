import type { Metadata } from "next";
import Link from "next/link";
import { MAILTO_SUPPORT, SITE_NAME, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Info",
  description: `About ${SITE_NAME}, this website, and how to get support.`,
};

export default function InfoPage() {
  return (
    <div className="relative isolate flex min-h-full flex-1 flex-col overflow-hidden">
      <main className="mx-auto w-full max-w-lg flex-1 px-5 py-10 sm:px-6 sm:py-14">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 p-8 shadow-md shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-700/60 dark:bg-zinc-900/75 dark:shadow-black/30 sm:p-10">
          <div className="relative space-y-8">
            <header className="mg-animate-in">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                Website
              </p>
              <h1 className="mt-2 bg-gradient-to-br from-zinc-900 via-zinc-800 to-violet-800 bg-clip-text text-3xl font-semibold tracking-tight text-transparent dark:from-zinc-50 dark:via-zinc-200 dark:to-violet-300 sm:text-4xl">
                About this site
              </h1>
            </header>

            <section className="mg-animate-in mg-delay-1 space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                What you are visiting
              </h2>
              <p className="text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                This is the official web presence for{" "}
                <strong className="font-medium text-zinc-800 dark:text-zinc-200">
                  {SITE_NAME}
                </strong>
                —a habit tracking app built around productivity, routines,
                discipline, and goals. The site is intentionally simple: it
                shares what {SITE_NAME} is and how to reach support.
              </p>
            </section>

            <section className="mg-animate-in mg-delay-2 space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                What {SITE_NAME} is for
              </h2>
              <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-zinc-600 marker:text-teal-600 dark:text-zinc-400 dark:marker:text-teal-400">
                <li>Supporting users who use the MG-1 app day to day</li>
                <li>Publishing basic product and contact information</li>
                <li>Offering a single place for help and feedback by email</li>
              </ul>
            </section>

            <section className="mg-animate-in mg-delay-3 rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 dark:border-zinc-600/80 dark:bg-zinc-800/50">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Support
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Questions, bugs, or ideas? Email us anytime.
              </p>
              <a
                href={MAILTO_SUPPORT}
                className="mt-4 inline-flex text-sm font-medium text-teal-700 underline-offset-4 transition-colors hover:text-teal-800 hover:underline dark:text-teal-400 dark:hover:text-teal-300"
              >
                {SUPPORT_EMAIL}
              </a>
            </section>

            <p className="mg-animate-in mg-delay-4 text-center text-xs text-zinc-500 dark:text-zinc-500">
              <Link
                href="/"
                className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
              >
                ← Back to home
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
