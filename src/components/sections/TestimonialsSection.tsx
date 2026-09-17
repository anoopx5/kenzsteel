import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/ui/SectionHeading";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Kenz Engineering delivered our heavy industrial fabrication drawings ahead of schedule and with zero field rework. Their Tekla connection models eliminated shop-floor ambiguities entirely.",
      author: "David Thompson",
      role: "CEO & Managing Director",
      company: "Thompson Steel Fabricators",
      image: "/images/avatar-1.jpg",
    },
    {
      quote:
        "Their attention to detail, AISC standard compliance, and rapid turnaround on complex RFI revisions saved our project team weeks on site. Outstanding structural engineering partner.",
      author: "Sarah Mitchell",
      role: "Chief Project Engineer",
      company: "Apex Commercial Contractors",
      image: "/images/avatar-2.jpg",
    },
    {
      quote:
        "Kenz is our go-to detailing team for all large-span PEB and multi-tier logistics projects. Automated NC/DSTV data imports directly into our CNC beam lines without a hitch.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "Horizon Steel Works",
      image: "/images/avatar-3.jpg",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] block mb-2">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-4">
            Trusted by Fabricators. Proven by Results.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Hear directly from steel fabricators, general contractors, and structural engineers who rely on Kenz Engineering for shop drawings and BIM coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-7 sm:p-8 rounded-2xl shadow-xs hover:shadow-xl hover:shadow-orange-500/5 hover:border-[#FF6B00]/40 transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-[#FF6B00]/20 mb-4 group-hover:text-[#FF6B00]/40 transition-colors" />

              <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#FF6B00]/30 shrink-0">
                  <Image
                    src={t.image}
                    alt={t.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading leading-snug">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-[#FF6B00] font-mono font-medium">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
