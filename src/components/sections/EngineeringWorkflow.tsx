"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileSearch, Cuboid, Crosshair, FileSpreadsheet, ShieldCheck, CheckCheck } from "lucide-react";

export function EngineeringWorkflow() {
  const steps = [
    {
      num: "01",
      title: "PROJECT INPUT",
      desc: "Audit contract drawings, specifications & RFIs.",
      icon: FileSearch,
    },
    {
      num: "02",
      title: "3D MODELLING",
      desc: "Parametric LOD 400 structural steel modeling.",
      icon: Cuboid,
    },
    {
      num: "03",
      title: "COORDINATION",
      desc: "Clash detection against MEP & architecture.",
      icon: Crosshair,
    },
    {
      num: "04",
      title: "DETAILING",
      desc: "Generate shop sheets, assemblies & CNC files.",
      icon: FileSpreadsheet,
    },
    {
      num: "05",
      title: "QA / QC",
      desc: "Lead checker audit of dimensions & weld details.",
      icon: ShieldCheck,
    },
    {
      num: "06",
      title: "FINAL DELIVERY",
      desc: "Fabrication package release & erection support.",
      icon: CheckCheck,
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] bg-[#FFF4ED] px-3.5 py-1.5 rounded-md border border-[#FED7AA] inline-block mb-3">
            WORKFLOW // DRAWING TO FABRICATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4 font-outfit">
            From Drawing to Fabrication
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A structured, repeatable engineering lifecycle that prevents jobsite fit-up errors and ensures seamless workshop fabrication.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[28px] left-[50px] right-[50px] h-[3px] bg-slate-100 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-slate-200 hover:border-[#FF6B00] hover:shadow-xl hover:shadow-orange-500/10 transition-all group"
                >
                  {/* Step Marker Node */}
                  <div className="w-14 h-14 rounded-full bg-[#FFF4ED] border-2 border-[#FF6B00] flex items-center justify-center text-[#FF6B00] group-hover:bg-gradient-to-r group-hover:from-[#FF6B00] group-hover:to-[#EA580C] group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Step Number Tag */}
                  <span className="font-mono text-xs font-bold text-[#FF6B00] mb-1">
                    {step.num}
                  </span>

                  {/* Title */}
                  <h3 className="font-mono text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2 font-outfit">
                    {step.title}
                  </h3>

                  {/* Explanation */}
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
