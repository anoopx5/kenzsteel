import React from "react";
import { Building2, Users, HardHat, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsStrip() {
  const stats = [
    {
      icon: Building2,
      numericValue: 250,
      suffix: "+",
      decimals: 0,
      label: "Projects Completed",
      sublabel: "Structural & PEB Scopes",
    },
    {
      icon: Users,
      numericValue: 150,
      suffix: "+",
      decimals: 0,
      label: "Happy Clients",
      sublabel: "Fabricators & Contractors",
    },
    {
      icon: HardHat,
      numericValue: 25,
      suffix: "+",
      decimals: 0,
      label: "Years of Experience",
      sublabel: "Combined Engineering Expertise",
    },
    {
      icon: Award,
      numericValue: 99.8,
      suffix: "%",
      decimals: 1,
      label: "Fit-Up Accuracy",
      sublabel: "Zero-Clash Workshop Guarantee",
    },
  ];

  return (
    <section className="bg-white border-y border-[#DCE6F0] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-[#FF6B00]/40 transition-all hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF6B00] shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
                    <AnimatedCounter
                      value={stat.numericValue}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      duration={1800}
                    />
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
