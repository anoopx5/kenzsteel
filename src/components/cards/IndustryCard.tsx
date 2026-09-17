import React from "react";
import Link from "next/link";
import { ArrowRight, Factory, Building2, Warehouse, TrainFront, Landmark, Boxes } from "lucide-react";
import { IndustryItem } from "@/data/industries";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ElementType> = {
  Factory,
  Building2,
  Warehouse,
  TrainFront,
  Landmark,
  Boxes,
};

export interface IndustryCardProps {
  industry: IndustryItem;
  className?: string;
}

export function IndustryCard({ industry, className }: IndustryCardProps) {
  const IconComponent = ICONS[industry.icon] || Factory;

  return (
    <Link
      href={`/industries#${industry.id}`}
      className={cn(
        "group relative flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:border-[#FF6B00] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10 overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-lg bg-[#FFF4ED] border border-[#FED7AA] flex items-center justify-center text-[#FF6B00] group-hover:bg-gradient-to-r group-hover:from-[#FF6B00] group-hover:to-[#EA580C] group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="w-5 h-5 stroke-[2]" />
          </div>
          <span className="font-mono text-[10px] text-[#FF6B00] font-bold uppercase tracking-wider bg-[#FFF4ED] px-2.5 py-1 rounded-md border border-[#FED7AA]">
            SECTOR
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#FF6B00] transition-colors mb-1.5 font-outfit">
          {industry.name}
        </h3>

        <p className="text-xs font-mono text-[#EA580C] mb-3 leading-relaxed font-semibold">
          {industry.tagline}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5">
          {industry.description}
        </p>

        {/* Typical structures tags */}
        <div className="pt-3.5 border-t border-slate-100 space-y-2 mb-4">
          <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 font-bold">
            Typical Framing Scope
          </span>
          {industry.keyStructures.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF6B00] group-hover:text-[#EA580C]">
        <span>Explore Sector</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </Link>
  );
}
