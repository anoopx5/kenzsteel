import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  coordinateTag?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
  coordinateTag,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {coordinateTag && (
        <span
          className={cn(
            "block font-mono text-[10px] tracking-widest uppercase mb-1 font-semibold",
            isDark ? "text-slate-400" : "text-slate-400"
          )}
        >
          REF // {coordinateTag}
        </span>
      )}

      {tag && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-2.5 text-xs font-mono font-bold tracking-widest uppercase",
            align === "center" ? "justify-center" : "justify-start",
            isDark ? "text-[#FF8A3D]" : "text-[#EA580C]"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
          <span className="bg-gradient-to-r from-[#FF6B00] to-[#EA580C] bg-clip-text text-transparent">{tag}</span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight tracking-tight",
          isDark ? "text-white" : "text-[#0F172A]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isDark ? "text-gray-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
