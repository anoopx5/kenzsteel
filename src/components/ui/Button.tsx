import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "outline-blue" | "outline-light" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      iconLeft,
      iconRight,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px]";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] text-white hover:opacity-95 hover:-translate-y-[2px] shadow-md hover:shadow-lg hover:shadow-orange-500/25 border-0 font-bold",
      secondary:
        "bg-white text-[#FF6B00] border border-[#FF6B00]/40 hover:bg-[#FFF8F2] hover:border-[#FF6B00] hover:-translate-y-[2px] shadow-xs",
      accent:
        "bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white hover:opacity-95 hover:-translate-y-[2px] shadow-md hover:shadow-lg hover:shadow-orange-600/25",
      outline:
        "border border-slate-200 text-slate-800 bg-white hover:bg-[#FFF8F2] hover:border-[#FF6B00] hover:text-[#FF6B00] hover:-translate-y-[2px] shadow-xs",
      "outline-blue":
        "border border-[#FF6B00] text-[#FF6B00] bg-white hover:bg-[#FFF8F2] hover:-translate-y-[2px] shadow-xs",
      "outline-light":
        "border border-slate-200 text-slate-700 bg-white hover:bg-[#FFF8F2] hover:border-[#FF6B00] hover:text-[#FF6B00] hover:-translate-y-[2px]",
      ghost:
        "text-[#FF6B00] hover:bg-[#FFF8F2] hover:text-[#EA580C]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5 font-medium tracking-wide",
      md: "text-sm px-5 py-2.5 rounded-lg gap-2 font-medium",
      lg: "text-base px-6 py-3.5 rounded-lg gap-2.5 font-semibold",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {iconLeft && <span className="shrink-0">{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">{iconRight}</span>}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
