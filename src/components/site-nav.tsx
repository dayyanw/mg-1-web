import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { UserProfileMenu } from "@/components/user-profile-menu";

const linkClass =
  "rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-100";

export function SiteNav() {
  return (
    <header className="relative z-20 border-b border-zinc-200/70 bg-white/65 px-4 py-3 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/65 sm:px-6">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-4"
        aria-label="Main"
      >
        <div className="flex items-center gap-3">
          <UserProfileMenu />
          <Link
            href="/"
            className="hidden text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:block"
          >
            {SITE_NAME}
          </Link>
        </div>
        <div className="flex items-center gap-1 rounded-xl border border-zinc-200/80 bg-white/75 p-1 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/70 dark:bg-zinc-900/70 dark:shadow-black/30 sm:gap-2">
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
