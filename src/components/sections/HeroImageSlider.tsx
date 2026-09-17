"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  id: string;
  image: string;
  phase: string;
  project: string;
  scopeTag: string;
  title: string;
  badge: string;
  tonnage: string;
  standards: string;
  href: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero-construction.jpg",
    phase: "ACTIVE ERECTION PHASE // CRANE 02",
    project: "42-STOREY COMMERCIAL TOWER",
    scopeTag: "PRIMARY STEELWORK SCOPE // AISC 360-16",
    title: "High-Rise Structural Framing & Heavy Crane Gantry Infrastructure",
    badge: "100% FABRICATION-VERIFIED",
    tonnage: "36,000 TONS STEEL",
    standards: "AISC 360-16 / AWS D1.1",
    href: "/projects/commercial-mixed-use-development",
  },
  {
    id: "slide-2",
    image: "/images/project-industrial.jpg",
    phase: "LOD 400 SHOP FABRICATION",
    project: "HEAVY METALLURGICAL & PROCESSING COMPLEX",
    scopeTag: "HEAVY INDUSTRIAL // ZERO CLASH",
    title: "Process Pipe Racks, Stepped Runway Columns & Hopper Structures",
    badge: "ZERO CLASH WORKSHOP FIT-UP",
    tonnage: "48,500 TONS STEEL",
    standards: "AISC / OSHA / PIP",
    href: "/projects/industrial-manufacturing-facility",
  },
  {
    id: "slide-3",
    image: "/images/project-logistics.jpg",
    phase: "PEB AUTOMATED WAREHOUSE",
    project: "GLOBAL E-COMMERCE FULFILLMENT MEGA-HUB",
    scopeTag: "LONG-SPAN PEB // TEKLA BIM",
    title: "1.2M Sq Ft Clear-Span Portal Frames & Multi-Tier Mezzanines",
    badge: "RAPID CNC DSTV DATA",
    tonnage: "18,200 TONS STEEL",
    standards: "MBMA / AISC / Eurocode 3",
    href: "/projects/pre-engineered-logistics-hub",
  },
  {
    id: "slide-4",
    image: "/images/project-infrastructure.jpg",
    phase: "INFRASTRUCTURE OVERPASS",
    project: "METROPOLITAN HIGHWAY FLYOVER & TRUSS BRIDGE",
    scopeTag: "HIGH-LOAD DECK // AASHTO",
    title: "Curved Box Girders, Orthotropic Steel Decks & Seismic Bearings",
    badge: "100% ULTRASONIC TESTED",
    tonnage: "24,000 TONS STEEL",
    standards: "AASHTO LRFD / AWS D1.5",
    href: "/projects/highway-flyover-steel-overpass",
  },
  {
    id: "slide-5",
    image: "/images/engineers-site.jpg",
    phase: "ON-SITE FIELD VERIFICATION",
    project: "PRECISION FIT-UP & BIM AUDIT",
    scopeTag: "DIGITAL TWIN // FIELD COORDINATION",
    title: "Clash-Free Structural Detailing & Laser-Scanned Erection Sequences",
    badge: "0-RFI ERECTION GOAL",
    tonnage: "420+ PROJECTS ISSUED",
    standards: "ISO 9001:2015 / AISC QA",
    href: "/about",
  },
  {
    id: "slide-6",
    image: "/images/project-commercial.jpg",
    phase: "AESS CATEGORY 4 EXPOSED STEEL",
    project: "TRANSIT CONCOURSE & AERODYNAMIC TERMINAL",
    scopeTag: "ARCHITECTURAL STEEL // COMPLEX GEOMETRY",
    title: "Architectural Curved Tubular Trusses & Signature Cast Node Atriums",
    badge: "PREMIUM AESS SPEC",
    tonnage: "15,800 TONS STEEL",
    standards: "AISC 303-16 / AESS-4",
    href: "/projects/airport-terminal-canopy",
  },
];

export function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Continuous auto-sliding every 3.5 seconds without pausing on hover
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, currentIndex]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <div className="relative w-full mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-orange-200/90 shadow-2xl shadow-orange-950/10 select-none bg-white">
      {/* Slider Viewport */}
      <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              {/* 100% Bright, Natural & Clear Image - Zero Dark Black Shading */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index <= 1}
                loading={index <= 1 ? "eager" : "lazy"}
                quality={85}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>
          );
        })}

        {/* Floating Top-Left Badge (Luminous White Glass) */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-orange-200/90 shadow-lg flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#FF6B00] animate-ping" />
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block leading-none mb-1">
              {currentSlide.phase}
            </span>
            <span className="text-xs sm:text-sm font-heading font-extrabold text-slate-900 tracking-tight block leading-none">
              {currentSlide.project}
            </span>
          </div>
        </div>

        {/* Floating Top-Right Badges (Luminous White Glass) */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2">
          <div className="hidden sm:flex bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-orange-200/80 text-slate-900 items-center gap-2 font-mono text-xs font-bold shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>{currentSlide.badge}</span>
          </div>

          <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-orange-200 font-mono text-xs font-extrabold text-slate-900 shadow-md">
            <span className="text-[#FF6B00]">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="text-slate-400 mx-1">/</span>
            <span className="text-slate-500">{String(HERO_SLIDES.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Previous Button (Clean White) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 border border-slate-200 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 hover:border-[#FF6B00]"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5] text-slate-800" />
        </button>

        {/* Next Button (Clean White) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 border border-slate-200 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 hover:border-[#FF6B00]"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5] text-slate-800" />
        </button>

        {/* Bottom Floating Info Card (Clean Luminous White Glass - NO BLACK SHADE) */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20">
          <div className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-orange-200/90 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#EA580C] font-black px-2 py-0.5 rounded-full bg-orange-100/90 border border-orange-200">
                  {currentSlide.scopeTag}
                </span>
                <span className="text-[10px] font-mono text-slate-600 hidden sm:inline-flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  {currentSlide.standards}
                </span>
              </div>

              <h3 className="text-base sm:text-xl lg:text-2xl font-heading font-black text-slate-900 tracking-tight leading-tight mb-1.5">
                {currentSlide.title}
              </h3>

              <div className="flex items-center gap-4 text-xs">
                <span className="font-mono font-black text-[#EA580C] flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#FF6B00]" />
                  {currentSlide.tonnage}
                </span>
                <Link
                  href={currentSlide.href}
                  className="font-heading font-bold uppercase tracking-wider text-slate-800 hover:text-[#FF6B00] inline-flex items-center gap-1 transition-colors underline underline-offset-4 decoration-orange-300 hover:decoration-[#FF6B00]"
                >
                  <span>Explore Project Specs</span>
                  <ArrowUpRight className="w-3 h-3 text-[#FF6B00]" />
                </Link>
              </div>
            </div>

            {/* Quick Action Badge */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] text-white font-heading font-black uppercase tracking-wider text-[11px] sm:text-xs shadow-md shadow-orange-500/25">
                100% FABRICATION-VERIFIED
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators / Navigation Dots */}
        <div className="absolute top-3 sm:top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-orange-200/80 shadow-md">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                className={cn(
                  "transition-all duration-300 rounded-full h-1.5",
                  isActive
                    ? "w-7 bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] shadow-sm shadow-orange-500"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom Thumbnail Quick Strip (Clean Light Platinum Theme - ZERO BLACK) */}
      <div className="hidden md:grid grid-cols-6 border-t border-slate-200 bg-slate-50/90">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={cn(
                "p-2.5 text-left transition-all border-r last:border-r-0 border-slate-200 flex flex-col justify-between relative",
                isActive
                  ? "bg-white border-t-2 border-t-[#FF6B00] shadow-sm"
                  : "hover:bg-white/60 opacity-80 hover:opacity-100"
              )}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                <span className={cn(isActive ? "text-[#FF6B00] font-bold" : "")}>
                  0{idx + 1}
                </span>
                <span className="truncate max-w-[80px]">{slide.tonnage}</span>
              </div>
              <p className={cn(
                "text-xs font-heading font-bold truncate leading-snug",
                isActive ? "text-slate-900" : "text-slate-600"
              )}>
                {slide.project.split("//")[0]}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
