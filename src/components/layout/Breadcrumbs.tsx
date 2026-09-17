import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
  className?: string;
}

export function Breadcrumbs({
  items,
  theme = "light",
  className,
}: BreadcrumbsProps) {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center text-xs font-mono uppercase tracking-wider",
        isDark ? "text-slate-400" : "text-slate-500",
        className
      )}
    >
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className={cn(
              "inline-flex items-center gap-1 transition-colors",
              isDark
                ? "hover:text-[#FF6B00]"
                : "hover:text-[#FF6B00]"
            )}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400" />
              {isLast || !item.href ? (
                <span
                  className={cn(
                    "font-bold",
                    isDark ? "text-[#F59E0B]" : "text-[#FF6B00]"
                  )}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isDark
                      ? "hover:text-white"
                      : "hover:text-[#FF6B00]"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
