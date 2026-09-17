import React from "react";
import { Cpu, CheckCircle2 } from "lucide-react";
import { SoftwareTool } from "@/data/software";
import { cn } from "@/lib/utils";

export interface SoftwareCardProps {
  tool: SoftwareTool;
  className?: string;
}

export function SoftwareCard({ tool, className }: SoftwareCardProps) {
  if (!tool.enabled) return null;

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-200 hover:border-[#FF6B00]/60 hover:shadow-lg hover:shadow-orange-500/5 group",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform">
            <Cpu className="w-5 h-5 stroke-[1.75]" />
          </div>
          <span className="font-mono text-[10px] text-[#FF6B00] font-bold uppercase tracking-wider bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/60">
            SOFTWARE
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">{tool.name}</h3>
        <p className="text-xs text-amber-600 mb-3 font-semibold font-mono">{tool.category}</p>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {tool.description}
        </p>

        <div className="pt-3 border-t border-slate-100 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
            Technical Capabilities
          </span>
          {tool.capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] text-slate-500">
        <span>ENGINEERING STANDARD</span>
        <span className="text-[#FF6B00] font-bold">PRODUCTION READY</span>
      </div>
    </div>
  );
}
