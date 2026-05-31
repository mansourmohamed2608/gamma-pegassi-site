import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/62 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Gamma Pegassi home">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
            <span className="absolute inset-0 rounded-full bg-accent/10 opacity-0 blur-md transition group-hover:opacity-100" />
            <Image
              src={site.logo.mark}
              alt="Gamma Pegassi logo mark"
              width={34}
              height={34}
              priority
              className="relative h-8 w-8 object-contain"
            />
          </span>
          <span className="text-sm font-extrabold tracking-[0.28em] text-white sm:text-base">
            GAMMA PEGASSI
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/68 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact">Book a Call</Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
