import React from "react";
import { cn } from "@/lib/utils";

export interface DimensionLineProps {
  label?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "dark" | "light";
}

export function DimensionLine({
  label,
  className,
  orientation = "horizontal",
  variant = "dark",
}: DimensionLineProps) {
  const isDark = variant === "dark";
  const lineColor = isDark ? "bg-[#2F5D7C]/30" : "bg-gray-300";
  const textColor = isDark ? "text-[#89A8BF]" : "text-gray-500";
  const tickColor = isDark ? "border-[#2F5D7C]/60" : "border-gray-400";

  if (orientation === "vertical") {
    return (
      <div className={cn("relative flex flex-col items-center h-full", className)}>
        <div className={cn("w-2 border-t", tickColor)} />
        <div className={cn("w-[1px] flex-1", lineColor)} />
        {label && (
          <span
            className={cn(
              "font-mono text-[9px] tracking-widest uppercase my-1 rotate-90 whitespace-nowrap",
              textColor
            )}
          >
            {label}
          </span>
        )}
        <div className={cn("w-[1px] flex-1", lineColor)} />
        <div className={cn("w-2 border-b", tickColor)} />
      </div>
    );
  }

  return (
    <div className={cn("relative flex items-center w-full my-2", className)}>
      <div className={cn("h-2 border-l", tickColor)} />
      <div className={cn("h-[1px] flex-1", lineColor)} />
      {label && (
        <span
          className={cn(
            "font-mono text-[9px] tracking-wider uppercase px-2 shrink-0 select-none",
            textColor
          )}
        >
          {label}
        </span>
      )}
      <div className={cn("h-[1px] flex-1", lineColor)} />
      <div className={cn("h-2 border-r", tickColor)} />
    </div>
  );
}
