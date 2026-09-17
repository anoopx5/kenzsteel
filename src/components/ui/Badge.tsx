import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "cyan" | "steel" | "dark" | "outline" | "orange";
  className?: string;
}

export function Badge({
  children,
  variant = "blue",
  className,
}: BadgeProps) {
  const variantStyles = {
    blue: "bg-[#FFF4ED] text-[#EA580C] border-[#FED7AA] font-bold",
    cyan: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A] font-bold",
    orange: "bg-[#FFF4ED] text-[#FF6B00] border-[#FED7AA] font-bold",
    steel: "bg-[#F8FAFC] text-[#1E293B] border-[#E2E8F0] font-semibold",
    dark: "bg-[#0F172A] text-white border-[#0F172A]",
    outline: "bg-transparent text-slate-700 border-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono tracking-wider uppercase border rounded-xs",
        variantStyles[variant],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
}
