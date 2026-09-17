import React from "react";
import Image from "next/image";
import { Layers, CheckCircle2, ArrowUpRight } from "lucide-react";

export function HeroImageBanner() {
  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-[#DCE6F0] shadow-sm bg-white mt-10 group">
      {/* High-Resolution Hero Construction Photo */}
      <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[440px] overflow-hidden">
        <Image
          src="/images/hero-construction.jpg"
          alt="Structural Steel Framing & Construction Erection Site"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
        />

        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10233F]/80 via-[#10233F]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10233F]/60 via-transparent to-transparent" />

        {/* CAD Dimension & Crosshair HUD */}
        <div className="absolute top-4 left-4 font-mono text-[10px] text-white/90 bg-[#10233F]/70 backdrop-blur-xs px-3 py-1 rounded border border-white/20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
          <span>LIVE SITE // ERECTION PHASE LOD 400</span>
        </div>

        <div className="absolute top-4 right-4 hidden sm:flex font-mono text-[10px] text-white/90 bg-[#10233F]/70 backdrop-blur-xs px-3 py-1 rounded border border-white/20 items-center gap-1.5">
          <Layers className="w-3 h-3 text-[#FF6B00]" />
          <span>AISC 360-16 VERIFIED</span>
        </div>

        {/* Bottom Banner Info Strip */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold mb-1">
              <span>Primary Steel Detailing Scope</span>
              <span>&bull;</span>
              <span>Grid A-1 through J-12</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading leading-tight drop-shadow-xs">
              Commercial Tower &amp; Heavy Crane Infrastructure
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 font-mono text-xs font-bold border border-white/40 shadow-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Zero-Clash Tolerance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
