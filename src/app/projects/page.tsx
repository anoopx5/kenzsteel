import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProjectsFilterSection } from "@/components/sections/ProjectsFilterSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Structural Steel Detailing Projects | Portfolio",
  description:
    "Explore Kenz Engineering's portfolio of structural steel detailing and 3D modeling projects spanning industrial facilities, commercial complexes, and infrastructure.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header Banner (Light Corporate) */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200 bg-blueprint-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Projects" }]}
            theme="light"
            className="mb-6"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] block mb-2">
              ENGINEERING PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-4">
              Structural Steel Projects &amp; Case Studies
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore our structural steel detailing, 3D modeling, and fabrication documentation across industrial plants, commercial towers, PEB warehouses, and heavy infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Filterable Projects Grid */}
      <ProjectsFilterSection />

      {/* CTA */}
      <CTASection
        title="Have a Project with Similar Technical Demands?"
        subtitle="Our team is equipped to handle complex framing, heavy plate connections, and tight delivery schedules."
      />
    </div>
  );
}
