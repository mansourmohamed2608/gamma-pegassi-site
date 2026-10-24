import Image from "next/image";
import Link from "next/link";
import { site, tash8eelPublicLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030404]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Gamma Pegassi home">
            <Image
              src={site.logo.mark}
              alt="Gamma Pegassi logo mark"
              width={42}
              height={42}
              className="h-10 w-10 object-contain"
            />
            <span className="text-sm font-extrabold tracking-[0.3em] text-white">
              GAMMA PEGASSI
            </span>
          </Link>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/58">{site.shortPositioning}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Contact</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/68">
              <p>{site.location}</p>
              <a className="break-normal text-[13px] transition hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              {site.whatsappUrl ? (
                <a className="transition hover:text-white" href={site.whatsappUrl}>
                  WhatsApp
                </a>
              ) : null}
              {site.socialLinks.map((link) => (
                <a
                  key={link.href}
                  className="transition hover:text-white"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} (opens in a new tab)`}
                >
                  LinkedIn
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Links</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/68">
              {site.nav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">
              Products
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-white/68">
              {tash8eelPublicLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/42">
        © {year} {site.companyName}. Built in Dubai. All rights reserved.
      </div>
    </footer>
  );
}
