"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Process", href: "/#process" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b",
        isScrolled
          ? "border-slate-200/90 py-1.5 shadow-sm shadow-slate-200/50"
          : "border-slate-200/60 py-2 sm:py-2.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo container */}
          <Link href="/" className="flex items-center group py-0.5">
            <Image
              src="/images/kenz-logo-transparent.png"
              alt="KENZ ENGINEERING - Building a Stronger Tomorrow"
              width={1024}
              height={370}
              className={cn(
                "w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]",
                isScrolled
                  ? "h-13 sm:h-15 lg:h-[68px]"
                  : "h-15 sm:h-18 lg:h-[82px]"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation Links with Animated Gradient Underline */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "nav-link-underline text-xs xl:text-sm font-heading font-bold uppercase tracking-wider transition-colors py-1",
                    isActive
                      ? "active text-[#EA580C]"
                      : "text-[#1E293B] hover:text-[#EA580C]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button (Orange Amber Gradient) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/request-a-quote"
              className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] hover:from-[#EA580C] hover:to-[#D97706] text-white text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/request-a-quote"
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] text-white text-xs font-heading font-bold uppercase tracking-wider"
            >
              Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E293B] hover:text-[#FF6B00] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          <div className="pb-3 border-b border-slate-100 flex items-center justify-start">
            <Image
              src="/images/kenz-logo-transparent.png"
              alt="KENZ ENGINEERING"
              width={1024}
              height={370}
              className="h-12 w-auto object-contain"
            />
          </div>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-heading font-bold uppercase tracking-wider text-[#1E293B] hover:text-[#FF6B00] px-3 py-2 rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-200">
            <Link
              href="/request-a-quote"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] text-white text-xs font-heading font-bold uppercase tracking-wider text-center shadow-md shadow-orange-500/25"
            >
              <span>REQUEST A PROJECT QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
