import React from "react";
import Link from "next/link";
import { ArrowRight, Boxes, Layers, FileSpreadsheet, Network, Cuboid, Compass, Warehouse } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ElementType> = {
  Boxes,
  Layers,
  FileSpreadsheet,
  Network,
  Cuboid,
  Compass,
  Warehouse,
};

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  theme?: "light" | "dark";
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const IconComponent = ICONS[service.icon] || Boxes;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF6B00] hover:shadow-xl hover:shadow-orange-500/10 focus:outline-none overflow-hidden",
        className
      )}
    >
      {/* Top technical accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Top Header: Number + Technical Icon */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-bold text-[#FF6B00] tracking-wider bg-[#FFF4ED] px-2.5 py-1 rounded-md border border-[#FED7AA]">
            {service.number}
          </span>
          <div className="w-11 h-11 rounded-lg bg-[#FFF4ED] border border-[#FED7AA] flex items-center justify-center text-[#FF6B00] group-hover:bg-gradient-to-r group-hover:from-[#FF6B00] group-hover:to-[#EA580C] group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="w-5 h-5 stroke-[2]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2.5 group-hover:text-[#FF6B00] transition-colors line-clamp-1 font-outfit">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Explore Service Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF6B00] group-hover:text-[#EA580C]">
        <span>Explore Service</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </Link>
  );
}
