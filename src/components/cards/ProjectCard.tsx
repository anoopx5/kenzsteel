import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Wrench, Layers } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { Badge } from "@/ui/Badge";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10 hover:border-[#FF6B00] focus:outline-none",
        className
      )}
    >
      {/* Project Visual Container with Real Image */}
      <div className="relative w-full h-52 sm:h-56 bg-slate-100 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-500 font-mono text-xs">
            KENZ STEEL PROJECT
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category tag */}
        <div className="absolute top-3 left-3 z-20">
          <span className="font-mono text-[10px] font-bold tracking-wider uppercase bg-[#FF6B00] text-white px-2.5 py-1 rounded-md shadow-md">
            {project.category}
          </span>
        </div>

        {/* Software indicator */}
        <div className="absolute bottom-3 right-3 z-20 font-mono text-[11px] text-white font-bold bg-[#0F172A]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20 shadow-sm">
          {project.softwareUsed.split("/")[0].trim()}
        </div>

        {/* Tonnage badge */}
        {project.tonnageOrSize && (
          <div className="absolute bottom-3 left-3 z-20 font-mono text-xs text-white font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>{project.tonnageOrSize}</span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>{project.location}</span>
          </div>

          <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#FF6B00] transition-colors leading-snug mb-2 font-outfit line-clamp-1">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          <div className="pt-3.5 border-t border-slate-100 flex flex-col gap-1.5 font-mono text-xs text-slate-500">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[#0F172A] font-bold">SCOPE:</span>
              <span className="truncate text-slate-600">{project.scope}</span>
            </div>
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF6B00] group-hover:text-[#EA580C]">
          <span>View Project Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}
