"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Upload, FileText } from "lucide-react";
import { SERVICES } from "@/data/services";

export function HomeContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    projectType: "Industrial Facility",
    requiredService: "Structural Steel Detailing",
    projectDescription: "",
    preferredContactMethod: "Email",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 bg-orange-50/50 border border-orange-200/80 rounded-2xl text-center space-y-4 font-mono">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF6B00] to-[#F59E0B] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#FF6B00]/25">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider font-heading">
          ENQUIRY REGISTERED // REF #KZ-{Math.floor(1000 + Math.random() * 9000)}
        </h4>
        <p className="text-xs text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
          Thank you for submitting your engineering project details. Our structural detailing team will review your specifications and follow up within 1 business day.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFileName(null);
            setFormData({
              fullName: "",
              companyName: "",
              email: "",
              phone: "",
              country: "",
              projectType: "Industrial Facility",
              requiredService: "Structural Steel Detailing",
              projectDescription: "",
              preferredContactMethod: "Email",
            });
          }}
          className="text-xs font-bold text-[#FF6B00] hover:text-[#EA580C] hover:underline pt-2 inline-block transition-colors"
        >
          Submit Another Technical Enquiry &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
      {/* Form Document Header Strip */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
          <span className="text-slate-900 font-bold">DOC: PROJECT ENQUIRY TRANSMITTAL</span>
        </div>
        <span>SEC: CONFIDENTIAL // LOD 400</span>
      </div>

      {/* Row 1: Full Name & Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-medium text-slate-800 mb-1">
            Full Name <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-800 mb-1">
            Company Name <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Fabrication Ltd. / Engineering Inc."
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 transition-all"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-medium text-slate-800 mb-1">
            Work Email <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="engineer@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-800 mb-1">
            Phone Number <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 transition-all"
          />
        </div>
      </div>

      {/* Row 3: Country & Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-medium text-slate-800 mb-1">
            Country / Region <span className="text-[#FF6B00]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. United States, UAE, UK"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-800 mb-1">
            Project Type <span className="text-[#FF6B00]">*</span>
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 transition-all"
          >
            <option value="Industrial Facility">Industrial & Manufacturing</option>
            <option value="Commercial Multi-Story">Commercial & Office Complex</option>
            <option value="PEB Building">Pre-Engineered Building (PEB)</option>
            <option value="Infrastructure / Bridge">Infrastructure & Bridges</option>
            <option value="Architectural Steel">Architectural & Exposed Steel (AESS)</option>
            <option value="Special Structures">Special Process / Pipe Rack / Modular</option>
          </select>
        </div>
      </div>

      {/* Row 4: Required Service */}
      <div>
        <label className="block text-xs font-medium text-slate-800 mb-1">
          Required Service <span className="text-[#FF6B00]">*</span>
        </label>
        <select
          value={formData.requiredService}
          onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 transition-all"
        >
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.number} - {s.title}
            </option>
          ))}
        </select>
      </div>

      {/* Row 5: Project Description */}
      <div>
        <label className="block text-xs font-medium text-slate-800 mb-1">
          Project Scope &amp; Requirements <span className="text-[#FF6B00]">*</span>
        </label>
        <textarea
          required
          rows={3}
          placeholder="Describe structural specifications, estimated tonnage, design codes (AISC/BS/Eurocode), or required turnaround..."
          value={formData.projectDescription}
          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15 transition-all resize-none"
        />
      </div>

      {/* Row 6: Upload Drawings Dropzone */}
      <div>
        <label className="block text-xs font-medium text-slate-800 mb-1">
          Upload Drawings (PDF, DWG, DXF, IFC, ZIP up to 50MB)
        </label>
        <div className="border-2 border-dashed border-slate-200 hover:border-[#FF6B00]/60 rounded-xl p-3 text-center bg-slate-50/50 hover:bg-orange-50/30 transition-all relative cursor-pointer">
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFileName(e.target.files[0].name);
              }
            }}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          />
          <div className="flex items-center justify-center gap-2 text-slate-600">
            {fileName ? (
              <>
                <FileText className="w-4 h-4 text-[#FF6B00]" />
                <span className="font-mono text-xs text-[#FF6B00] font-semibold">{fileName}</span>
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 text-[#FF6B00]" />
                <span>Drop structural drawings here or click to browse</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Row 7: Preferred Contact Method & Submit */}
      <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200">
        <div className="flex items-center gap-4 text-xs text-slate-600">
          <span className="font-medium text-slate-800">Preferred Contact:</span>
          {["Email", "Phone", "WhatsApp"].map((method) => (
            <label key={method} className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={formData.preferredContactMethod === method}
                onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                className="text-[#FF6B00] focus:ring-[#FF6B00] accent-[#FF6B00]"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-shine inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] hover:from-[#EA580C] hover:to-[#D97706] text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF6B00]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
        >
          <span>{isSubmitting ? "Transmitting..." : "Submit Project Enquiry →"}</span>
        </button>
      </div>
    </form>
  );
}
