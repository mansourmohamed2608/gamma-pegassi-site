"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-white/35"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-20 border-t border-white/10 bg-ink/98 p-5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:left-auto sm:w-[26rem]">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Navigation</p>
          <nav aria-label="Mobile navigation" className="grid">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 px-1 py-4 text-xl font-semibold text-white/82 transition hover:border-white/25 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" className="mt-8 w-full" variant="primary">
            Discuss a Project
          </Button>
        </div>
      ) : null}
    </div>
  );
}
