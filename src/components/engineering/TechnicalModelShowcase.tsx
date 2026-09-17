"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Layers, Eye, Maximize2, Compass, CheckCircle2 } from "lucide-react";

export function TechnicalModelShowcase() {
  const [activeLayer, setActiveLayer] = useState<"all" | "primary" | "secondary" | "connections">("all");

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] border-y border-slate-200 relative overflow-hidden">
      {/* CAD Grid Backdrop */}
      <div className="absolute inset-0 bg-warm-grid opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] bg-[#FFF4ED] px-3.5 py-1.5 rounded-md border border-[#FED7AA] inline-block mb-3">
            INTERACTIVE STRUCTURAL MODEL // LOD 400
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4 font-outfit">
            See the Structure Before It Reaches the Workshop
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our intelligent 3D structural models integrate member sizing, practical connection geometry, bolt tightening clearances, and fabrication data into a single verified digital asset.
          </p>
        </div>

        {/* Model Showcase Interactive Container */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="font-bold text-[#0F172A]">MODEL ID: KZ-STR-400</span>
              <span className="text-slate-200">|</span>
              <span className="text-slate-500">SCALE: 1:1 TRUE GEOMETRY</span>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 font-mono text-xs">
              {(
                [
                  { id: "all", label: "Full Assembly" },
                  { id: "primary", label: "Columns & Girders" },
                  { id: "secondary", label: "Infill Beams" },
                  { id: "connections", label: "Connection Nodes" },
                ] as const
              ).map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`px-3.5 py-1.5 rounded-lg transition-all text-xs font-semibold ${
                    activeLayer === layer.id
                      ? "bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white shadow-md shadow-orange-500/20"
                      : "bg-slate-50 text-slate-600 border border-slate-200 hover:text-[#0F172A] hover:bg-slate-100"
                  }`}
                >
                  {layer.label}
                </button>
              ))}
            </div>
          </div>

          {/* Large Structural 3D Model Stage */}
          <div className="relative w-full h-[360px] sm:h-[460px] bg-[#FFFDF9] border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center">
            {/* Coordinate Grid Floor */}
            <div className="absolute inset-0 bg-warm-grid opacity-60" />

            {/* Floating Technical Labels */}
            <div className="absolute top-6 left-6 z-20 font-mono text-xs">
              <div className="bg-white/95 border border-[#FF6B00] px-3 py-1.5 rounded-lg shadow-sm text-[#FF6B00] font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                <span>GRID: B-4 // LEVEL: +24&apos;-0&quot;</span>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 z-20 font-mono text-xs">
              <div className="bg-white/95 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm text-slate-700 font-semibold">
                ASSEMBLY: 2B-108 // W24x68
              </div>
            </div>

            <div className="absolute top-6 right-6 z-20 font-mono text-xs">
              <div className="bg-[#0F172A] text-white px-3 py-1.5 rounded-lg shadow-sm font-bold flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>NORTH: 0.00&deg; // ELEV: 18.400M</span>
              </div>
            </div>

            {/* Central 3D Steel Structure SVG with Detailed Nodes */}
            <svg viewBox="0 0 700 420" className="w-full h-full max-h-[420px] select-none" fill="none">
              {/* Construction Datum Lines */}
              <g stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4">
                <line x1="100" y1="360" x2="600" y2="360" />
                <line x1="160" y1="380" x2="540" y2="380" />
                <line x1="100" y1="360" x2="160" y2="380" />
                <line x1="350" y1="360" x2="350" y2="380" />
                <line x1="600" y1="360" x2="540" y2="380" />
              </g>

              {/* COLUMNS (Layer: all or primary) */}
              {(activeLayer === "all" || activeLayer === "primary") && (
                <g>
                  {/* Left Column W14x90 */}
                  <path d="M 160 380 L 160 90 L 178 98 L 178 388 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                  <path d="M 178 98 L 190 92 L 190 382 L 178 388 Z" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
                  <polygon points="146,386 196,380 206,390 156,396" fill="#F59E0B" fillOpacity="0.3" stroke="#EA580C" strokeWidth="1.5" />

                  {/* Center Column W14x120 */}
                  <path d="M 350 380 L 350 90 L 368 98 L 368 388 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                  <path d="M 368 98 L 380 92 L 380 382 L 368 388 Z" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
                  <polygon points="336,386 386,380 396,390 346,396" fill="#F59E0B" fillOpacity="0.3" stroke="#EA580C" strokeWidth="1.5" />

                  {/* Right Column W14x90 */}
                  <path d="M 540 380 L 540 90 L 558 98 L 558 388 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                  <polygon points="526,386 576,380 586,390 536,396" fill="#F59E0B" fillOpacity="0.3" stroke="#EA580C" strokeWidth="1.5" />
                </g>
              )}

              {/* PRIMARY GIRDERS & BEAMS (Layer: all or primary) */}
              {(activeLayer === "all" || activeLayer === "primary") && (
                <g>
                  {/* Left Main Transfer Girder */}
                  <path d="M 178 120 L 350 120 L 350 155 L 178 155 Z" fill="#FF6B00" stroke="#EA580C" strokeWidth="1.5" />
                  <polygon points="178,120 350,120 365,110 193,110" fill="#F59E0B" stroke="#EA580C" strokeWidth="1" />

                  {/* Right Main Transfer Girder */}
                  <path d="M 368 120 L 540 120 L 540 155 L 368 155 Z" fill="#FF6B00" stroke="#EA580C" strokeWidth="1.5" />
                  <polygon points="368,120 540,120 555,110 383,110" fill="#F59E0B" stroke="#EA580C" strokeWidth="1" />

                  {/* Roof Top Chord Beams */}
                  <line x1="160" y1="90" x2="350" y2="90" stroke="#EA580C" strokeWidth="2.5" />
                  <line x1="350" y1="90" x2="540" y2="90" stroke="#EA580C" strokeWidth="2.5" />
                </g>
              )}

              {/* SECONDARY INFILL BEAMS (Layer: all or secondary) */}
              {(activeLayer === "all" || activeLayer === "secondary") && (
                <g stroke="#F59E0B" strokeWidth="1.5">
                  <line x1="235" y1="120" x2="275" y2="88" />
                  <line x1="295" y1="120" x2="335" y2="88" />
                  <line x1="425" y1="120" x2="465" y2="88" />
                  <line x1="485" y1="120" x2="525" y2="88" />
                  {/* Cross Bracing */}
                  <line x1="178" y1="360" x2="264" y2="240" stroke="#FF6B00" strokeWidth="2" strokeDasharray="5 3" />
                  <line x1="350" y1="360" x2="264" y2="240" stroke="#FF6B00" strokeWidth="2" strokeDasharray="5 3" />
                  <circle cx="264" cy="240" r="5" fill="#EA580C" />
                </g>
              )}

              {/* CONNECTION CALLOUT NODES */}
              {(activeLayer === "all" || activeLayer === "connections") && (
                <g>
                  {/* Connection Tag 1: COLUMN */}
                  <circle cx="160" cy="200" r="8" stroke="#FF6B00" strokeWidth="2" fill="#FFFFFF" />
                  <circle cx="160" cy="200" r="3" fill="#FF6B00" />
                  <line x1="160" y1="200" x2="105" y2="180" stroke="#FF6B00" strokeWidth="1" />
                  <rect x="25" y="165" width="80" height="24" rx="4" fill="#FFFFFF" stroke="#FF6B00" strokeWidth="1.2" />
                  <text x="65" y="181" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    COLUMN
                  </text>

                  {/* Connection Tag 2: MOMENT CONNECTION */}
                  <circle cx="350" cy="120" r="8" stroke="#F59E0B" strokeWidth="2" fill="#FFFFFF" />
                  <circle cx="350" cy="120" r="3" fill="#F59E0B" />
                  <line x1="350" y1="120" x2="350" y2="55" stroke="#F59E0B" strokeWidth="1" />
                  <rect x="295" y="35" width="110" height="24" rx="4" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.2" />
                  <text x="350" y="51" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    CONNECTION
                  </text>

                  {/* Connection Tag 3: BEAM */}
                  <circle cx="450" cy="120" r="8" stroke="#FF6B00" strokeWidth="2" fill="#FFFFFF" />
                  <circle cx="450" cy="120" r="3" fill="#FF6B00" />
                  <line x1="450" y1="120" x2="495" y2="70" stroke="#FF6B00" strokeWidth="1" />
                  <rect x="495" y="58" width="70" height="24" rx="4" fill="#FFFFFF" stroke="#FF6B00" strokeWidth="1.2" />
                  <text x="530" y="74" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    BEAM
                  </text>

                  {/* Connection Tag 4: BASE ASSEMBLY */}
                  <circle cx="540" cy="380" r="8" stroke="#EA580C" strokeWidth="2" fill="#FFFFFF" />
                  <circle cx="540" cy="380" r="3" fill="#EA580C" />
                  <line x1="540" y1="380" x2="590" y2="350" stroke="#EA580C" strokeWidth="1" />
                  <rect x="590" y="338" width="90" height="24" rx="4" fill="#FFFFFF" stroke="#EA580C" strokeWidth="1.2" />
                  <text x="635" y="354" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    ASSEMBLY
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Bottom Indicators */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#1E293B] rounded-xs" />
                <span>Heavy Columns</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#FF6B00] rounded-xs" />
                <span>Transfer Girders</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#F59E0B] rounded-xs" />
                <span>Connections &amp; Bracing</span>
              </span>
            </div>

            <div className="text-[#FF6B00] font-bold">
              TEKLA LOD 400 &bull; INTERACTIVE CLASH RESOLUTION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
