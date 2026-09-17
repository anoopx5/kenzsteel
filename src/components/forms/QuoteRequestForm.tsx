"use client";

import React, { useState } from "react";
import { Send, Upload, CheckCircle2, AlertCircle, FileText, X } from "lucide-react";
import { Button } from "@/ui/Button";

interface QuoteState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  requiredService: string;
  estimatedProjectSize: string;
  requiredDeliveryDate: string;
  additionalRequirements: string;
  files: File[];
}

interface QuoteErrors {
  [key: string]: string;
}

export function QuoteRequestForm() {
  const [formData, setFormData] = useState<QuoteState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    projectType: "",
    requiredService: "",
    estimatedProjectSize: "",
    requiredDeliveryDate: "",
    additionalRequirements: "",
    files: [],
  });

  const [errors, setErrors] = useState<QuoteErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: QuoteErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required for commercial RFQ";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country / project jurisdiction is required";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.requiredService) {
      newErrors.requiredService = "Please specify the primary required service";
    }

    const allowedExtensions = ["pdf", "dwg", "dxf", "ifc", "zip"];
    const maxSizeBytes = 50 * 1024 * 1024;

    for (const file of formData.files) {
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      if (!allowedExtensions.includes(ext)) {
        newErrors.files = `Unsupported file format (.${ext}). Accepted formats: PDF, DWG, DXF, IFC, ZIP`;
        break;
      }
      if (file.size > maxSizeBytes) {
        newErrors.files = `File ${file.name} exceeds 50MB limit`;
        break;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...fileList],
      }));
      if (errors.files) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated.files;
          return updated;
        });
      }
    }
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-sm text-center shadow-xl animate-in fade-in">
        <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-[#0B1B3D] mb-3">
          Quote Request Received
        </h2>
        <p className="text-slate-600 text-base max-w-lg mx-auto mb-8 leading-relaxed font-sans">
          Thank you. Your enquiry has been received. Our team will review the project details and contact you shortly.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xs p-5 max-w-md mx-auto text-left font-mono text-xs space-y-2 mb-8 text-slate-700">
          <div className="text-[#0B1B3D] font-bold pb-2 border-b border-slate-200">
            PROJECT RFQ SUMMARY
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Client / Contact:</span>
            <span className="text-slate-900 font-bold">{formData.fullName} ({formData.companyName})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Service:</span>
            <span className="text-[#1E5A8A] font-semibold">{formData.requiredService}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Project Type:</span>
            <span className="text-slate-900 font-medium">{formData.projectType}</span>
          </div>
          {formData.estimatedProjectSize && (
            <div className="flex justify-between">
              <span className="text-slate-500">Estimated Size:</span>
              <span className="text-slate-900">{formData.estimatedProjectSize}</span>
            </div>
          )}
          {formData.requiredDeliveryDate && (
            <div className="flex justify-between">
              <span className="text-slate-500">Target Delivery:</span>
              <span className="text-slate-900">{formData.requiredDeliveryDate}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-slate-500">Drawings Uploaded:</span>
            <span className="text-[#FF6B00] font-bold">{formData.files.length} document(s)</span>
          </div>
        </div>

        <Button
          variant="secondary"
          size="md"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: "",
              companyName: "",
              email: "",
              phone: "",
              country: "",
              projectType: "",
              requiredService: "",
              estimatedProjectSize: "",
              requiredDeliveryDate: "",
              additionalRequirements: "",
              files: [],
            });
          }}
        >
          Submit Another Quote Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-slate-200 p-7 sm:p-10 rounded-2xl shadow-xl"
    >
      <div className="border-b border-slate-100 pb-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] block mb-1 font-bold">
            PROJECT SPECIFICATION TRANSMITTAL
          </span>
          <h2 className="text-2xl font-bold text-[#0F172A] font-outfit">Request a Project Quote</h2>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono text-slate-500">
            Fields marked with <span className="text-[#FF6B00] font-bold">*</span> are required
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Full Name <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="John Doe"
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Company Name <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="Steel Fabricators Inc."
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.companyName ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          />
          {errors.companyName && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.companyName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Work Email Address <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jdoe@company.com"
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Direct Phone Number <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 234-5678"
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Project Country / Region <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. USA, Canada, UK, UAE, Australia"
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.country ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          />
          {errors.country && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.country}
            </p>
          )}
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Project Type <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.projectType ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          >
            <option value="">Select Project Sector</option>
            <option value="Industrial">Industrial</option>
            <option value="Commercial">Commercial</option>
            <option value="PEB">PEB (Pre-Engineered Building)</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Architectural Steel">Architectural Steel</option>
            <option value="Other">Other</option>
          </select>
          {errors.projectType && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.projectType}
            </p>
          )}
        </div>

        {/* Required Service */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Required Service <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <select
            value={formData.requiredService}
            onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.requiredService ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          >
            <option value="">Select Required Service</option>
            <option value="Steel Detailing">Steel Detailing</option>
            <option value="3D Modelling">3D Modelling</option>
            <option value="Fabrication Drawings">Fabrication Drawings</option>
            <option value="Connection Detailing">Connection Detailing</option>
            <option value="BIM / Revit">BIM / Revit</option>
            <option value="Structural Engineering">Structural Engineering</option>
            <option value="Other">Other</option>
          </select>
          {errors.requiredService && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.requiredService}
            </p>
          )}
        </div>

        {/* Estimated Project Size */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Estimated Project Size (Tonnage or Area)
          </label>
          <input
            type="text"
            value={formData.estimatedProjectSize}
            onChange={(e) => setFormData({ ...formData, estimatedProjectSize: e.target.value })}
            placeholder="e.g. 850 Metric Tons or 25,000 sq.ft"
            className="w-full bg-slate-50/70 border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all"
          />
        </div>

        {/* Required Delivery Date */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Required Delivery Date / Milestone
          </label>
          <input
            type="date"
            value={formData.requiredDeliveryDate}
            onChange={(e) => setFormData({ ...formData, requiredDeliveryDate: e.target.value })}
            className="w-full bg-slate-50/70 border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all"
          />
        </div>

        {/* Upload Drawings / Documents */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Upload Drawings &amp; Specifications
          </label>
          <div className="relative border-2 border-dashed border-slate-200 hover:border-[#FF6B00] bg-[#FFFDF9] rounded-2xl p-7 text-center transition-colors">
            <input
              type="file"
              multiple
              accept=".pdf,.dwg,.dxf,.ifc,.zip"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload className="w-8 h-8 text-[#FF6B00] mx-auto mb-2" />
            <p className="text-sm text-slate-800 font-semibold">
              Drop structural drawings, design criteria or models here
            </p>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Accepted Formats: <span className="text-[#FF6B00] font-semibold">PDF, DWG, DXF, IFC, ZIP</span> (Max 50MB per upload)
            </p>
          </div>

          {errors.files && (
            <p className="text-red-600 text-xs mt-2 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.files}
            </p>
          )}

          {formData.files.length > 0 && (
            <div className="mt-4 space-y-2">
              {formData.files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <FileText className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="truncate">{file.name}</span>
                    <span className="text-slate-400 text-[11px]">
                      ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    className="text-slate-400 hover:text-red-500 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Additional Requirements */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Additional Requirements / Detailing Specifications
          </label>
          <textarea
            rows={4}
            value={formData.additionalRequirements}
            onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
            placeholder="Mention any specific fabricator standards, software preferences (Tekla, Revit, SDS2), CNC export requirements, paint/galvanizing requirements, or connection design scope..."
            className="w-full bg-slate-50/70 border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-xs font-mono text-slate-400">
          <span className="text-[#FF6B00] font-bold">Confidentiality Guarantee:</span> All files are handled under strict non-disclosure.
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto font-bold px-9 py-4 rounded-xl shadow-lg shadow-orange-500/25 btn-shine"
          iconRight={<Send className="w-4 h-4" />}
        >
          {isSubmitting ? "Processing RFQ..." : "Submit Quote Request"}
        </Button>
      </div>
    </form>
  );
}
