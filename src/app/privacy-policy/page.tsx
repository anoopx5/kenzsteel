import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Kenz Engineering",
  description: "Privacy policy regarding structural engineering drawing confidentiality and data security.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-slate-50 py-14 border-b border-slate-200 bg-blueprint-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Privacy Policy" }]}
            theme="light"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1B3D] tracking-tight">
            Privacy Policy &amp; Data Protection
          </h1>
          <p className="text-sm font-mono text-slate-500 mt-2">
            Last Updated: January 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-[#0B1220]">1. Engineering Document Confidentiality</h2>
          <p>
            At {COMPANY.name}, we recognize that architectural designs, structural calculations, fabrication drawings, and 3D models transmitted to us represent proprietary intellectual property. All drawings and files submitted for estimation or detailing execution are treated as confidential information.
          </p>

          <h2 className="text-xl font-bold text-[#0B1220]">2. Information We Collect</h2>
          <p>
            We collect information provided directly by clients and prospective partners, including contact details (name, corporate affiliation, email address, telephone numbers) and technical project data (specifications, CAD/BIM models, tender documents).
          </p>

          <h2 className="text-xl font-bold text-[#0B1220]">3. Utilization of Project Data</h2>
          <p>
            Project documents and specifications are utilized strictly for the purposes of structural detailing, connection evaluation, fabrication drawing preparation, and project coordination. We do not distribute or share client project information with unauthorized third parties.
          </p>

          <h2 className="text-xl font-bold text-[#0B1220]">4. Data Storage &amp; Security</h2>
          <p>
            Our internal digital storage systems maintain administrative, technical, and physical safeguards designed to protect structural project files and communications against unauthorized access, loss, or misuse.
          </p>

          <h2 className="text-xl font-bold text-[#0B1220]">5. Contact Regarding Privacy</h2>
          <p>
            For inquiries regarding our confidentiality protocols or Non-Disclosure Agreements (NDA), contact our engineering desk at: <span className="font-mono">{COMPANY.email}</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
