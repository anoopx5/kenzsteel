"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  HardHat,
  Grid3X3,
  Users2,
  FileText,
  Hammer,
  Box,
  BarChart3,
  Search,
  CheckCircle,
  Headphones,
  Quote,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Compass,
  FileSpreadsheet,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { HomeContactForm } from "@/components/forms/HomeContactForm";
import { HeroImageSlider } from "@/components/sections/HeroImageSlider";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function HomePage() {
  const stats = [
    {
      numericValue: 25,
      suffix: "+",
      decimals: 0,
      label: "YEARS OF EXCELLENCE",
      subtext: "Combined Engineering Leadership",
      icon: HardHat,
    },
    {
      numericValue: 350,
      suffix: "+",
      decimals: 0,
      label: "COMPLETED PROJECTS",
      subtext: "Commercial, Industrial & PEB",
      icon: Building2,
    },
    {
      numericValue: 40,
      suffix: "M+",
      decimals: 0,
      label: "SQ FT DETAILED",
      subtext: "Structural & Miscellaneous Steel",
      icon: Grid3X3,
    },
    {
      numericValue: 99.8,
      suffix: "%",
      decimals: 1,
      label: "FABRICATION ACCURACY",
      subtext: "Zero-Clash Workshop Guarantee",
      icon: ShieldCheck,
    },
  ];

  const featuredProjects = [
    {
      title: "PARKVIEW CORPORATE CENTER",
      location: "Austin, TX",
      size: "285,000 SF",
      tonnage: "14,200 Tons",
      type: "Commercial Office Tower",
      software: "Tekla Structures LOD 400",
      image: "/images/proj-parkview.jpg",
      slug: "commercial-mixed-use-development",
      scope: "Full 3D Modelling, Connection Detailing, Shop Sheets & CNC Data",
    },
    {
      title: "RIVERDALE SHOPPING & LOGISTICS CENTER",
      location: "Denver, CO",
      size: "620,000 SF",
      tonnage: "28,500 Tons",
      type: "Industrial & Crane Gantry",
      software: "Tekla / Navisworks Audit",
      image: "/images/project-industrial.jpg",
      slug: "industrial-manufacturing-facility",
      scope: "Built-up Girders, Stepped Crane Columns & High-Strength Splices",
    },
    {
      title: "WESTSIDE TECH INNOVATION CAMPUS",
      location: "Seattle, WA",
      size: "1.2M SF",
      tonnage: "36,000 Tons",
      type: "High-Tech Corporate Campus",
      software: "Autodesk Revit / Tekla BIM",
      image: "/images/project-commercial.jpg",
      slug: "commercial-mixed-use-development",
      scope: "Transfer Trusses, Castellated Beams & Architectural Cantilevers",
    },
    {
      title: "NORTHRIDGE FULFILLMENT MARKETPLACE",
      location: "Atlanta, GA",
      size: "320,000 SF",
      tonnage: "18,800 Tons",
      type: "Long-Span PEB Logistics Hub",
      software: "Tekla Structures / SDS2",
      image: "/images/project-logistics.jpg",
      slug: "pre-engineered-logistics-hub",
      scope: "Tapered Rafters, Continuous Purlins & Loading Dock Framing",
    },
  ];

  const capabilities = [
    {
      title: "Structural Steel Detailing",
      tagline: "SHOP & ASSEMBLY FABRICATION SHEETS",
      desc: "Complete shop drawings customized to your shop tooling, hole punch limits, weld preparations, and member mark schedules.",
      icon: FileSpreadsheet,
      badge: "LOD 400",
      href: "/services/structural-steel-detailing",
      deliverables: ["Single Part & Assembly Sheets", "Anchor Bolt Plans & GA Drawings", "Cut Lists & Advanced Bill of Materials"],
    },
    {
      title: "3D BIM Steel Modelling",
      tagline: "FEDERATED CLASH-FREE MODELS",
      desc: "High-density 3D structural models built in Tekla Structures and Revit, coordinating every beam, column, stiffener, and bolt.",
      icon: Box,
      badge: "TEKLA & REVIT",
      href: "/services/3d-steel-modelling",
      deliverables: ["Full Spatial Clash Verification", "MEP & Duct Penetration Audit", "Navisworks NWD / 3D PDF Review"],
    },
    {
      title: "Connection Detailing & Engineering",
      tagline: "MOMENT, SHEAR & BRACE JOINTS",
      desc: "AISC 360-16 and Eurocode 3 compliant connection design, stiffener calculation reports, and high-strength bolt schedules.",
      icon: Hammer,
      badge: "AISC COMPLIANT",
      href: "/services/connection-detailing",
      deliverables: ["Standard & Custom Joint Designs", "Engineer-Stamped Calculations", "Fabricator-Economic Plate Sizing"],
    },
    {
      title: "Automated CNC Machine Export",
      tagline: "DIRECT WORKSHOP INTEGRATION",
      desc: "Automated NC, DSTV, and DXF files formatted for automated drill lines, plate burning tables, and robotic beam coping lines.",
      icon: Cpu,
      badge: "DSTV / NC DIRECT",
      href: "/services/fabrication-drawings",
      deliverables: ["DSTV NC1 Cutting Data", "Plate Profiling DXF Files", "Field Bolt & Erection Sequencing"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "DISCOVER & AUDIT",
      subtitle: "Contract Review & Early RFIs",
      desc: "We scrutinize design drawings, audit structural load paths, and log early RFIs to resolve ambiguities before modelling.",
      icon: Search,
    },
    {
      step: "02",
      title: "PLAN & LOD 400 MODEL",
      subtitle: "3D Detailing in Tekla / Revit",
      desc: "Constructing high-fidelity 3D structural models incorporating all plate fittings, bevels, clips, and erection tolerances.",
      icon: Box,
    },
    {
      step: "03",
      title: "COORDINATE & CLASH CHECK",
      subtitle: "Zero-Clash Assurance",
      desc: "Clash-auditing against architectural envelopes, equipment models, and MEP services to protect your shop floor.",
      icon: Hammer,
    },
    {
      step: "04",
      title: "MULTI-TIER QA CHECK",
      subtitle: "Independent Senior Checker Review",
      desc: "Rigorous verification of every bolt hole gauge, weld symbol, flange bevel, and member cut list prior to issue.",
      icon: ShieldCheck,
    },
    {
      step: "05",
      title: "DELIVER & CNC RELEASE",
      subtitle: "Fabrication Drawings & Support",
      desc: "Delivering indexed drawing packages and automated CNC data with direct ongoing support through site erection.",
      icon: Headphones,
    },
  ];

  const leaders = [
    {
      name: "MICHAEL TURNER",
      role: "Chief Executive Officer",
      exp: "28+ Years in Structural Steel Detailing",
      image: "/images/leader-1.jpg",
    },
    {
      name: "SARAH MITCHELL",
      role: "President & Technical Director",
      exp: "AISC Member • Tekla Structures Master",
      image: "/images/leader-2.jpg",
    },
    {
      name: "JAMES WILSON",
      role: "Chief Operating Officer",
      exp: "Oversees Global Detailing Operations",
      image: "/images/leader-3.jpg",
    },
    {
      name: "DAVID RODRIGUEZ",
      role: "Chief Preconstruction Officer",
      exp: "BIM Coordination & Estimation Authority",
      image: "/images/leader-4.jpg",
    },
    {
      name: "LAURA BENNETT",
      role: "Chief Quality & Compliance Officer",
      exp: "Zero-Clash & Audit Verification Lead",
      image: "/images/leader-5.jpg",
    },
  ];

  const testimonials = [
    {
      quote:
        "Kenz Engineering is a trusted partner that delivers exceptional results. Their Tekla connection models and shop drawings eliminated workshop ambiguities entirely. Zero rework on site.",
      author: "David Thompson",
      role: "CEO & Managing Director",
      company: "Thompson Steel Fabricators (Austin, TX)",
      image: "/images/avatar-1.jpg",
    },
    {
      quote:
        "Their attention to detail, AISC compliance, and prompt turnaround on complex engineering revisions saved our team weeks on site. Outstanding structural detailing team.",
      author: "Sarah Mitchell",
      role: "Vice President of Construction",
      company: "Apex Commercial Contractors",
      image: "/images/avatar-2.jpg",
    },
    {
      quote:
        "Kenz is our go-to partner for heavy industrial and large-span PEB projects. Automated NC/DSTV data imports directly into our CNC beam lines seamlessly. Committed to excellence.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "Horizon Steel Works",
      image: "/images/avatar-3.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white text-[#0F172A] overflow-hidden">
      {/* =========================================================================
          SECTION 01: HERO (LUMINOUS, HIGH-IMPACT, ORANGE GRADIENT BRANDED)
         ========================================================================= */}
      <section className="relative pt-4 sm:pt-6 pb-8 sm:pb-12 bg-gradient-to-b from-white via-[#FFFBF5] to-[#FFF7ED]/40 border-b border-orange-100/60 overflow-hidden">
        {/* Subtle Warm Grid Texture */}
        <div className="absolute inset-0 bg-warm-grid opacity-70 pointer-events-none" />

        {/* Ambient Warm Gradient Glows */}
        <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-gradient-to-br from-[#FF6B00]/10 via-[#F59E0B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-48 w-[450px] h-[450px] bg-gradient-to-tr from-[#FBBF24]/15 via-[#FF6B00]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Hero Top Content */}
          <div className="text-center max-w-4xl mx-auto space-y-3.5 sm:space-y-4.5">
            {/* Gradient Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF5EB] to-[#FFF0DF] border border-[#FDBA74] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] animate-pulse" />
              <span className="font-heading text-xs sm:text-sm font-extrabold tracking-widest text-[#EA580C] uppercase">
                BUILDING A STRONGER TOMORROW
              </span>
            </div>

            {/* Main Headline with Logo-Focused Gradient */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#0F172A] leading-[1.05] uppercase">
              STRUCTURAL STEEL DETAILING.<br />
              <span className="text-gradient-orange">
                ENGINEERED FOR PRECISION.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#475569] font-sans leading-relaxed max-w-2xl mx-auto">
              Kenz Engineering provides world-class 3D BIM modelling, connection design, and fabrication shop drawings that empower steel fabricators and general contractors worldwide.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/request-a-quote"
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] hover:from-[#EA580C] hover:to-[#D97706] text-white text-sm sm:text-base font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                <span>REQUEST A PROJECT QUOTE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] hover:text-[#EA580C] border-2 border-slate-200 hover:border-[#FDBA74] text-sm sm:text-base font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-xs"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 text-[#EA580C]" />
              </Link>
            </div>

            {/* Micro Technical Specs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-[#64748B]">
              <span className="flex items-center gap-1.5 text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> LOD 400 3D Models
              </span>
              <span className="flex items-center gap-1.5 text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> AISC &amp; Eurocode Compliant
              </span>
              <span className="flex items-center gap-1.5 text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> Direct CNC DSTV / NC Data
              </span>
            </div>
          </div>

          {/* Dynamic Hero Multi-Image Slider Carousel */}
          <HeroImageSlider />
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: STATS STRIP (WARM PLATINUM WITH ORANGE GRADIENTS)
         ========================================================================= */}
      <section className="bg-white py-8 sm:py-10 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FFFDF9] border border-orange-100 hover:border-[#F59E0B] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFF5EB] to-[#FFE8D1] border border-orange-200 flex items-center justify-center text-[#FF6B00] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-gradient-orange tracking-tight leading-none mb-2">
                    <AnimatedCounter
                      value={stat.numericValue}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      duration={1800}
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#64748B] font-sans">
                    {stat.subtext}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: FEATURED PROJECTS (RICH DATA & PHOTOGRAPHY)
         ========================================================================= */}
      <section id="projects" className="py-10 lg:py-14 bg-[#FAFAF9] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-200 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                <span>FEATURED PROJECTS PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
                PROVEN STEELWORK EXECUTION
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors group"
            >
              <span>VIEW ALL PROJECTS (28)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 Cards Grid with Rich Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredProjects.map((p, idx) => (
              <Link
                key={idx}
                href={`/projects/${p.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#FF6B00] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider text-[#EA580C] border border-orange-200 shadow-xs">
                    {p.type}
                  </div>
                  {/* Software Indicator */}
                  <div className="absolute bottom-3 right-3 bg-[#0F172A]/85 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] font-mono font-bold text-white shadow-xs">
                    {p.software.split(" ")[0]}
                  </div>
                </div>

                {/* Content Block with Rich Technical Data */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-heading font-bold uppercase tracking-tight text-[#0F172A] group-hover:text-[#EA580C] transition-colors leading-snug line-clamp-1 mb-2.5">
                      {p.title}
                    </h3>

                    {/* Technical Metric Chips */}
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs font-mono">
                      <div className="p-2 rounded bg-slate-50 border border-slate-200/80">
                        <span className="text-[10px] text-[#64748B] block">LOCATION</span>
                        <span className="font-bold text-[#0F172A] truncate block">{p.location}</span>
                      </div>
                      <div className="p-2 rounded bg-orange-50/60 border border-orange-200/60">
                        <span className="text-[10px] text-[#EA580C] block">TONNAGE</span>
                        <span className="font-bold text-[#EA580C] truncate block">{p.tonnage}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 mb-3 font-sans">
                      {p.scope}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-[#EA580C]">
                    <span>EXPLORE PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: CAPABILITIES (EXPERTISE ACROSS EVERY PHASE)
         ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column Description */}
            <div className="lg:col-span-4 space-y-3.5">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#EA580C] block">
                OUR CORE CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
                EXPERTISE ACROSS EVERY PHASE
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans pt-1">
                We self-perform, manage, and detail with extreme precision. Our integrated BIM and detailing workflow guarantees zero workshop downtime and perfect field erection.
              </p>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all"
                >
                  <span>VIEW ALL 7 SERVICES</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right 4 Grid Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {capabilities.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-orange-100 hover:border-[#FF6B00] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFF5EB] to-[#FFE8D1] border border-orange-200 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-orange-100 text-[#EA580C]">
                          {c.badge}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-heading font-bold uppercase tracking-tight text-[#0F172A] mb-1.5">
                        {c.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans mb-3">
                        {c.desc}
                      </p>

                      {/* Deliverable points */}
                      <ul className="space-y-1 text-xs text-[#334155] font-sans mb-4">
                        {c.deliverables.map((d, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={c.href}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] group-hover:underline"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: A PROVEN PROCESS (5-STEP ANIMATED WORKFLOW)
         ========================================================================= */}
      <section id="process" className="py-10 lg:py-14 bg-[#FFFDF9] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#EA580C] block mb-1.5">
              OUR DETAILING PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight mb-3">
              A PROVEN APPROACH. CONSISTENT RESULTS.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-sans">
              From contract drawing review and RFI logging through to advanced LOD 400 modeling, checker sign-off, and automated CNC release.
            </p>
          </div>

          {/* 5-Step Connected Timeline */}
          <div className="relative">
            {/* Connecting Horizontal Gradient Line */}
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#FBBF24] z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 relative z-10">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-orange-100 hover:border-[#FF6B00] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Step Number Circle */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF6B00] to-[#F59E0B] text-white text-sm font-heading font-black flex items-center justify-center mb-3 shadow-md shadow-orange-500/25 ring-4 ring-white">
                      {step.step}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#EA580C] font-semibold block mb-2">
                      {step.subtitle}
                    </span>

                    {/* Step Description */}
                    <p className="text-xs text-[#64748B] leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: LEADERSHIP (EXPERIENCED. COMMITTED. TRUSTED.)
         ========================================================================= */}
      <section id="leadership" className="py-10 lg:py-14 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#EA580C] block mb-1.5">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
                EXPERIENCED. COMMITTED. TRUSTED.
              </h2>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors"
            >
              <span>LEARN ABOUT OUR TEAM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 5 Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#FF6B00] overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Leader Info */}
                <div className="p-3.5 text-center">
                  <h3 className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wide text-[#0F172A] mb-0.5">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-heading font-semibold text-[#EA580C] mb-0.5">
                    {leader.role}
                  </p>
                  <p className="text-[10px] text-[#64748B] font-mono">
                    {leader.exp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: TESTIMONIAL QUOTE BANNER (CHARCOAL & AMBER GLOW)
         ========================================================================= */}
      <section className="relative bg-[#0F172A] text-white py-10 lg:py-14 overflow-hidden">
        {/* Architectural Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/testimonial-bg.jpg"
            alt="Commercial Architecture Background"
            fill
            loading="lazy"
            quality={75}
            className="object-cover"
          />
        </div>

        {/* Ambient Amber Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FF6B00]/15 to-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-[#F59E0B] mx-auto mb-4 opacity-95 stroke-[1.5]" />

          <p className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold leading-snug tracking-tight text-white mb-5 max-w-3xl mx-auto">
            &ldquo;Kenz Engineering is a trusted partner that delivers exceptional results. Their Tekla connection models and shop drawings eliminated workshop ambiguities entirely. Zero rework on site.&rdquo;
          </p>

          <p className="text-xs sm:text-sm font-heading font-bold uppercase tracking-widest text-[#FBBF24]">
            &mdash; David Thompson, CEO &amp; Managing Director, Thompson Steel Fabricators
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: GET IN TOUCH / PROJECT ENQUIRY (SPLIT WITH REAL PHOTO)
         ========================================================================= */}
      <section id="contact" className="py-10 lg:py-14 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Engineers On Site Photo & Direct Desk */}
            <div className="lg:col-span-5 space-y-5">
              {/* Engineers Site Photo */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-orange-200 shadow-md group">
                <Image
                  src="/images/engineers-site.jpg"
                  alt="Kenz Engineering Structural Detailing Team Reviewing Drawings On Site"
                  fill
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FBBF24] block font-bold mb-1">
                    FIELD COLLABORATION &bull; ACTIVE ESTIMATION
                  </span>
                  <p className="text-xs font-medium text-white/95 leading-relaxed">
                    Direct on-site engineering coordination with fabricators, erectors, and project managers.
                  </p>
                </div>
              </div>

              {/* Direct Info Card */}
              <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-orange-100 space-y-3.5 font-sans text-xs">
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#EA580C] block mb-1">
                    DIRECT ENGINEERING DESK
                  </span>
                  <h4 className="text-base sm:text-lg font-heading font-bold text-[#0F172A]">
                    Let&apos;s Build Something Great Together
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    Have drawings ready for estimation or need advice on connection detailing? Our engineers are ready to evaluate your scope.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2.5 border-t border-orange-100">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-[#0F172A] font-medium">info@kenzengineering.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-[#0F172A] font-medium">+1 (415) 555-0198</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-[#0F172A]">455 Market Street, Suite 200, San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Project Enquiry Form */}
            <div className="lg:col-span-7 bg-[#FFFDF9] border-2 border-orange-100/80 p-5 sm:p-8 rounded-2xl shadow-sm">
              <div className="mb-5 pb-3.5 border-b border-orange-100">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
                  TRANSMITTAL FORM // PROJECT ENQUIRY
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A]">
                  Submit Your Project Specifications
                </h3>
                <p className="text-xs text-[#64748B] font-sans mt-1">
                  Upload architectural/structural drawings (PDF, DWG, IFC, ZIP) for a prompt technical scope &amp; turnaround review.
                </p>
              </div>

              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: READY TO BUILD SOMETHING GREAT? (CTA BANNER)
         ========================================================================= */}
      <section className="bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] text-white py-8 sm:py-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-black uppercase tracking-tight text-white drop-shadow-xs">
                READY TO BUILD SOMETHING GREAT?
              </h3>
              <p className="text-xs sm:text-sm text-white/95 font-sans mt-1 max-w-xl">
                Let&apos;s talk about your project and how Kenz Engineering can bring millimeter accuracy to your steel fabrication.
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0F172A] hover:text-[#EA580C] text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl shrink-0"
            >
              <span>GET IN TOUCH NOW</span>
              <ArrowRight className="w-4 h-4 text-[#EA580C]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
