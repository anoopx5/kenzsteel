"use client";

import React from "react";
import { ArrowDown, CheckCircle2, ShieldCheck, FileCheck, Layers, Ruler } from "lucide-react";

export function QualitySection() {
  const steps = [
    {
      num: "01",
      title: "PROJECT INPUT",
      desc: "Contract drawing & RFI audit",
    },
    {
      num: "02",
      title: "MODEL REVIEW",
      desc: "Parametric geometry & grid check",
    },
    {
      num: "03",
      title: "COORDINATION",
      desc: "Spatial clash detection against MEP",
    },
    {
      num: "04",
      title: "DETAILING",
      desc: "Shop sheets & part mark generation",
    },
    {
      num: "05",
      title: "DRAWING REVIEW",
      desc: "Independent senior checker review",
    },
    {
      num: "06",
      title: "FINAL DELIVERY",
      desc: "Controlled fabrication package release",
    },
  ];

  const qualityPillars = [
    {
      title: "Dimensional Review",
      desc: "Zero-tolerance audit of member lengths, camber profiles, bolt gauges, and anchor bolt coordinates.",
      icon: Ruler,
    },
    {
      title: "Connection Review",
      desc: "Verification of shear capacities, moment joint geometry, weld sizes, and bolt grip clearances.",
      icon: ShieldCheck,
    },
    {
      title: "Model Coordination",
      desc: "Multi-discipline clash management to eliminate on-site spatial conflicts before cutting steel.",
      icon: Layers,
    },
    {
      title: "Drawing Review",
      desc: "100% check of individual piece marks, bill of materials, hole diameters, and shop weld callouts.",
      icon: FileCheck,
    },
    {
      title: "Documentation Control",
      desc: "Indexed transmittals, revision logs, and synchronized NC/DSTV data release for CNC machinery.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="quality" className="py-20 lg:py-24 bg-[#F1F7FC] border-b border-[#DCE6F0] relative overflow-hidden">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200/80 inline-block mb-3">
            QUALITY ASSURANCE // QC PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-4">
            Built Around Accuracy and Quality
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our multi-tier quality control protocol ensures that every drawing issued from our engineering desk is checked, coordinated, and ready for immediate workshop fabrication.
          </p>
        </div>

        {/* Visual Quality-Control Flowchart */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span>STAGE-GATE AUDIT WORKFLOW</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
            {steps.map((s) => (
              <React.Fragment key={s.num}>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#FF6B00]/40 transition-colors">
                  <span className="font-mono text-xs font-bold text-[#FF6B00] block mb-1">
                    {s.num}
                  </span>
                  <h4 className="font-mono text-xs font-bold text-slate-900 mb-1">
                    {s.title}
                  </h4>
                  <p className="text-[10px] text-slate-600 leading-tight">
                    {s.desc}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 5 Core Quality Focus Pillars (Requirement 19) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {qualityPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#FF6B00]/40 transition-all hover:shadow-md group"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF6B00] mb-3.5 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 stroke-[1.75]" />
                </div>
                <h3 className="font-bold text-xs font-heading text-slate-900 mb-1.5 uppercase tracking-wide">
                  {p.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
