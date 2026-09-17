import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#050A11] text-slate-400 border-t border-[#162335] pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 pb-8 border-b border-[#162335]">
          {/* Col 1: Logo & Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/kenz-logo-white-text.png"
                alt="KENZ ENGINEERING - Building a Stronger Tomorrow"
                width={1024}
                height={370}
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-sans pt-2">
              Kenz Engineering is a premier structural steel detailing and commercial engineering contractor delivering exceptional commercial, industrial, and infrastructure projects across the globe.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-white transition-colors">
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white mb-4">
              CAPABILITIES
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Preconstruction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Design-Build
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Program Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Projects */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white mb-4">
              PROJECTS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Office
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Mixed-Use
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  View All Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white mb-4">
              CONTACT US
            </h4>
            <div className="space-y-2.5 text-xs font-sans">
              <p className="text-slate-300">
                455 Market Street, Suite 200<br />
                San Francisco, CA 94105
              </p>
              <p className="text-slate-300">
                (415) 555-0198
              </p>
              <p className="text-[#F59E0B] hover:text-[#FF6B00] transition-colors font-medium">
                info@kenzengineering.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>&copy; 2026 Kenz Engineering. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </Link>
            <span>|</span>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
