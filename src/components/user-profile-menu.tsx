"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type UserState = {
  displayName: string;
  email: string | null;
};

const TOKEN_STORAGE_KEYS = [
  "mg1_token",
  "mg_token",
  "authToken",
  "token",
] as const;

const ONBOARDING_STORAGE_KEYS = [
  "onboardingAnswers",
  "mg1_onboarding_answers",
  "mg_onboarding_answers",
] as const;

function readStoredToken() {
  for (const key of TOKEN_STORAGE_KEYS) {
    const value = localStorage.getItem(key);
    if (value && value.trim()) return value.trim();
  }
  return null;
}

function readStoredDisplayName() {
  for (const key of ONBOARDING_STORAGE_KEYS) {
    const raw = localStorage.getItem(key);
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw) as { displayName?: unknown };
      if (typeof parsed.displayName === "string" && parsed.displayName.trim()) {
        return parsed.displayName.trim();
      }
    } catch {
      continue;
    }
  }
  return null;
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "U";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export function UserProfileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [user, setUser] = useState<UserState>({
    displayName: "Your profile",
    email: null,
  });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadUser() {
      const fallbackName = readStoredDisplayName();
      if (fallbackName) {
        setUser((prev) => ({ ...prev, displayName: fallbackName }));
      }

      const token = readStoredToken();
      if (!token) return;

      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || "";
      const requestUrl = `${baseUrl}/api/auth/me`;

      try {
        const res = await fetch(requestUrl, {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
        });
        if (!res.ok) return;

        const data = (await res.json()) as {
          user?: {
            name?: string | null;
            email?: string | null;
            onboardingAnswers?: { displayName?: string };
          };
        };

        const displayName =
          data.user?.onboardingAnswers?.displayName?.trim() ||
          data.user?.name?.trim() ||
          fallbackName ||
          "Your profile";

        setUser({
          displayName,
          email: data.user?.email ?? null,
        });
      } catch {
        // Keep local fallback values when API is unavailable.
      }
    }

    void loadUser();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const initials = useMemo(() => getInitials(user.displayName), [user.displayName]);

  function handleSignOut() {
    setIsSigningOut(true);
    for (const key of TOKEN_STORAGE_KEYS) {
      localStorage.removeItem(key);
    }
    setTimeout(() => {
      setUser({ displayName: "Your profile", email: null });
      setMenuOpen(false);
      setIsSigningOut(false);
      window.location.href = "/";
    }, 250);
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="group inline-flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-white/80 px-3 py-2 text-left shadow-sm shadow-zinc-900/5 transition-all hover:border-zinc-300 hover:bg-white dark:border-zinc-700/70 dark:bg-zinc-900/70 dark:shadow-black/20 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-violet-500 text-xs font-semibold text-white">
          {initials}
        </span>
        <span className="min-w-0">
          <span className="block max-w-[11rem] truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {user.displayName}
          </span>
          <span className="block text-xs text-zinc-500 dark:text-zinc-400">
            {user.email ?? "Manage account"}
          </span>
        </span>
      </button>

      {menuOpen ? (
        <div
          role="menu"
          className="absolute left-0 z-30 mt-2 w-48 overflow-hidden rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 shadow-xl shadow-zinc-900/10 backdrop-blur dark:border-zinc-700/80 dark:bg-zinc-900/95 dark:shadow-black/40"
        >
          <Link
            href="/profile"
            role="menuitem"
            onClick={() => setMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            Profile
          </Link>
          <Link
            href="/settings"
            role="menuitem"
            onClick={() => setMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            Settings
          </Link>
          <button
            type="button"
            role="menuitem"
            disabled={isSigningOut}
            onClick={handleSignOut}
            className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50 hover:text-rose-700 disabled:cursor-not-allowed disabled:opacity-70 dark:text-rose-400 dark:hover:bg-rose-500/10 dark:hover:text-rose-300"
          >
            {isSigningOut ? "Signing out..." : "Sign out"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
