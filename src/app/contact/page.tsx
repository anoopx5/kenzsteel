import React from "react";
import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | Structural Steel Detailing Inquiries",
  description:
    "Contact Kenz Engineering for structural steel detailing, 3D modelling, fabrication drawings, and project inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF8F2] via-white to-white py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: "Contact Us" }]}
            theme="light"
            className="mb-6"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FFF4ED] px-3.5 py-1.5 rounded-md border border-[#FED7AA] inline-block mb-3 font-bold">
              PROJECT INQUIRIES &amp; ESTIMATION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-5 font-outfit">
              Let&apos;s Discuss <span className="bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">Your Steel Project</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tell us about your project, required services, contract drawings and delivery timeline. Our engineering team responds promptly with technical feasibility and competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Contact Section */}
      <section className="py-20 lg:py-28 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Company Information */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl text-slate-800 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B00] via-[#F59E0B] to-[#EA580C]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] block mb-2 font-bold">
                  DIRECT CONTACT DESK
                </span>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6 font-outfit">{COMPANY.name}</h2>

                <div className="space-y-6 text-sm font-sans">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[#FED7AA] flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 shadow-xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">Telephone</span>
                      <span className="text-[#0F172A] font-mono font-bold text-sm">{COMPANY.phoneDisplay}</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[#FED7AA] flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 shadow-xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">Email Inquiries</span>
                      <span className="text-[#0F172A] font-mono font-medium text-sm">{COMPANY.email}</span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 shadow-xs">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">WhatsApp Support</span>
                      <span className="text-[#0F172A] font-mono font-medium text-sm">{COMPANY.whatsappDisplay}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[#FED7AA] flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">Office Location</span>
                      <span className="text-slate-700 leading-relaxed block mt-0.5 text-xs">{COMPANY.address.display}</span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] border border-[#FED7AA] flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 shadow-xs">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">Working Hours</span>
                      <span className="text-slate-700 block mt-0.5 text-xs">{COMPANY.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 font-mono text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict NDA and data confidentiality assured.</span>
                </div>
              </div>

              {/* Detailing Scope Assistance Note */}
              <div className="p-7 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h4 className="font-bold text-[#0F172A] text-base mb-2 font-outfit">Need a formal quotation?</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  For comprehensive project bids with drawing uploads, use our dedicated Request a Quote wizard.
                </p>
                <a
                  href="/request-a-quote"
                  className="font-mono text-xs font-bold text-[#FF6B00] hover:text-[#EA580C] inline-flex items-center gap-1 group"
                >
                  <span>Open Request a Quote Wizard</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
