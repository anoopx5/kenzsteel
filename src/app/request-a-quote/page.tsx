import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { CheckCircle2, ShieldCheck, Clock, FileCheck, Layers, Cpu, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Project Quote | Kenz Engineering",
  description:
    "Submit your structural steel detailing drawings and project requirements for a detailed scope review, timeline estimate, and quotation.",
};

export default function RequestQuotePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF8F2] via-white to-white py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "Request a Quote" }]}
            theme="light"
            className="mb-4"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FFF4ED] px-3.5 py-1.5 rounded-md border border-[#FED7AA] inline-block mb-3 font-bold">
              ESTIMATION &amp; SCOPE REVIEW // REF RFQ-2026
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 font-outfit">
              Request a Project Quote
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Upload your structural contract drawings, design models, or project specifications. KENZ Engineering delivers accurate structural steel detailing, 3D modelling and fabrication documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column RFQ Layout */}
      <section className="py-14 lg:py-24 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Technical Illustration & Engineering Scoping Panel */}
            <div className="lg:col-span-5 space-y-6">
              {/* Technical Blueprint Illustration Box */}
              <div className="bg-white border border-slate-200 rounded-2xl p-7 relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3 text-xs font-mono text-slate-500">
                  <span className="font-bold text-[#0F172A]">STEEL DETAILING SCOPING</span>
                  <span className="text-[#FF6B00] font-bold">LOD 400</span>
                </div>

                {/* Technical Steel Portal Frame SVG */}
                <div className="w-full h-48 bg-[#FFFDF9] border border-slate-200 rounded-xl mb-6 p-2 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-warm-grid opacity-60" />
                  <svg viewBox="0 0 320 180" className="w-full h-full" fill="none">
                    <g stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3">
                      <line x1="20" y1="150" x2="300" y2="150" />
                      <line x1="40" y1="150" x2="40" y2="40" />
                      <line x1="160" y1="150" x2="160" y2="20" />
                      <line x1="280" y1="150" x2="280" y2="40" />
                    </g>
                    {/* Columns & Rafters */}
                    <line x1="40" y1="150" x2="40" y2="60" stroke="#0F172A" strokeWidth="3" />
                    <line x1="280" y1="150" x2="280" y2="60" stroke="#0F172A" strokeWidth="3" />
                    <line x1="40" y1="60" x2="160" y2="30" stroke="#FF6B00" strokeWidth="3" />
                    <line x1="160" y1="30" x2="280" y2="60" stroke="#FF6B00" strokeWidth="3" />
                    {/* Bracing */}
                    <line x1="40" y1="140" x2="160" y2="85" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 2" />
                    <line x1="160" y1="85" x2="280" y2="140" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 2" />
                    <circle cx="160" cy="30" r="5" fill="#FF6B00" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="40" cy="60" r="4" fill="#F59E0B" />
                    <circle cx="280" cy="60" r="4" fill="#F59E0B" />
                    {/* Labels */}
                    <text x="160" y="20" fill="#0F172A" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      RIDGE NODE #R-01
                    </text>
                    <text x="40" y="165" fill="#FF6B00" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      BASE PL 35mm
                    </text>
                    <text x="280" y="165" fill="#FF6B00" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      BASE PL 35mm
                    </text>
                  </svg>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] mb-2 font-outfit">
                  What to Include in Your RFQ Package
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  For the fastest and most accurate scope evaluation, we recommend attaching the following files if available:
                </p>

                <ul className="space-y-2.5 text-xs font-mono text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>Structural contract drawings (EOR sheets, plans, sections)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>Architectural drawings for envelope &amp; clash coordination</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>Project specification documents (AISC, BS, Eurocode standards)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>Fabricator shop standards (hole sizes, bolt types, weld rules)</span>
                  </li>
                </ul>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-xs">
                  <Clock className="w-5 h-5 text-[#FF6B00] mb-2" />
                  <span className="font-bold text-[#0F172A]">Fast Review</span>
                  <span className="text-[10px] text-slate-500">Within 24 Hours</span>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#FF6B00] mb-2" />
                  <span className="font-bold text-[#0F172A]">Confidential</span>
                  <span className="text-[10px] text-slate-500">Full NDA Protection</span>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center shadow-xs">
                  <FileCheck className="w-5 h-5 text-[#FF6B00] mb-2" />
                  <span className="font-bold text-[#0F172A]">AISC Aligned</span>
                  <span className="text-[10px] text-slate-500">NISD &amp; LOD 400</span>
                </div>
              </div>
            </div>

            {/* Right Column: Complete RFQ Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 p-7 sm:p-10 rounded-2xl shadow-xl">
              <div className="mb-8 pb-5 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] block mb-1">
                  PROJECT SPECIFICATION FORM
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight font-outfit">
                  Submit Your Project Requirements
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Complete the fields below to initiate your engineering scope review.
                </p>
              </div>

              <QuoteRequestForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
