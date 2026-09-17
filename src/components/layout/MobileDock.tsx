"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Phone, FileText, X } from "lucide-react";
import { COMPANY } from "@/data/company";

export function MobileDock() {
  const [showDesktopTooltip, setShowDesktopTooltip] = useState(false);

  return (
    <>
      {/* Desktop Floating Action Widget (Bottom-Right) */}
      <aside aria-label="Quick contact actions" className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        {showDesktopTooltip && (
          <div className="bg-white border border-slate-200 text-slate-800 p-3 rounded-lg shadow-xl max-w-xs font-mono text-xs relative animate-in fade-in slide-in-from-bottom-2">
            <button
              onClick={() => setShowDesktopTooltip(false)}
              className="absolute top-1 right-1 text-slate-400 hover:text-slate-700 p-1"
              aria-label="Close"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="font-semibold text-[#FF6B00] mb-1">Direct Engineering Desk</p>
            <p className="text-slate-600 text-[11px] mb-2">
              Have a detailing requirement or model review?
            </p>
            <div className="flex flex-col gap-1 text-[11px]">
              <span className="text-slate-500">Tel: {COMPANY.phoneDisplay}</span>
              <span className="text-slate-500">WhatsApp: {COMPANY.whatsappDisplay}</span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200 p-1.5 rounded-full shadow-lg">
          <a
            href={`https://wa.me/?text=Hello%20Kenz%20Engineering,%20I%20have%20a%20structural%20steel%20detailing%20inquiry`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white hover:bg-emerald-50 text-emerald-600 flex items-center justify-center transition-all duration-200 hover:scale-105 border border-slate-200"
            title={`WhatsApp: ${COMPANY.whatsappDisplay}`}
            aria-label="WhatsApp Contact"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <a
            href={`tel:${COMPANY.phone}`}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#FFF4ED] text-[#FF6B00] flex items-center justify-center transition-all duration-200 hover:scale-105 border border-slate-200"
            title={`Call: ${COMPANY.phoneDisplay}`}
            aria-label="Telephone Contact"
          >
            <Phone className="w-4 h-4" />
          </a>

          <Link
            href="/request-a-quote"
            className="h-9 px-4 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] text-white font-bold text-xs flex items-center gap-1.5 transition-all duration-200 hover:scale-105 shadow-md shadow-orange-500/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Quote</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Fixed Bottom Action Dock */}
      <nav aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 shadow-lg">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          <a
            href={`https://wa.me/?text=Hello%20Kenz%20Engineering`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-slate-50 border border-slate-200 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span className="text-[10px] font-mono font-medium tracking-wide">WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY.phone}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 hover:bg-[#FFF4ED] hover:text-[#FF6B00] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FF6B00] mb-0.5" />
            <span className="text-[10px] font-mono font-medium tracking-wide">Call</span>
          </a>

          <Link
            href="/request-a-quote"
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] text-white rounded-lg font-bold shadow-md shadow-orange-500/20 transition-transform active:scale-95"
          >
            <FileText className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-mono tracking-wide">Quote</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
