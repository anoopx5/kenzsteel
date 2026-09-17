"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";

export function ProjectsFilterSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-[#F5F7FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            tag="PORTFOLIO &amp; EXECUTION"
            title="Selected Projects"
            subtitle="Representative structural steel detailing and modelling scopes across diverse industrial and commercial sectors."
            coordinateTag="PORT-01"
          />

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#FF6B00] hover:text-[#EA580C] transition-colors group"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs pr-3 border-r border-slate-200">
            <Filter className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span className="font-bold">FILTER:</span>
          </div>

          {PROJECT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-[#FF6B00] to-[#EA580C] text-white font-bold shadow-md shadow-orange-500/20"
                    : "bg-white text-slate-600 hover:bg-orange-50/50 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Button href="/projects" variant="outline" size="md">
            Explore Detailed Project Specifications
          </Button>
        </div>
      </div>
    </section>
  );
}
