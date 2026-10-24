"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const trigger = triggerRef.current;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const backgroundElements = Array.from(
      document.querySelectorAll<HTMLElement>("body > main, body > footer"),
    );
    const previousInert = backgroundElements.map((element) => element.inert);

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
    body.style.overflow = "hidden";
    backgroundElements.forEach((element) => {
      element.inert = true;
    });

    const focusableSelector =
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    window.requestAnimationFrame(() => {
      const focusable = rootRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
      focusable?.item(1)?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(
        rootRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      ).filter((element) => !element.hasAttribute("disabled"));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      backgroundElements.forEach((element, index) => {
        element.inert = previousInert[index];
      });
      window.requestAnimationFrame(() => trigger?.focus());
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white transition hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen ? (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="absolute inset-x-0 top-full h-[calc(100svh-5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-ink p-5 shadow-2xl shadow-black/60 sm:left-auto sm:right-0 sm:w-[26rem]"
        >
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/55">Navigation</p>
          <nav aria-label="Mobile navigation" className="grid">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className="border-b border-white/10 px-1 py-4 text-xl font-semibold text-white/82 transition hover:border-white/25 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 w-full"
            variant="primary"
          >
            Discuss a Project
          </Button>
        </div>
      ) : null}
    </div>
  );
}
