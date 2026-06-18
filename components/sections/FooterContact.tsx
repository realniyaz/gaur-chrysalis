"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare, Mail, User, ShieldCheck } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function FooterContact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Wrapper to trigger Google Ads tracking event upon valid form confirmation
  const fireConversionEvent = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18243414829/S1AyCPOR0sAcEK3WkftD'
      });
      console.log("🎯 Footer Section Google Conversion event logged successfully.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          context: "Footer Corporate Contact Form",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        fireConversionEvent();
      } else {
        alert("Something went wrong. Please try connecting via call or WhatsApp.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#fcfcfc] py-16 md:py-24 border-t border-gray-200/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Corporate Profile & Render Showcase */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-[0.2em]">
                Legacy of Trust
              </span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
                About Gaurs Group
              </h2>
              <div className="h-0.5 w-12 bg-[#dfc7a1] rounded-full" />
            </div>

            <div className="text-gray-600 text-xs sm:text-sm leading-relaxed space-y-4 font-medium text-justify">
              <p>
                For over 25 years, Gaursons India has established itself as a trusted and reputed
                name in the real estate industry across the National Capital Region. With a strong
                portfolio of more than 45 successful projects, the company has consistently
                delivered excellence, earning the confidence of homebuyers and investors alike.
              </p>
              <p>
                Known for its customer-first approach, Gaursons India focuses on quality,
                transparency, and timely delivery in every development. Recognized among the top
                real estate developers in Noida and Greater Noida West, Gaurs Group stands out for
                its exceptional construction standards, advanced building technologies, and
                dedicated professional team. The company has made a remarkable impact across
                multiple sectors, including residential, commercial, retail, hospitality, healthcare, and
                education.
              </p>
            </div>

            {/* Asymmetrical Floating Preview Frames */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="overflow-hidden rounded-2xl shadow-md border border-gray-100 aspect-[16/10] bg-gray-50">
                <img
                  src="/banner1.png"
                  alt="Premium Luxury Chandelier Interior View"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md border border-gray-100 aspect-[16/10] bg-gray-50">
                <img
                  src="/banner2.png"
                  alt="Bespoke Formal Living Space Experience"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Inline Form Container Sheet */}
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:mx-0 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded inline-block animate-pulse">
                  Direct Channel Rates
                </span>
                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                  Call for Best Deal Price
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name field */}
                <div className="relative flex items-center border-b border-gray-200 focus-within:border-[#4a3621] transition-colors">
                  <User className="absolute left-1 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your Name"
                    className="w-full bg-transparent pl-8 py-3 text-xs font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {/* Email Address field */}
                <div className="relative flex items-center border-b border-gray-200 focus-within:border-[#4a3621] transition-colors">
                  <Mail className="absolute left-1 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Email Address"
                    className="w-full bg-transparent pl-8 py-3 text-xs font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {/* Contact phone field with Indian Flag display snippet */}
                <div className="flex items-center border-b border-gray-200 focus-within:border-[#4a3621] transition-colors">
                  <div className="flex items-center gap-1.5 pr-2 text-xs font-bold text-gray-500 py-3 select-none">
                    <span className="inline-block w-4 h-2.5 bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#128807] rounded-sm opacity-90" />
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Contact Number"
                    className="w-full bg-transparent py-3 text-xs font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {/* Optional Message Field */}
                <div className="relative flex items-start border-b border-gray-200 focus-within:border-[#4a3621] transition-colors">
                  <MessageSquare className="absolute left-1 top-3.5 h-4 w-4 text-gray-400" />
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Message / Requirements (Optional)"
                    className="w-full bg-transparent pl-8 py-3 text-xs font-semibold text-gray-900 placeholder-gray-400 focus:outline-none resize-none"
                  />
                </div>

                {/* Privacy and Verification note area */}
                <div className="flex items-center gap-2 pt-1 text-gray-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="text-[10px] font-medium tracking-wide">
                    We respect your privacy. Your data remains completely safe and encrypted.
                  </span>
                </div>

                {/* Submit Action Handle Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-gradient-to-r from-[#3a2a1a] to-[#5a4229] py-3.5 text-xs font-bold uppercase tracking-widest text-[#dfc7a1] shadow-lg transition-all duration-300 hover:from-[#46331f] hover:to-[#6b5033] hover:scale-[1.01] active:scale-[0.99] mt-4 disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Submit Form"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* SUCCESS STATE FLOATING POP-UP MODAL PANEL OVERLAY */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-center border border-gray-100 flex flex-col items-center space-y-4 animate-scale-up">
            
            <div className="h-14 w-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-inner">
              <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-gray-900 tracking-tight">
                Enquiry Sent Successfully!
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                Thank you for reaching out. Your elite pricing ticket has been filed. An authorised corporate sales strategist will contact you within the next 15 minutes with complete inventory breakdowns.
              </p>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full mt-2 rounded-xl bg-gray-900 hover:bg-gray-800 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-colors"
            >
              Acknowledge & Dismiss
            </button>
          </div>
        </div>
      )}
    </section>
  );
}