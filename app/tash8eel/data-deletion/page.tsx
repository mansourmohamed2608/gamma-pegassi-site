import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Tash8eel AI Data Deletion Instructions",
  description:
    "Instructions for requesting deletion of Tash8eel AI account data, customer data, or integration data.",
  path: "/tash8eel/data-deletion",
});

export default function Tash8eelDataDeletionPage() {
  return (
    <LegalPage
      label="Tash8eel AI"
      title="Tash8eel AI Data Deletion Instructions"
      intro="Merchants, users, customers, or authorized requesters can request deletion of account data, customer data, or integration data associated with Tash8eel AI."
      sections={[
        {
          title: "How To Request Deletion",
          body: [
            `Send an email to ${site.email} with the subject line: Data Deletion Request.`,
            "Include the account or business name, requester email, the data you want deleted, and proof that you are authorized to make the request.",
          ],
        },
        {
          title: "Information To Include",
          body: [
            "Account or business name connected to Tash8eel AI.",
            "Requester email address and role.",
            "A clear description of the account data, customer data, or integration data to delete.",
            "Proof of authorization, such as account ownership, admin access, business authorization, or other verification details.",
          ],
        },
        {
          title: "Review and Processing",
          body: [
            "Deletion requests are reviewed before processing to confirm identity, authority, account scope, and operational impact.",
            "Requests are processed subject to legal, security, fraud-prevention, backup, and operational retention requirements.",
          ],
        },
        {
          title: "Contact",
          body: [`For data deletion requests, email ${site.email}.`],
        },
      ]}
    />
  );
}
