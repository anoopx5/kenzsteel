import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Wrench,
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Building,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { PROJECTS } from "@/data/projects";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects | Kenz Engineering`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Project Hero */}
      <section className="bg-gradient-to-b from-[#FFF8F2] via-white to-white py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
            theme="light"
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <Badge variant="orange">{project.category}</Badge>
                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-600 font-semibold">
                  <MapPin className="w-4 h-4 text-[#FF6B00]" />
                  <span>{project.location}</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-outfit">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {project.shortDescription}
              </p>

              <div className="pt-2">
                <Button
                  href="/request-a-quote"
                  variant="primary"
                  size="lg"
                  className="rounded-xl shadow-lg shadow-orange-500/25 font-bold px-7 py-3.5 btn-shine"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Project
                </Button>
              </div>
            </div>

            {/* Quick Tech Spec Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-[#FFFDF9] border border-slate-200 p-7 rounded-2xl text-slate-700 font-mono text-xs space-y-4 shadow-xl">
                <span className="text-[#FF6B00] font-bold block uppercase tracking-wider border-b border-slate-100 pb-2.5">
                  PROJECT SPECIFICATIONS
                </span>
                <div>
                  <span className="text-slate-400 block text-[11px] font-semibold">PROJECT TYPE:</span>
                  <span className="text-[#0F172A] font-bold">{project.projectType}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-semibold">STRUCTURAL SYSTEM:</span>
                  <span className="text-[#FF6B00] font-semibold">{project.structuralSystem}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-semibold">SOFTWARE USED:</span>
                  <span className="text-slate-800 font-medium">{project.softwareUsed}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-semibold">TONNAGE / ENVELOPE:</span>
                  <span className="text-slate-800 font-medium">{project.tonnageOrSize}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-semibold">DETAILING SCOPE:</span>
                  <span className="text-slate-800 font-medium">{project.scope}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionHeading
              tag="PROJECT OVERVIEW"
              title="Structural Framing &amp; Engineering Scope"
              coordinateTag="SCO-01"
              className="mb-6"
            />
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Approach */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Challenges */}
            <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
              <div className="flex items-center gap-2 text-red-600 font-mono text-xs uppercase font-bold mb-3">
                <AlertCircle className="w-4 h-4" />
                <span>TECHNICAL CHALLENGES</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1B3D] mb-6">Key Engineering Complexities</h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 text-[#FF6B00] font-mono text-xs uppercase font-bold mb-3">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                <span>ENGINEERING RESOLUTION</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6 font-outfit">Our Detailing Approach</h3>
              <ul className="space-y-4">
                {project.approach.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Results */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="PROJECT OUTPUTS"
            title="Deliverables &amp; Shop Documentation Released"
            subtitle="Complete drawing packages generated and verified to ensure seamless workshop fabrication."
            className="mb-10"
            coordinateTag="PKG-04"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.deliverables.map((deliv, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFFDF9] border border-slate-200 flex items-start gap-3 shadow-xs hover:border-[#FF6B00]/40 transition-colors">
                <FileCheck className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0F172A] leading-snug">{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Schematic Gallery */}
      <section className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="CAD VISUALIZATIONS"
            title="Project Engineering Gallery"
            subtitle="Isometric model views, connection details, and fabrication layout drawings."
            className="mb-12"
            coordinateTag="GAL-03"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.galleryCaptions.map((caption, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-[#FFFDF9] border border-slate-200 rounded-xl flex items-center justify-center p-4 relative overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-warm-grid opacity-60" />
                  <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
                    <line x1="10" y1="100" x2="190" y2="100" stroke="#0F172A" strokeWidth="2" />
                    <line x1="40" y1="100" x2="40" y2="20" stroke="#0F172A" strokeWidth="2" />
                    <line x1="160" y1="100" x2="160" y2="20" stroke="#0F172A" strokeWidth="2" />
                    <line x1="40" y1="30" x2="160" y2="30" stroke="#FF6B00" strokeWidth="2" />
                    <line x1="40" y1="100" x2="160" y2="30" stroke="#F59E0B" strokeWidth="1.5" />
                    <circle cx="100" cy="65" r="4" fill="#FF6B00" />
                    <text x="100" y="112" fill="#64748B" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      SCHEMATIC FIG 0{idx + 1}
                    </text>
                  </svg>
                </div>
                <div className="font-mono text-xs text-slate-700">
                  <span className="text-[#0F172A] block font-bold mb-1 font-outfit">PLATE 0{idx + 1}:</span>
                  <span className="text-slate-600">{caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Discuss Your Project With Kenz Engineering"
        subtitle="Submit project drawings or structural design calculations to receive a detailing feasibility assessment and quotation."
      />
    </div>
  );
}
