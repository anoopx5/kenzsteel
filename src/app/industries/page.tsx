import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/ui/SectionHeading";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { CTASection } from "@/components/sections/CTASection";
import { INDUSTRIES } from "@/data/industries";
import { CheckCircle2, Factory, Building2, Warehouse, TrainFront, Landmark, Boxes } from "lucide-react";

export const metadata: Metadata = {
  title: "Sectors & Industries | Structural Steel Detailing",
  description:
    "Explore structural steel detailing solutions across heavy industrial plants, commercial towers, PEB warehouses, infrastructure bridges, and architectural steel.",
};

const ICONS: Record<string, React.ElementType> = {
  Factory,
  Building2,
  Warehouse,
  TrainFront,
  Landmark,
  Boxes,
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF8F2] via-white to-white py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "Industries" }]}
            theme="light"
            className="mb-6"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] bg-[#FFF4ED] px-3.5 py-1.5 rounded-md border border-[#FED7AA] inline-block mb-3">
              SECTORS SERVED
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-5 font-outfit">
              Structural Engineering Solutions Across <span className="bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">Industry Sectors</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every industry carries distinct fabrication constraints, design code criteria, and erection requirements. Discover how KENZ Engineering adapts its detailing workflows to your specific sector.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive Sector Sections */}
      <section className="py-20 lg:py-28 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ICONS[ind.icon] || Factory;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl border transition-all duration-300 ${
                  isEven
                    ? "bg-white border-slate-200 shadow-md"
                    : "bg-[#FFFDF9] border-slate-200 shadow-sm"
                }`}
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#FFF4ED] border border-[#FED7AA] text-[#FF6B00] shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#FF6B00] font-bold font-mono bg-[#FFF4ED] px-2.5 py-1 rounded-md border border-[#FED7AA]">
                      SECTOR 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-outfit">{ind.name}</h2>
                  <p className="text-xs text-[#EA580C] font-semibold font-mono">{ind.tagline}</p>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    {ind.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold block mb-2 text-[#0F172A] font-outfit">
                      Key Framing Applications:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ind.keyStructures.map((struct, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                          <span className="text-slate-700">{struct}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-7 rounded-2xl border border-slate-200 bg-white font-mono text-xs text-slate-700 shadow-sm">
                    <span className="text-xs font-bold text-[#FF6B00] block uppercase mb-4 tracking-wider">
                      SPECIFIC DETAILING PRIORITIES
                    </span>
                    <ul className="space-y-3.5">
                      {ind.detailingFocus.map((focus, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0 mt-1.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Planning a Steel Structure in Your Industry?"
        subtitle="Speak with our technical detailing team about project specifications and turnaround times."
      />
    </div>
  );
}
