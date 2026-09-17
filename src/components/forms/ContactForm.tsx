"use client";

import React, { useState } from "react";
import { Send, Upload, CheckCircle2, AlertCircle, FileText, X } from "lucide-react";
import { Button } from "@/ui/Button";

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  requiredService: string;
  projectDescription: string;
  preferredContact: "email" | "phone" | "whatsapp";
  files: File[];
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    projectType: "",
    requiredService: "",
    projectDescription: "",
    preferredContact: "email",
    files: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = "Please enter a valid phone number with country code";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.requiredService) {
      newErrors.requiredService = "Please select a required detailing service";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Please provide a brief description of your project scope";
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = "Description must be at least 15 characters";
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
    }, 800);
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
      <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-sm text-center shadow-lg animate-in fade-in">
        <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-5 text-green-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B1B3D] mb-2">
          Enquiry Successfully Submitted
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Thank you. Your project enquiry has been received. Our structural detailing team will review the scope and reach out shortly via your preferred contact method.
        </p>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs max-w-sm mx-auto text-left font-mono text-xs text-slate-700 mb-6 space-y-1">
          <div className="text-[#0B1B3D] font-bold mb-1">REFERENCE RECEIPT</div>
          <div>Contact: {formData.fullName} ({formData.email})</div>
          <div>Scope: {formData.requiredService}</div>
          <div>Project Type: {formData.projectType}</div>
          {formData.files.length > 0 && (
            <div>Drawings: {formData.files.length} document(s) attached</div>
          )}
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
              projectDescription: "",
              preferredContact: "email",
              files: [],
            });
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-slate-200 p-7 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden"
    >
      <div className="border-b border-slate-100 pb-5 mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[#0F172A] font-outfit">Project Inquiry Form</h3>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Fields marked with <span className="text-[#FF6B00] font-bold">*</span> are mandatory
          </p>
        </div>
        <span className="text-[10px] font-mono px-3 py-1 bg-[#FFF4ED] border border-[#FED7AA] text-[#FF6B00] font-bold rounded-md">
          CONFIDENTIAL
        </span>
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
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder="e.g. Robert Smith"
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
            Company Name
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            placeholder="e.g. Apex Fabricators Ltd"
            className="w-full bg-slate-50/70 border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Work Email <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="rsmith@fabrication.com"
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
            Phone / Mobile (with country code) <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+1 (555) 019-2834"
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
            Country / Region
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            placeholder="e.g. United States, UK, UAE, Australia"
            className="w-full bg-slate-50/70 border border-slate-200 px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Project Type <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <select
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.projectType ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          >
            <option value="">Select Project Type</option>
            <option value="Industrial">Industrial Plant / Crane Gantry</option>
            <option value="Commercial">Commercial / Mixed-Use Building</option>
            <option value="PEB">Pre-Engineered Building (PEB)</option>
            <option value="Infrastructure">Infrastructure / Bridge Girder</option>
            <option value="Architectural Steel">Architectural / AESS Steel</option>
            <option value="Special Structures">Pipe Rack / Special Structure</option>
            <option value="Other">Other Custom Steelwork</option>
          </select>
          {errors.projectType && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.projectType}
            </p>
          )}
        </div>

        {/* Required Service */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Required Service <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <select
            value={formData.requiredService}
            onChange={(e) =>
              setFormData({ ...formData, requiredService: e.target.value })
            }
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.requiredService ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          >
            <option value="">Select Primary Service</option>
            <option value="Structural Steel Detailing">Structural Steel Detailing</option>
            <option value="3D Steel Modelling">3D Steel Modelling (Tekla / Revit)</option>
            <option value="Shop & Fabrication Drawings">Shop & Fabrication Drawings</option>
            <option value="Connection Detailing">Connection Detailing</option>
            <option value="BIM / Revit Modelling">BIM / Revit Modelling</option>
            <option value="Structural Engineering Support">Structural Engineering Support</option>
            <option value="PEB Design & Detailing">PEB Design & Detailing</option>
            <option value="Full Turnkey Package">Full Detailing & Engineering Package</option>
          </select>
          {errors.requiredService && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.requiredService}
            </p>
          )}
        </div>

        {/* Project Description */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Project Description &amp; Requirements <span className="text-[#FF6B00] font-bold">*</span>
          </label>
          <textarea
            rows={4}
            value={formData.projectDescription}
            onChange={(e) =>
              setFormData({ ...formData, projectDescription: e.target.value })
            }
            placeholder="Provide details on project tonnage/size, expected turnaround schedule, governing codes (e.g. AISC, Eurocode), fabricator shop preferences, or specific connection types..."
            className={`w-full bg-slate-50/70 border px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 focus:outline-none transition-all ${
              errors.projectDescription ? "border-red-500 bg-red-50/20" : "border-slate-200"
            }`}
          />
          {errors.projectDescription && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.projectDescription}
            </p>
          )}
        </div>

        {/* Upload Drawings */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
            Upload Drawings &amp; Specifications (Optional)
          </label>
          <div className="relative border-2 border-dashed border-slate-200 hover:border-[#FF6B00] bg-[#FFFDF9] rounded-2xl p-6 text-center transition-colors">
            <input
              type="file"
              multiple
              accept=".pdf,.dwg,.dxf,.ifc,.zip"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload className="w-7 h-7 text-[#FF6B00] mx-auto mb-2" />
            <p className="text-sm text-slate-800 font-semibold">
              Click to browse or drag and drop drawings here
            </p>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Accepted: PDF, DWG, DXF, IFC, ZIP (Max: 50MB per upload)
            </p>
          </div>

          {errors.files && (
            <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" /> {errors.files}
            </p>
          )}

          {formData.files.length > 0 && (
            <div className="mt-3 space-y-2">
              {formData.files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <FileText className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="truncate">{file.name}</span>
                    <span className="text-slate-400 text-[10px]">
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

        {/* Preferred Contact Method */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase text-slate-700 mb-2.5 font-bold">
            Preferred Contact Method
          </label>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            {[
              { id: "email", label: "Email" },
              { id: "phone", label: "Phone Call" },
              { id: "whatsapp", label: "WhatsApp" },
            ].map((method) => (
              <label
                key={method.id}
                className="inline-flex items-center gap-2 cursor-pointer text-slate-700 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200 hover:border-[#FF6B00]/40 transition-colors"
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={method.id}
                  checked={formData.preferredContact === method.id}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      preferredContact: method.id as FormState["preferredContact"],
                    })
                  }
                  className="text-[#FF6B00] focus:ring-[#FF6B00] accent-[#FF6B00]"
                />
                <span className="font-semibold">{method.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-xs font-mono text-slate-400 text-center sm:text-left">
          Drawings and specifications are protected under strict non-disclosure.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto font-bold px-9 py-4 rounded-xl shadow-lg shadow-orange-500/25 btn-shine"
          iconRight={<Send className="w-4 h-4" />}
        >
          {isSubmitting ? "Submitting Inquiry..." : "Submit Project Enquiry"}
        </Button>
      </div>
    </form>
  );
}
