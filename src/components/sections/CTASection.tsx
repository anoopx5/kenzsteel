import React from "react";
import { ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/ui/Button";

export interface CTASectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function CTASection({
  title = "Have a Steel Detailing Project?",
  subtitle = "Share your drawings and project requirements with Kenz Engineering.",
  className,
}: CTASectionProps) {
  return (
    <section className={`relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-20 lg:py-28 overflow-hidden border-t border-slate-800 ${className || ""}`}>
      {/* Warm glow circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF6B00]/20 via-[#F59E0B]/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Technical 3D steel outline */}
      <svg
        className="absolute -right-16 -bottom-16 w-[480px] h-[340px] opacity-10 pointer-events-none text-[#FF6B00]"
        viewBox="0 0 400 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <line x1="40" y1="260" x2="360" y2="260" />
        <line x1="80" y1="260" x2="80" y2="40" />
        <line x1="200" y1="260" x2="200" y2="40" />
        <line x1="320" y1="260" x2="320" y2="40" />
        <line x1="40" y1="40" x2="360" y2="40" />
        <line x1="80" y1="40" x2="200" y2="150" strokeDasharray="4 4" />
        <line x1="200" y1="40" x2="80" y2="150" strokeDasharray="4 4" />
        <line x1="200" y1="150" x2="320" y2="40" strokeDasharray="4 4" />
        <line x1="320" y1="150" x2="200" y2="40" strokeDasharray="4 4" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#FF8A3D] mb-3 bg-white/10 px-3.5 py-1.5 rounded-md border border-white/15 backdrop-blur-xs">
          PROJECT ESTIMATION // SCOPE REVIEW
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4 font-outfit">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            href="/request-a-quote"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-bold rounded-xl shadow-lg shadow-orange-500/25 btn-shine px-8 py-4"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Request a Quote
          </Button>

          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto font-bold rounded-xl bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white px-8 py-4"
            iconLeft={<MessageSquare className="w-4 h-4 text-[#FF8A3D]" />}
          >
            Talk to Our Team
          </Button>
        </div>

        {/* Technical Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800 max-w-2xl mx-auto text-xs font-mono text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A3D] shrink-0" />
            <span>Fast RFQ Turnaround</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A3D] shrink-0" />
            <span>Fabrication-Ready Models</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF8A3D] shrink-0" />
            <span>Strict Client Confidentiality</span>
          </div>
        </div>
      </div>
    </section>
  );
}
