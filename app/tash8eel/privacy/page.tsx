import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site, tash8eelAi } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Tash8eel AI Privacy Policy",
  description:
    "Privacy Policy for Tash8eel AI, operated by Gamma Pegassi TB L.L.C-FZ in Dubai, United Arab Emirates.",
  path: "/tash8eel/privacy",
});

export default function Tash8eelPrivacyPage() {
  return (
    <LegalPage
      label="Tash8eel AI"
      title="Tash8eel AI Privacy Policy"
      intro={`Tash8eel AI is operated by ${tash8eelAi.operator}, ${tash8eelAi.ownerLocation}. This policy explains how Tash8eel AI may process data when merchants, users, customers, or integrations interact with the platform.`}
      sections={[
        {
          title: "Data We May Process",
          body: [
            "Tash8eel AI may process merchant account data, customer conversation data, order data, POS and cashier data, inventory data, reporting data, integration metadata, call-related metadata, and support data.",
            "The exact data processed depends on the merchant setup, enabled integrations, staff configuration, communication channels, and operational workflows connected to the platform.",
          ],
        },
        {
          title: "Service Providers and Integrations",
          body: [
            "Tash8eel AI may use or integrate with WhatsApp Business API, Messenger, Instagram, Meta APIs, Twilio, OpenAI API, and cloud or hosting providers to deliver platform functionality.",
            "These providers may process data as needed for messaging, automation, AI assistance, hosting, logging, security, support, and reliability.",
          ],
        },
        {
          title: "How Data Is Used",
          body: [
            "Data is used to provide the service, automate workflows, support customer communication, process orders, generate reports, maintain security, provide support, and improve reliability.",
            "Gamma Pegassi does not sell personal data. Merchant and customer data is not used for unrelated advertising.",
          ],
        },
        {
          title: "Retention",
          body: [
            "Data may be retained only as needed for service delivery, legal, security, fraud-prevention, backup, and operational purposes.",
            "Retention periods may vary depending on account status, merchant configuration, support needs, compliance requirements, and technical backup cycles.",
          ],
        },
        {
          title: "Security",
          body: [
            "Gamma Pegassi applies practical administrative, technical, and operational safeguards designed to protect data against unauthorized access, misuse, loss, alteration, or disclosure.",
            "No system can be guaranteed completely secure, but Tash8eel AI is designed to use access control, service-provider controls, monitoring, and operational review appropriate for merchant workflows.",
          ],
        },
        {
          title: "User Rights and Deletion Requests",
          body: [
            `Merchants, users, customers, or authorized requesters may contact ${site.email} to request access, correction, or deletion of relevant data.`,
            "Requests may require identity or authorization verification and may be processed subject to legal, security, fraud-prevention, backup, and operational retention requirements.",
          ],
        },
        {
          title: "Contact",
          body: [`For privacy questions, contact ${site.email}.`],
        },
      ]}
    />
  );
}
