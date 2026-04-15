import Link from "next/link";
import { ReactNode } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { hasClerk } from "@/lib/env";
import { brand, navLinks } from "./site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06101dcc] backdrop-blur-xl">
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-extrabold tracking-tight">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-soft">O</div>
          <div className="leading-tight">
            <div>{brand.name}</div>
            <div className="hidden text-[11px] font-medium text-slate-400 md:block">AI automation + LinkedIn development</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {hasClerk() ? (<>
            <SignedOut>
              <Link href="/sign-in" className="btn-secondary hidden md:inline-flex">تسجيل الدخول</Link>
              <Link href="/sign-up" className="btn-primary">ابدأ الآن</Link>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" className="btn-secondary hidden md:inline-flex">اللوحة</Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </>) : (
            <>
              <Link href="/pricing" className="btn-secondary hidden md:inline-flex">الأسعار</Link>
              <Link href="/dashboard" className="btn-primary">تجربة اللوحة</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10 text-slate-400">
      <div className="container-shell grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="font-semibold text-white">{brand.name}</div>
          <div className="mt-2 max-w-md">{brand.tagline}</div>
          <div className="mt-4 text-sm">{brand.email} · {brand.location}</div>
        </div>
        <div>
          <div className="mb-3 font-semibold text-white">المنتج</div>
          <div className="flex flex-col gap-2">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <div className="mb-3 font-semibold text-white">القانوني</div>
          <div className="flex flex-col gap-2">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="container-shell mt-8 border-t border-white/10 pt-6 text-sm">© 2026 {brand.name}. All rights reserved.</div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
