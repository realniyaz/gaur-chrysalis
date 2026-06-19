"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // 👈 Imported Next.js App Router Hook
import { X, Calendar, Compass } from "lucide-react";

interface ModalFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Location() {
  const router = useRouter(); // 👈 Initialized client router container
  const [modalContext, setModalContext] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<ModalFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const connectivityHighlights = [
    "Upcoming Film City",
    "Planned Metro Connectivity",
    "Eastern Peripheral Expressway",
    "F1 Buddh International Circuit",
    "Near Jewar International Airport",
    "Proximity to High Street Retail & Business Zones",
    "Near Gaur Yamuna City, TS-3 & TS-4 Sectors",
  ];

  const openFormModal = (contextType: string) => {
    setModalContext(contextType);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const closeFormModal = () => {
    setModalContext(null);
  };

  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `+91${formData.phone}`,
          message: formData.message || `Location Interaction request for ${modalContext}`,
          context: `Location Interaction - ${modalContext}`,
        }),
      });

      if (response.ok) {
        closeFormModal(); // Close modal overlay window seamlessly
        router.push("/thank-you"); // 🚀 Direct native redirect path setup to hit tracking codes uniformly
      } else {
        alert("Something went wrong. Please try connecting via call or WhatsApp.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network connectivity issue. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="location" className="w-full bg-[#fafafa] py-14 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* UPPER ROW: Virtual Site Tour Container Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto w-full">
          {/* Left Media Thumbnail Frame */}
          <div className="lg:col-span-6 order-2 lg:order-1 group">
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#dfc7a1]/30 p-1.5 bg-white shadow-lg transition-transform duration-500 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-gray-100">
                <img
                  src="/banner2.png"
                  alt="Virtual Site Tour Presentation Preview"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Site Tour Content Panel */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 text-center lg:text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2em]">Site Tour</span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">Virtual Site Tour</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
              Take a virtual tour of Gaur Yamuna City and discover thoughtfully planned residences, modern amenities, expansive green landscapes, and contemporary architecture from the comfort of your home. Experience the perfect blend of lifestyle, connectivity, and premium living that makes this township truly exceptional.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openFormModal("Book Site Visit")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#dfc7a1] px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-950 shadow-md transition-all hover:bg-[#ebd5b2] hover:scale-105 active:scale-[0.98]"
              >
                <Calendar className="h-3.5 w-3.5" />
                Book Site Visit
              </button>
            </div>
          </div>
        </div>

        {/* LOWER ROW: Location Features Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto w-full pt-6 border-t border-gray-200/60">
          {/* Left Content Side */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1 text-center lg:text-left">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2em]">Strategic Connectivity</span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">
                A Location That Connects You To Everything
              </h3>
            </div>

            {/* Quick Map Parameter Checklist Matrix */}
            <div className="space-y-2.5 max-w-md mx-auto lg:mx-0">
              {connectivityHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <span className="text-[#4a3621] font-extrabold text-xs select-none transition-transform group-hover:translate-x-0.5">≫</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-700 tracking-wide leading-none">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center lg:text-left">
              <button
                onClick={() => openFormModal("Explore Map Location")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3a2a1a] to-[#5a4229] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#dfc7a1] shadow-md transition-all hover:from-[#46331f] hover:to-[#6b5033] hover:scale-105 active:scale-[0.98]"
              >
                <Compass className="h-3.5 w-3.5" />
                Explore Map
              </button>
            </div>
          </div>

          {/* Right Map Image Layout */}
          <div className="lg:col-span-6 w-full">
            <div className="relative overflow-hidden rounded-2xl border-2 border-gray-100 p-1 bg-white shadow-xl">
              <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-gray-50 flex items-center justify-center">
                <img
                  src="/Screenshot 2026-06-07 171114.png"
                  alt="Gaur Chrysalis Regional Connectivity Sector Map"
                  className="h-full w-full object-cover object-center scale-115 transform transition-transform duration-500 hover:scale-120 select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          UNIFIED LOCATION MODAL WINDOW (REFACTORED COMPACT HERO STYLE)
          ========================================================================= */}
      {modalContext && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col p-6 sm:p-8 space-y-6">
            
            {/* Modal Header Panel */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                  Get More Details Enquire Now
                </h3>
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mt-0.5">
                  Requesting Context: {modalContext}
                </span>
              </div>
              <button 
                onClick={closeFormModal}
                disabled={isLoading}
                className="p-1 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none flex-shrink-0 disabled:opacity-50"
                aria-label="Close form window"
              >
                <X className="h-5 w-5 stroke-[2.5]" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              {/* Name Input Box */}
              <div className="flex flex-col space-y-1">
                <input
                  type="text"
                  required
                  disabled={isLoading}
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter Name"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:bg-gray-50"
                />
              </div>

              {/* Email Input Box */}
              <div className="flex flex-col space-y-1">
                <input
                  type="email"
                  required
                  disabled={isLoading}
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter Email"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:bg-gray-50"
                />
              </div>

              {/* Contact Phone Input Box with Integrated ISD Extension */}
              <div className="flex flex-col space-y-1">
                <div className="relative flex items-center border border-gray-300 rounded-xl bg-white focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-transparent transition-all">
                  <span className="flex items-center gap-1 text-sm text-gray-500 font-bold pl-4 pr-2 select-none border-r border-gray-200">
                    <span className="inline-block w-4 h-2.5 bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#128807] rounded-sm opacity-90" />
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    disabled={isLoading}
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter Number"
                    className="w-full bg-transparent px-3 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none disabled:bg-gray-50"
                  />
                </div>
              </div>

              {/* Action Submit Banner Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-black py-3.5 text-sm font-bold tracking-wide text-white shadow-md hover:bg-gray-900 transition-colors duration-200 mt-2 disabled:bg-gray-700"
              >
                {isLoading ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}