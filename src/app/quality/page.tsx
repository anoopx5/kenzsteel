import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { QUALITY_FLOW, APPLICABLE_STANDARDS, STANDARDS_COMPLIANCE_NOTE } from "@/data/quality";
import { CheckCircle2, ShieldCheck, Crosshair, FileCheck, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality, Coordination & Standards | Kenz Engineering",
  description:
    "Learn about Kenz Engineering's multi-stage quality assurance process, checker review gates, and international structural steel detailing standards.",
};

export default function QualityPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF8F2] via-white to-white py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "Quality & Standards" }]}
            theme="light"
            className="mb-6"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FFF4ED] px-3.5 py-1.5 rounded-md border border-[#FED7AA] inline-block mb-3 font-bold">
              QUALITY ASSURANCE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-5 font-outfit">
              Quality, Coordination &amp; <span className="bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">Compliance</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              In structural steel detailing, accuracy is non-negotiable. Our rigorous quality management framework verifies model fidelity and drawing precision at every stage before workshop release.
            </p>
          </div>
        </div>
      </section>

      {/* Six-Stage Quality Workflow */}
      <section className="py-20 lg:py-28 bg-[#FFFDF9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="INTERNAL AUDIT GATES"
            title="The 6-Stage Detailing Verification Workflow"
            subtitle="Every project transmittal moves through defined engineering gates with independent senior checker sign-off."
            className="mb-14"
            coordinateTag="QA-06"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {QUALITY_FLOW.map((q) => (
              <div
                key={q.step}
                className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-[#FF6B00] hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#FF6B00] bg-[#FFF4ED] px-2.5 py-1 rounded-md border border-[#FED7AA]">
                    GATE 0{q.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] group-hover:scale-125 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-1.5 font-outfit group-hover:text-[#FF6B00] transition-colors">{q.name}</h3>
                <p className="text-xs text-[#EA580C] mb-3 font-semibold font-mono">{q.action}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{q.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Standards Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="CODE ADAPTABILITY"
            title="Applicable Design &amp; Detailing Standards"
            subtitle="Configured to align with your project specifications and governing regional steel codes."
            className="mb-8"
            coordinateTag="STD-05"
          />

          {/* Standards Compliance Statement */}
          <div className="p-7 bg-[#FFFDF9] border-l-4 border-[#FF6B00] rounded-2xl mb-12 shadow-sm border border-slate-200">
            <h4 className="font-bold text-[#0F172A] text-lg mb-2 font-outfit">Standard Alignment Note</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {STANDARDS_COMPLIANCE_NOTE}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPLICABLE_STANDARDS.map((std) => (
              <div
                key={std.code}
                className="p-7 rounded-2xl border border-slate-200 bg-[#FFFDF9] hover:border-[#FF6B00] hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-bold text-[#0F172A] font-outfit">
                    {std.code}
                  </span>
                  <span className="text-xs font-mono text-[#FF6B00] font-bold bg-[#FFF4ED] px-2 py-0.5 rounded border border-[#FED7AA]">{std.region}</span>
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-2 font-outfit">{std.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{std.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Overview */}
      <section className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              tag="CHECKLIST RIGOR"
              title="Checker Verification Scope"
              subtitle="Every shop assembly drawing is audited against a strict technical checklist prior to client issue."
              className="mb-8"
              coordinateTag="CHK-08"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-slate-700">
              {[
                "Contract drawing general notes and revision consistency",
                "Anchor bolt layout coordinates against foundation grids",
                "Member main section sizes and mill cut lengths",
                "Hole diameters, pitch, gauge, and edge distances",
                "Weld symbols, weld sizes, and weld process requirements",
                "Connection capacity and design reaction force adequacy",
                "Tool access for bolt tightening and erection hoisting",
                "Surface preparation, blast profile, and coating specs",
              ].map((chk, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-[#FF6B00]/40 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span className="text-slate-800">{chk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Demand Strict Accuracy for Your Fabrication?"
        subtitle="Contact our engineering team to review our drawing checking protocols and submittal packages."
      />
    </div>
  );
}
