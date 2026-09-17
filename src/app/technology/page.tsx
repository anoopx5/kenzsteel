import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/ui/SectionHeading";
import { SoftwareCard } from "@/components/cards/SoftwareCard";
import { CTASection } from "@/components/sections/CTASection";
import { SOFTWARE_TOOLS, SOFTWARE_DISCLAIMER } from "@/data/software";

export const metadata: Metadata = {
  title: "Technology & Software Stack | Kenz Engineering",
  description:
    "Explore the 3D structural modelling, BIM, and detailing software platforms supporting Kenz Engineering's precision fabrication workflows.",
};

export default function TechnologyPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header Banner (Light Corporate) */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200 bg-blueprint-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Technology" }]}
            theme="light"
            className="mb-6"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] block mb-2">
              DIGITAL WORKFLOWS
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 font-heading tracking-tight leading-tight mb-4">
              Technology That Supports Precision
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We leverage advanced 3D structural modeling and BIM software to construct high-fidelity digital replicas of structural steelwork, ensuring fabrication accuracy and interdisciplinary coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Software Tools Grid */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="SOFTWARE PLATFORMS"
            title="Industry-Standard Digital Detailing Platforms"
            subtitle="Software environments configured to match client fabrication protocols, CNC equipment, and downstream data exchanges."
            className="mb-12"
            coordinateTag="TECH-05"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOFTWARE_TOOLS.map((tool) => (
              <SoftwareCard key={tool.id} tool={tool} />
            ))}
          </div>

          {/* Legal and Technical Disclaimer */}
          <div className="mt-12 p-6 bg-white border border-slate-200 rounded-2xl font-mono text-xs text-slate-600 leading-relaxed shadow-xs">
            <span className="text-slate-900 font-bold block mb-1 font-heading">
              TRADEMARK &amp; USAGE STATEMENT:
            </span>
            {SOFTWARE_DISCLAIMER}
          </div>
        </div>
      </section>

      {/* Data Exchange Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="INTEROPERABILITY"
            title="Standard Data Formats &amp; Machine Feeds"
            subtitle="Automated extraction directly from verified 3D models into fabrication shop management and automated CNC processing lines."
            className="mb-12"
            coordinateTag="DATA-04"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                ext: "NC / DSTV",
                title: "Robotic Cutting & Drilling",
                desc: "Direct machine code files for automated saw, drill line, and coping robotic cells.",
              },
              {
                ext: "DXF / DWG",
                title: "Plate Profile Nesting",
                desc: "1:1 true scale cutting geometry for CNC plasma, oxy-fuel, and waterjet plate tables.",
              },
              {
                ext: "IFC / CIS/2",
                title: "OpenBIM Exchange",
                desc: "Vendor-neutral 3D model formats for general contractor clash detection and coordination.",
              },
              {
                ext: "3D PDF / NWD",
                title: "Interactive Review",
                desc: "Lightweight navigable 3D models for project managers, shop fabricators, and erection crews.",
              },
            ].map((fmt, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#FF6B00]/50 hover:shadow-lg hover:shadow-orange-500/5 transition-all group">
                <span className="font-mono text-xs font-bold text-[#FF6B00] block mb-2">{fmt.ext}</span>
                <h4 className="text-base font-bold text-slate-900 font-heading mb-2 group-hover:text-[#FF6B00] transition-colors">{fmt.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{fmt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Detailing in a Specific Software Environment?"
        subtitle="Contact our engineering team to discuss file exchange protocols, drawing title blocks, and CNC export formats."
      />
    </div>
  );
}
