import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.companyName} | Dubai Software, AI & Game Studio`,
    template: `%s | ${site.companyName}`,
  },
  description: site.description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: site.logo.mark, type: "image/png", sizes: "1024x1024" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: `${site.companyName} | Dubai Software, AI & Game Studio`,
    description: site.description,
    url: site.url,
    siteName: site.companyName,
    images: [{ url: site.logo.mark, width: 1024, height: 1024, alt: `${site.companyName} mark` }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.companyName} | Dubai Software, AI & Game Studio`,
    description: site.description,
    images: [site.logo.mark],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
