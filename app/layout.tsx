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
    default: `${site.companyName} | Dubai Software Studio`,
    template: `%s | ${site.companyName}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: site.logo.mark, type: "image/png", sizes: "1024x1024" },
    ],
    apple: [{ url: site.logo.mark, type: "image/png", sizes: "1024x1024" }],
  },
  openGraph: {
    title: `${site.companyName} | Dubai Software Studio`,
    description: site.description,
    url: site.url,
    siteName: site.companyName,
    images: [{ url: site.logo.mark, width: 1024, height: 1024, alt: `${site.companyName} mark` }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.companyName} | Dubai Software Studio`,
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
