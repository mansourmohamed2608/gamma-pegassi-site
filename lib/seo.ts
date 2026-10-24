import type { Metadata } from "next";
import { site } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
};

export function pageMetadata({ title, description, path = "/" }: SeoInput): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = `${title} | ${site.companyName}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.companyName,
      type: "website",
      images: [
        {
          url: new URL(site.logo.mark, site.url).toString(),
          width: 1024,
          height: 1024,
          alt: `${site.companyName} mark`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [new URL(site.logo.mark, site.url).toString()],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.companyName,
    legalName: site.legalName,
    url: site.url,
    logo: new URL(site.logo.mark, site.url).toString(),
    foundingDate: "2025-02",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.publicAddress,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: site.socialLinks.map((link) => link.href),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  serviceTypes,
}: {
  name: string;
  description: string;
  path: string;
  serviceTypes: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: new URL(path, site.url).toString(),
    serviceType: serviceTypes,
    areaServed: {
      "@type": "Place",
      name: "Dubai, United Arab Emirates",
    },
    provider: {
      "@type": "Organization",
      name: site.companyName,
      url: site.url,
    },
  };
}
