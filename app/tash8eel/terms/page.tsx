import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site, tash8eelAi } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Tash8eel AI Terms of Service",
  description:
    "Terms of Service for Tash8eel AI, operated by Gamma Pegassi TB L.L.C-FZ.",
  path: "/tash8eel/terms",
});

export default function Tash8eelTermsPage() {
  return (
    <LegalPage
      label="Tash8eel AI"
      title="Tash8eel AI Terms of Service"
      intro={`Tash8eel AI is operated by ${tash8eelAi.operator}, ${tash8eelAi.ownerLocation}. These terms describe acceptable use and merchant responsibilities when using the platform.`}
      sections={[
        {
          title: "Acceptable Use",
          body: [
            "Users may use Tash8eel AI only for lawful merchant operations, customer communication, order handling, POS and cashier workflows, reporting, automation, and related business purposes.",
            "Users must comply with applicable laws, Meta and WhatsApp policies, messaging consent rules, platform terms, and any third-party provider requirements connected to their account.",
          ],
        },
        {
          title: "Merchant Responsibilities",
          body: [
            "Users are responsible for the accuracy and legality of their business data, customer lists, message templates, outbound messages, product information, prices, staff access, and connected integrations.",
            "Merchants are responsible for obtaining any required customer consent before sending messages or using customer data through connected communication channels.",
          ],
        },
        {
          title: "Restrictions",
          body: [
            "Users must not use Tash8eel AI for spam, misleading messages, unlawful products or services, abusive conduct, unauthorized access, security testing without permission, data scraping, or interference with the platform.",
            "Users must not attempt to bypass access controls, impersonate others, misuse APIs, upload malicious content, or use the service in a way that harms customers, merchants, providers, or Gamma Pegassi.",
          ],
        },
        {
          title: "Service Availability and Changes",
          body: [
            "Tash8eel AI may change over time as product functionality, integrations, infrastructure, provider requirements, and merchant needs evolve.",
            "Gamma Pegassi may update, limit, suspend, or discontinue parts of the service where needed for maintenance, security, compliance, reliability, provider changes, or product development.",
          ],
        },
        {
          title: "Limitation of Liability",
          body: [
            "To the maximum extent permitted by applicable law, Gamma Pegassi is not liable for indirect, incidental, special, consequential, punitive, or lost-profit damages arising from use of Tash8eel AI.",
            "Users are responsible for reviewing automated outputs, customer messages, operational decisions, reports, and connected workflow actions before relying on them in business operations.",
          ],
        },
        {
          title: "Contact",
          body: [`For terms or service questions, contact ${site.email}.`],
        },
      ]}
    />
  );
}
