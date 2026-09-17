import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-16 px-4 bg-blueprint-light text-slate-800 relative">
      <div className="max-w-md w-full bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl text-center shadow-xl shadow-slate-200/50">
        <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mx-auto mb-6 text-[#FF6B00]">
          <Compass className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs text-[#FF6B00] font-bold block uppercase tracking-widest mb-1">
          ERROR 404 // COORDINATE UNRESOLVED
        </span>

        <h1 className="text-3xl font-bold text-slate-900 font-heading mb-3">Page Not Found</h1>

        <p className="text-sm text-slate-600 mb-8 leading-relaxed font-sans">
          The requested specification, drawing page, or project reference does not exist or has been relocated within the directory.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono">
          <Button href="/" variant="primary" size="md" iconLeft={<ArrowLeft className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button href="/services" variant="outline" size="md">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
}
