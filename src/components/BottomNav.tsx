"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  href: string;
  label: string;
  icon: React.ReactNode;
  match: (path: string) => boolean;
};

const iconCls = "h-6 w-6";

const ITEMS: Item[] = [
  {
    href: "/",
    label: "Home",
    match: (p) => p === "/",
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
      </svg>
    ),
  },
  {
    href: "/session",
    label: "Learn",
    match: (p) => p.startsWith("/session"),
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8.5 5.5 3.5-5.5 3.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "/library",
    label: "Units",
    match: (p) => p.startsWith("/library") || p.startsWith("/reader"),
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2z" />
        <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H19" />
      </svg>
    ),
  },
  {
    href: "/leaderboard",
    label: "Rank",
    match: (p) => p.startsWith("/leaderboard"),
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M6 3h12v5a6 6 0 0 1-12 0z" />
        <path d="M6 5H3v2a4 4 0 0 0 3 3.87" />
        <path d="M18 5h3v2a4 4 0 0 1-3 3.87" />
      </svg>
    ),
  },
  {
    href: "/settings",
    label: "Settings",
    match: (p) => p.startsWith("/settings"),
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.34a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.66 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09c0 .68.4 1.3 1.03 1.56a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9c.26.63.88 1.03 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.03z" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-stretch justify-around pb-[env(safe-area-inset-bottom)]">
        {ITEMS.map((item) => {
          const active = item.match(pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-16 flex-col items-center gap-0.5 px-2 pb-2 pt-2.5 text-[11px] font-semibold ${
                active ? "text-gold" : "text-faint"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
