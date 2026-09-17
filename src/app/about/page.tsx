import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Crosshair, Wrench, Award, Users, Cpu, FileCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Structural Steel Detailing Specialists | KENZ Engineering",
  description:
    "Learn about KENZ Engineering's engineering-first approach to structural steel detailing, 3D modelling, and fabrication coordination.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FFF8F2] via-white to-white py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "About Us" }]}
            theme="light"
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FFF4ED] px-3.5 py-1.5 rounded-md border border-[#FED7AA] inline-block mb-4 font-bold">
                ABOUT KENZ ENGINEERING
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 font-outfit">
                Engineering Accuracy From <span className="bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">Model to Fabrication</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                KENZ Engineering delivers world-class structural steel detailing and LOD 400 BIM modeling solutions that eliminate site fit-up clashes, streamline workshop fabrication, and protect critical project schedules across North America and international markets.
              </p>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
                <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                  <Award className="w-4 h-4 text-[#FF6B00]" /> AISC &amp; NISD Detailing Standards
                </span>
                <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                  <Cpu className="w-4 h-4 text-[#FF6B00]" /> Tekla LOD 400 Parametric Models
                </span>
                <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B00]" /> 99.8% First-Pass Shop Fit-Up
                </span>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-orange-500/10 aspect-[4/3]">
                <Image
                  src="/images/engineers-site.jpg"
                  alt="KENZ Structural Engineers coordinating on site"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#FF6B00] uppercase">LEAD DETAILING TEAM</div>
                    <div className="text-sm font-bold text-[#0F172A]">Certified Structural Detailers &amp; Modelers</div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                tag="OUR PHILOSOPHY"
                title="Bridging Structural Design and Workshop Fabrication"
                coordinateTag="PHIL-01"
              />

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                In modern structural construction, detailing is the critical bridge between engineering intent and tangible steel framing. An error or ambiguity at the detailing stage ripples downstream into expensive CNC re-runs, field torching, and crane standby penalties.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                At KENZ Engineering, our detailing approach begins with thorough engineering comprehension. We scrutinize contract documents, audit load transfer mechanisms, and proactively resolve spatial discrepancies through RFIs before releasing a single fabrication sheet.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-[#FFFDF9] border border-slate-200 hover:border-[#FF6B00]/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF4ED] text-[#FF6B00] flex items-center justify-center font-bold mb-3">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-1 font-outfit">Fabricator-Centric Detailing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Drawings customized to client shop tooling, bed capacities, punch limits, and standard member mark numbering.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#FFFDF9] border border-slate-200 hover:border-[#FF6B00]/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF4ED] text-[#FF6B00] flex items-center justify-center font-bold mb-3">
                    <Crosshair className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-base mb-1 font-outfit">Total Model Coordination</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rigorous spatial clash detection with architectural envelopes, MEP runs, and crane erection envelopes.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Schematic Visual */}
            <div className="lg:col-span-5">
              <div className="bg-[#FFFDF9] border border-slate-200 rounded-2xl p-8 shadow-lg">
                <span className="text-xs text-[#FF6B00] font-bold uppercase block mb-6 tracking-wider font-mono">
                  CORE DETAILING PRINCIPLES
                </span>

                <div className="space-y-4">
                  {[
                    {
                      label: "Dimensional Integrity",
                      desc: "Zero tolerance on member lengths, hole gauges, bevel angles, and bolt pitch.",
                    },
                    {
                      label: "Constructability First",
                      desc: "Verifying wrench access, torque multiplier clearance, and field insertion paths.",
                    },
                    {
                      label: "Code Compliance",
                      desc: "Detailing compliant with AISC 360, AISC 341, NISD, CISC, and Eurocode 3 standards.",
                    },
                    {
                      label: "Automated Downstream Data",
                      desc: "Direct generation of DSTV, NC1, DXF, and KISS files for automated saw, drill, and coping lines.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                      <div className="w-6 h-6 rounded-full bg-[#FFF4ED] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-[#0F172A] block font-outfit">{item.label}</span>
                        <span className="text-xs text-slate-600 block mt-0.5 leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Gallery */}
      <section className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="EXECUTIVE LEADERSHIP"
            title="Decades of Steel Detailing Experience"
            subtitle="Meet the technical directors and lead checkers steering our engineering accuracy."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: "Anoop Kumar",
                role: "Managing Director & Principal",
                exp: "22+ Yrs Exp",
                img: "/images/leader-1.jpg",
                spec: "Heavy Industrial & High-Rise",
              },
              {
                name: "David Vance, PE",
                role: "VP of Engineering & QA",
                exp: "19+ Yrs Exp",
                img: "/images/leader-2.jpg",
                spec: "AISC Seismic & Connection Design",
              },
              {
                name: "Marcus Holloway",
                role: "Chief Tekla BIM Specialist",
                exp: "16+ Yrs Exp",
                img: "/images/leader-3.jpg",
                spec: "Parametric Custom Components & CNC",
              },
              {
                name: "Elena Rostova",
                role: "Lead Structural Checker",
                exp: "14+ Yrs Exp",
                img: "/images/leader-4.jpg",
                spec: "Multi-Tier Verification & Shop Audits",
              },
              {
                name: "Tariq Al-Mansoor",
                role: "Project Operations Director",
                exp: "15+ Yrs Exp",
                img: "/images/leader-5.jpg",
                spec: "Fast-Track Submittals & RFQ Desk",
              },
            ].map((leader, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0F172A]/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                    {leader.exp}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-base group-hover:text-[#FF6B00] transition-colors font-outfit">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#EA580C] mt-0.5">{leader.role}</p>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 pt-2 border-t border-slate-100 font-mono">
                    {leader.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Capability Pillars */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="OPERATIONAL WORKFLOW"
            title="How We Execute Detailing Projects"
            subtitle="Clear stages designed to keep steel fabricators and project teams informed and on schedule."
            className="mb-14"
            coordinateTag="OPS-04"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Information Audit",
                desc: "Reviewing all contract documents, engineering drawings, and architectural plans to log comprehensive RFIs early.",
              },
              {
                step: "02",
                title: "Advanced 3D Modeling",
                desc: "Creating high-density LOD 400 structural models including all connections, stiffeners, clips, and hardware.",
              },
              {
                step: "03",
                title: "Multi-Tier QA Checking",
                desc: "Independent checker verification of every assembly drawing, single part sheet, weld symbol, and bolt schedule.",
              },
              {
                step: "04",
                title: "Erection & CNC Release",
                desc: "Secured delivery of indexed drawing packages, automated CNC data, and prompt support during shop fabrication.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-[#FFFDF9] border border-slate-200 p-7 rounded-2xl flex flex-col justify-between shadow-sm hover:border-[#FF6B00] hover:shadow-xl hover:shadow-orange-500/10 transition-all group">
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF6B00] bg-[#FFF4ED] px-2.5 py-1 rounded-md border border-[#FED7AA] inline-block mb-3">STAGE // {p.step}</span>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-outfit group-hover:text-[#FF6B00] transition-colors">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Partner on Your Next Steel Project?"
        subtitle="Connect with our technical team to discuss project specifications, detailing timelines, and drawing submittal schedules."
      />
    </div>
  );
}
