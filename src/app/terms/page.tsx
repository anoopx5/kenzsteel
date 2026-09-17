import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Kenz Engineering",
  description: "Terms and conditions governing structural steel detailing services, drawing submittals, and fabrication documentation.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-slate-50 py-14 border-b border-slate-200 bg-blueprint-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Terms & Conditions" }]}
            theme="light"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1B3D] tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm font-mono text-slate-500 mt-2">
            Effective Date: January 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-[#0B1220]">1. Scope of Detailing Services</h2>
          <p>
            {COMPANY.name} provides structural steel detailing, 3D modelling, and fabrication documentation based solely on contract drawings, architectural documents, and structural engineering specifications provided by the client or Engineer of Record (EOR).
          </p>

          <h2 className="text-xl font-bold text-[#0B1220]">2. Requests for Information (RFI) &amp; Design Discrepancies</h2>
          <p>
            Where inconsistencies, omissions, or dimension conflicts are identified during the 3D modeling process, {COMPANY.name} logs formal RFIs. Detailing of affected areas proceeds following written clarification or resolution from the client or EOR.
          </p>

          <h2 className="text-xl font-bold text-[#0B1220]">3. Drawing Review &amp; Fabrication Approval</h2>
          <p>
            Unless explicitly designated otherwise under contract terms, shop fabrication drawings and erection plans are issued for review and approval prior to cutting or fabrication. Fabricators and contractors are responsible for verifying overall field dimensions and interface conditions prior to steel erection.
          </p>

          <h2 className="text-xl font-bold text-[#0B1220]">4. Software &amp; Digital File Deliverables</h2>
          <p>
            Deliverables typically comprise electronic drawing packages (PDF, DWG), CNC machine data (NC, DSTV, DXF), and 3D coordination files (IFC). Intellectual property rights for detailing methods, proprietary macros, and internal templates remain with {COMPANY.name}.
          </p>

          <h2 className="text-xl font-bold text-[#0B1220]">5. Contact &amp; Governance</h2>
          <p>
            Contractual queries regarding project scopes, change orders, or project schedules should be directed to: <span className="font-mono">{COMPANY.email}</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
