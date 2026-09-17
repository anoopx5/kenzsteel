import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Engineering Services | Structural Steel Detailing & 3D Modelling",
  description:
    "Explore Kenz Engineering's 7 specialized structural steel detailing, 3D modelling, fabrication drawings, connection detailing, and BIM services.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF8F2] via-white to-white py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "Services" }]}
            theme="light"
            className="mb-6"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] bg-[#FFF4ED] px-3.5 py-1.5 rounded-md border border-[#FED7AA] inline-block mb-3">
              SPECIALIZED CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-5 font-outfit">
              Structural Steel Engineering &amp; <span className="bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">Detailing Services</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Technical solutions designed to support structural steel projects from engineering input through fabrication. Each service is tailored around precision, practical constructability, and shop-floor productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Specialized Detailing for Your Steel Project?"
        subtitle="Request a quote or send your structural drawings for a prompt technical scope review."
      />
    </div>
  );
}
