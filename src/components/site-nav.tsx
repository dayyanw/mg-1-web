import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const linkClass =
  "rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-100 dark:focus-visible:ring-teal-400/80 dark:focus-visible:ring-offset-zinc-950";

export function SiteNav() {
  return (
    <header className="relative z-20 border-b border-zinc-200/60 bg-white/55 px-4 py-3 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/55 sm:px-6">
      <nav
        className="mx-auto flex max-w-3xl items-center justify-between gap-4"
        aria-label="Main"
      >
        <Link
          href="/"
          className="rounded-md text-sm font-semibold tracking-tight text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-zinc-50 dark:focus-visible:ring-teal-400/80 dark:focus-visible:ring-offset-zinc-950"
        >
          {SITE_NAME}
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/info" className={linkClass}>
            Info
          </Link>
        </div>
      </nav>
    </header>
  );
}
