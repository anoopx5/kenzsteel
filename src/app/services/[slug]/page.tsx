import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Wrench, ShieldCheck, Layers, Boxes } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES, ServiceItem } from "@/data/services";
import { PROJECTS } from "@/data/projects";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Kenz Engineering`,
    description: service.heroDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Service Hero */}
      <section className="bg-gradient-to-b from-[#FFF8F2] via-white to-white py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
            theme="light"
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2">
                <Badge variant="orange">SERVICE // {service.number}</Badge>
                <span className="text-xs font-mono text-slate-500 font-bold">
                  TEKLA / REVIT WORKFLOWS
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-outfit">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Button
                  href="/request-a-quote"
                  variant="primary"
                  size="lg"
                  className="font-bold rounded-xl shadow-lg shadow-orange-500/25 px-7 py-3.5 btn-shine"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Quote for {service.title}
                </Button>

                <Button href="/contact" variant="outline" size="lg" className="bg-white rounded-xl border-slate-200 px-7 py-3.5">
                  Discuss Technical Scope
                </Button>
              </div>
            </div>

            {/* Right Specification Highlights Box */}
            <div className="lg:col-span-4">
              <div className="bg-[#FFFDF9] border border-slate-200 p-7 rounded-2xl shadow-xl">
                <span className="font-mono text-xs text-[#FF6B00] block mb-4 uppercase tracking-wider font-bold">
                  SPECIFICATION HIGHLIGHTS
                </span>
                <div className="space-y-3.5 font-mono text-xs text-slate-700">
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500">Deliverable Format:</span>
                    <span className="text-[#0F172A] font-bold">PDF, DWG, NC, DXF</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500">Level of Detail:</span>
                    <span className="text-[#FF6B00] font-bold">LOD 350 to LOD 400</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500">Shop Standards:</span>
                    <span className="text-[#0F172A] font-semibold">Customizable</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Quality Review:</span>
                    <span className="text-emerald-600 font-bold">100% Checker Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="DELIVERABLES"
            title="What We Deliver"
            subtitle="Precision documentation prepared strictly in accordance with fabricator requirements and governing structural codes."
            className="mb-12"
            coordinateTag="DELIV-01"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.whatWeDeliver.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-200 bg-[#FFFDF9] hover:border-[#FF6B00] hover:bg-white hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-[#FF6B00] bg-[#FFF4ED] px-2.5 py-1 rounded-md border border-[#FED7AA]">
                    OUTPUT 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-outfit group-hover:text-[#FF6B00] transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailing Workflow */}
      <section className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="EXECUTION SEQUENCE"
            title={`Execution Workflow for ${service.title}`}
            subtitle="How we take your engineering inputs through to validated fabrication-ready deliverables."
            className="mb-12"
            coordinateTag="FLOW-05"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.workflow.map((wf) => (
              <div
                key={wf.step}
                className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:border-[#FF6B00] hover:shadow-lg transition-all"
              >
                <div>
                  <span className="font-mono text-xl font-bold text-[#FF6B00] block mb-2 font-outfit">
                    {wf.step}
                  </span>
                  <h4 className="text-base font-bold text-[#0F172A] mb-2 font-outfit">{wf.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{wf.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Technical Capabilities */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Applications */}
            <div className="p-8 rounded-2xl bg-[#FFFDF9] border border-slate-200 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] font-bold block mb-3">
                PROJECT APPLICATIONS
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6 font-outfit">Where This Service Applies</h3>
              <ul className="space-y-3.5">
                {service.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Capabilities */}
            <div className="p-8 rounded-2xl bg-[#FFFDF9] border border-slate-200 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-[#EA580C] font-bold block mb-3">
                TECHNICAL CAPABILITIES
              </span>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6 font-outfit">Engineering &amp; Detailing Standards</h3>
              <ul className="space-y-3.5">
                {service.technicalCapabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="PORTFOLIO HIGHLIGHTS"
            title="Related Structural Projects"
            subtitle="Selected projects utilizing our steel detailing and 3D modeling expertise."
            className="mb-12"
            coordinateTag="PROJ-03"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Specific CTA */}
      <CTASection
        title={`Ready to Discuss ${service.title}?`}
        subtitle="Share your contract drawings and schedule requirements with our engineering team for a detailed review and quotation."
      />
    </div>
  );
}
