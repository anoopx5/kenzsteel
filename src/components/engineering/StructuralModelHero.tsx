"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, FileSpreadsheet, Network, Crosshair, CheckCircle2 } from "lucide-react";

type VisualMode = "model" | "drawing" | "connection" | "coordination";

export function StructuralModelHero() {
  const [activeMode, setActiveMode] = useState<VisualMode>("model");

  const modes = [
    { id: "model", label: "3D Steel Frame", icon: Layers, ref: "LOD 400" },
    { id: "drawing", label: "Shop Drawing", icon: FileSpreadsheet, ref: "DWG-1B24" },
    { id: "connection", label: "Moment Joint", icon: Network, ref: "JNT-M24" },
    { id: "coordination", label: "BIM Audit", icon: Crosshair, ref: "CLASH-0" },
  ] as const;

  return (
    <div className="relative w-full rounded-lg border border-[#DCE6F0] bg-white p-4 sm:p-5 shadow-sm overflow-hidden cad-corner-marks">
      {/* Background CAD grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-60 pointer-events-none" />

      {/* Top Header metadata strip */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-[#DCE6F0] pb-3 mb-3">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#52657A]">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
          <span className="text-[#102B46] font-bold uppercase tracking-wider">
            KENZ CAD // 3D VIEWER
          </span>
          <span className="hidden sm:inline text-[#DCE6F0]">|</span>
          <span className="hidden sm:inline text-[#52657A]">TOLERANCE: &plusmn;0.5mm</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[10px]">
          <span className="px-2 py-0.5 bg-[#F1F7FC] border border-[#DCE6F0] rounded text-[#0757B8] font-semibold">
            TEKLA / REVIT
          </span>
          <span className="px-2 py-0.5 bg-[#F1F7FC] border border-[#FF6B00]/30 rounded text-[#FF6B00] font-bold">
            LOD 400
          </span>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-3">
        {modes.map((m) => {
          const Icon = m.icon;
          const isActive = activeMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setActiveMode(m.id)}
              className={`flex items-center gap-2 px-2.5 py-2 rounded text-xs font-mono transition-all text-left border ${
                isActive
                  ? "bg-white border-[#FF6B00] text-[#102B46] shadow-xs ring-1 ring-[#FF6B00]/20"
                  : "bg-[#F7FAFD] border-[#DCE6F0] text-[#52657A] hover:text-[#102B46] hover:bg-white"
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 shrink-0 ${
                  isActive ? "text-[#FF6B00]" : "text-[#64748B]"
                }`}
              />
              <div className="truncate">
                <span className="block text-[11px] font-bold tracking-tight truncate">
                  {m.label}
                </span>
                <span className="block text-[9px] text-[#64748B] truncate">
                  {m.ref}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main CAD Visual Canvas (Light Mode) */}
      <div className="relative z-10 w-full h-[280px] sm:h-[340px] bg-[#F7FAFD] border border-[#DCE6F0] rounded flex items-center justify-center overflow-hidden p-4">
        {/* Overlay Engineering Coordinate Marks */}
        <div className="absolute top-2.5 left-3 font-mono text-[9px] text-[#64748B] select-none">
          GRID [B-4] // ELEV +18.400M
        </div>
        <div className="absolute top-2.5 right-3 font-mono text-[9px] text-[#64748B] select-none">
          N: 4892.12 | E: 1204.88
        </div>
        <div className="absolute bottom-2.5 left-3 font-mono text-[9px] text-[#64748B] select-none">
          STATUS: FABRICATION-VERIFIED
        </div>
        <div className="absolute bottom-2.5 right-3 font-mono text-[9px] text-[#0757B8] select-none flex items-center gap-1 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>ZERO CLASHES</span>
        </div>

        {/* View Content AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeMode === "model" && (
            <motion.div
              key="model"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full flex items-center justify-center relative"
            >
              {/* Isometric 3D Steel Frame SVG in KENZ Engineering Colors */}
              <svg
                viewBox="0 0 500 300"
                className="w-full h-full max-h-[300px] select-none"
                fill="none"
              >
                {/* Construction Grid Plane */}
                <g stroke="#DCE6F0" strokeWidth="1" strokeDasharray="3 3">
                  <line x1="80" y1="230" x2="380" y2="230" />
                  <line x1="120" y1="260" x2="420" y2="260" />
                  <line x1="80" y1="230" x2="120" y2="260" />
                  <line x1="230" y1="230" x2="270" y2="260" />
                  <line x1="380" y1="230" x2="420" y2="260" />
                </g>

                {/* Primary Structural Steel Columns (W-Shapes in KENZ Navy) */}
                {/* Column 1 */}
                <g>
                  <path
                    d="M 120 260 L 120 70 L 132 75 L 132 265 Z"
                    fill="#102B46"
                    stroke="#0757B8"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 132 75 L 140 71 L 140 261 L 132 265 Z"
                    fill="#1A3B5C"
                    stroke="#0757B8"
                    strokeWidth="1.5"
                  />
                  <polygon
                    points="110,265 145,260 152,267 117,272"
                    fill="#0BA9E8"
                    fillOpacity="0.25"
                    stroke="#FF6B00"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Column 2 */}
                <g>
                  <path
                    d="M 270 260 L 270 70 L 282 75 L 282 265 Z"
                    fill="#102B46"
                    stroke="#0757B8"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 282 75 L 290 71 L 290 261 L 282 265 Z"
                    fill="#1A3B5C"
                    stroke="#0757B8"
                    strokeWidth="1.5"
                  />
                  <polygon
                    points="260,265 295,260 302,267 267,272"
                    fill="#0BA9E8"
                    fillOpacity="0.25"
                    stroke="#FF6B00"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Column 3 */}
                <g>
                  <path
                    d="M 420 260 L 420 70 L 432 75 L 432 265 Z"
                    fill="#102B46"
                    stroke="#0757B8"
                    strokeWidth="1.5"
                  />
                  <polygon
                    points="410,265 445,260 452,267 417,272"
                    fill="#0BA9E8"
                    fillOpacity="0.25"
                    stroke="#FF6B00"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Heavy Main Transfer Girders */}
                <g>
                  <path
                    d="M 132 90 L 270 90 L 270 115 L 132 115 Z"
                    fill="#FF6B00"
                    stroke="#0757B8"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 282 90 L 420 90 L 420 115 L 282 115 Z"
                    fill="#FF6B00"
                    stroke="#0757B8"
                    strokeWidth="1.5"
                  />
                  <polygon
                    points="132,90 270,90 282,82 144,82"
                    fill="#0BA9E8"
                    stroke="#0757B8"
                    strokeWidth="1"
                  />
                  <polygon
                    points="282,90 420,90 432,82 294,82"
                    fill="#0BA9E8"
                    stroke="#0757B8"
                    strokeWidth="1"
                  />
                </g>

                {/* Secondary Infill Floor Beams */}
                <g stroke="#0757B8" strokeWidth="1.2">
                  <line x1="178" y1="90" x2="208" y2="68" />
                  <line x1="224" y1="90" x2="254" y2="68" />
                  <line x1="328" y1="90" x2="358" y2="68" />
                  <line x1="374" y1="90" x2="404" y2="68" />
                </g>

                {/* Vertical Chevron Bracing in KENZ Cyan & Blue */}
                <g stroke="#0BA9E8" strokeWidth="2">
                  <line x1="132" y1="240" x2="201" y2="150" />
                  <line x1="270" y1="240" x2="201" y2="150" />
                  <circle cx="201" cy="150" r="4" fill="#FF6B00" />
                  <line x1="201" y1="150" x2="201" y2="115" stroke="#FF6B00" strokeWidth="1.8" />
                </g>

                {/* Dimension Callouts */}
                <g>
                  <line x1="132" y1="50" x2="270" y2="50" stroke="#64748B" strokeWidth="1" />
                  <line x1="132" y1="46" x2="132" y2="54" stroke="#64748B" strokeWidth="1" />
                  <line x1="270" y1="46" x2="270" y2="54" stroke="#64748B" strokeWidth="1" />
                  <text
                    x="201"
                    y="44"
                    fill="#102B46"
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    SPAN: 7,500 mm
                  </text>

                  <line x1="282" y1="50" x2="420" y2="50" stroke="#64748B" strokeWidth="1" />
                  <line x1="282" y1="46" x2="282" y2="54" stroke="#64748B" strokeWidth="1" />
                  <line x1="420" y1="46" x2="420" y2="54" stroke="#64748B" strokeWidth="1" />
                  <text
                    x="351"
                    y="44"
                    fill="#102B46"
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    SPAN: 7,500 mm
                  </text>

                  <circle cx="270" cy="90" r="7" stroke="#FF6B00" strokeWidth="2" fill="none" />
                  <text
                    x="285"
                    y="110"
                    fill="#FF6B00"
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    NODE #C2-01 // W24x68
                  </text>
                </g>
              </svg>
            </motion.div>
          )}

          {activeMode === "drawing" && (
            <motion.div
              key="drawing"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full flex flex-col items-center justify-center p-2"
            >
              {/* CAD 2D Shop Sheet Graphic in Light Theme */}
              <div className="w-full h-full bg-white border border-[#DCE6F0] p-3 rounded flex flex-col justify-between font-mono text-[10px] shadow-xs">
                <div className="flex items-center justify-between border-b border-[#DCE6F0] pb-2 text-[#52657A]">
                  <span className="text-[#FF6B00] font-bold">DRAWING: AS-104 [REV 02]</span>
                  <span className="font-semibold text-[#102B46]">ASSEMBLY: 1B-24</span>
                  <span>ASTM A992 / Gr.50</span>
                </div>

                <div className="my-auto w-full py-4 flex flex-col items-center justify-center relative">
                  <div className="w-[80%] flex items-center justify-between text-[#64748B] text-[9px] mb-1">
                    <span className="border-l border-[#64748B] h-2" />
                    <span className="h-[1px] flex-1 bg-[#DCE6F0] mx-1 relative text-center">
                      <span className="bg-white px-2 -top-2 relative font-bold text-[#102B46]">
                        6,400 mm O/A LENGTH
                      </span>
                    </span>
                    <span className="border-r border-[#64748B] h-2" />
                  </div>

                  <div className="w-[80%] h-12 border-2 border-[#102B46] bg-[#F1F7FC] relative flex items-center justify-between px-4">
                    <div className="w-3.5 h-16 bg-[#0757B8] border border-[#102B46] -ml-4 flex flex-col justify-around py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto" />
                    </div>

                    <div className="w-1 h-full bg-[#DCE6F0]" />
                    <div className="w-1 h-full bg-[#DCE6F0]" />

                    <div className="w-3.5 h-16 bg-[#0757B8] border border-[#102B46] -mr-4 flex flex-col justify-around py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto" />
                    </div>

                    <span className="text-[#102B46] font-bold tracking-widest text-xs">
                      W24x68 x 6400 mm
                    </span>
                  </div>

                  <div className="mt-2.5 text-[#52657A] text-[9px] flex items-center gap-2">
                    <span className="text-[#FF6B00] font-bold">WELD: 8mm FILLET BOTH SIDES</span>
                    <span>•</span>
                    <span>HOLES: 22mm &empty; FOR M20 A325</span>
                  </div>
                </div>

                <div className="border-t border-[#DCE6F0] pt-2 flex items-center justify-between text-[#64748B] text-[9px]">
                  <span>DRAWN: KENZ ENG</span>
                  <span>CHECKED: SR. CHECKER</span>
                  <span className="text-[#0757B8] font-bold">APPROVED FOR FABRICATION</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeMode === "connection" && (
            <motion.div
              key="connection"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full flex items-center justify-center p-2"
            >
              <svg viewBox="0 0 400 240" className="w-full h-full max-h-[240px]" fill="none">
                <rect x="60" y="20" width="28" height="200" fill="#102B46" stroke="#0757B8" strokeWidth="2" />
                <line x1="88" y1="120" x2="340" y2="120" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />

                <rect x="110" y="60" width="230" height="120" fill="#F1F7FC" stroke="#0757B8" strokeWidth="2" />
                <rect x="110" y="55" width="230" height="10" fill="#102B46" stroke="#0757B8" strokeWidth="1.5" />
                <rect x="110" y="175" width="230" height="10" fill="#102B46" stroke="#0757B8" strokeWidth="1.5" />

                <rect x="88" y="70" width="40" height="100" fill="#0BA9E8" fillOpacity="0.2" stroke="#FF6B00" strokeWidth="2" />

                {[85, 110, 135, 155].map((y, i) => (
                  <g key={i}>
                    <circle cx="115" cy={y} r="5" fill="#FF6B00" stroke="#FFFFFF" strokeWidth="1.5" />
                    <line x1="110" y1={y} x2="120" y2={y} stroke="#102B46" strokeWidth="1.5" />
                  </g>
                ))}

                <g fontFamily="monospace" fontSize="8" fill="#52657A">
                  <path d="M 125 85 L 180 40 L 220 40" stroke="#FF6B00" strokeWidth="1" fill="none" />
                  <text x="225" y="42" fill="#FF6B00" fontWeight="bold">
                    4x M24 A490 BOLTS (75mm PITCH)
                  </text>

                  <path d="M 88 160 L 50 180 L 10 180" stroke="#64748B" strokeWidth="1" fill="none" />
                  <text x="10" y="175" fill="#102B46" fontWeight="bold">
                    12mm SHEAR TAB
                  </text>
                  <text x="10" y="190" fill="#64748B">
                    SHOP WELDED TO FLANGE
                  </text>

                  <path d="M 240 60 L 270 30 L 320 30" stroke="#64748B" strokeWidth="1" fill="none" />
                  <text x="325" y="32" fill="#102B46" fontWeight="bold">
                    W21x50 TOP FLANGE
                  </text>
                </g>
              </svg>
            </motion.div>
          )}

          {activeMode === "coordination" && (
            <motion.div
              key="coordination"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full flex flex-col items-center justify-center p-2"
            >
              <div className="w-full h-full flex flex-col justify-between">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono mb-2">
                  <div className="bg-white p-2 border border-[#DCE6F0] rounded shadow-xs">
                    <span className="text-[#64748B] block text-[9px]">STRUCTURAL STEEL</span>
                    <span className="text-[#102B46] font-bold">LOD 400 SIGN-OFF</span>
                  </div>
                  <div className="bg-white p-2 border border-[#DCE6F0] rounded shadow-xs">
                    <span className="text-[#64748B] block text-[9px]">MEP SERVICES</span>
                    <span className="text-[#0757B8] font-bold">ZERO PENETRATION CLASH</span>
                  </div>
                  <div className="bg-white p-2 border border-[#DCE6F0] rounded shadow-xs">
                    <span className="text-[#64748B] block text-[9px]">TOOL ACCESS</span>
                    <span className="text-[#FF6B00] font-bold">100% IMPACT CLEARANCE</span>
                  </div>
                </div>

                <div className="h-32 border border-[#DCE6F0] bg-white rounded relative flex items-center justify-center overflow-hidden">
                  <div className="w-[85%] h-8 bg-[#F1F7FC] border border-[#DCE6F0] flex items-center justify-center relative">
                    <span className="text-[#102B46] text-[10px] font-mono font-bold">
                      STEEL FRAMING [PRIMARY BEAM]
                    </span>

                    <div className="absolute right-24 w-12 h-6 border-2 border-dashed border-[#FF6B00] bg-white flex items-center justify-center">
                      <span className="text-[#FF6B00] text-[8px] font-mono font-bold">SLEEVE</span>
                    </div>
                  </div>

                  <div className="absolute w-4 h-24 bg-sky-500/20 border-l-2 border-r-2 border-[#0BA9E8] right-28 top-4 flex items-center justify-center">
                    <span className="rotate-90 text-[8px] font-mono text-[#0757B8] font-bold whitespace-nowrap">
                      CHILLED WATER PIPE &empty;150
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                  <span>DISCIPLINE: STRUCTURAL + MECHANICAL</span>
                  <span className="text-[#0757B8] flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    CLASH-FREE COORDINATION
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer progression indicator */}
      <div className="relative z-10 mt-3 pt-3 border-t border-[#DCE6F0] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#64748B]">
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-[#102B46] font-bold">FLOW:</span>
          <span className="text-[#52657A]">ENGINEERING DRAWINGS</span>
          <span className="text-[#FF6B00]">&rarr;</span>
          <span className="text-[#FF6B00] font-bold">KENZ 3D MODEL</span>
          <span className="text-[#FF6B00]">&rarr;</span>
          <span className="text-[#0757B8] font-semibold">COORDINATION</span>
          <span className="text-[#FF6B00]">&rarr;</span>
          <span className="text-[#102B46] font-bold">FABRICATION ISSUE</span>
        </div>
        <div className="text-[10px] text-[#64748B]">
          AISC &bull; NISD &bull; LOD 400
        </div>
      </div>
    </div>
  );
}
