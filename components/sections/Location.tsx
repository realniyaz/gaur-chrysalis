"use client";

import React, { useState } from "react";
import { X, PhoneCall, Car, Tags, CheckCircle2, Calendar, Compass } from "lucide-react";

interface ModalFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Location() {
  const [modalContext, setModalContext] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
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
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const closeFormModal = () => {
    setModalContext(null);
    setIsSubmitted(false);
  };

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
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

          {/* Right Map Image Layout (CROPPED & ZOOMED FOR MAXIMUM VISIBILITY) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative overflow-hidden rounded-2xl border-2 border-gray-100 p-1 bg-white shadow-xl">
              {/* Cropped container mask set to clean cinematic 16:9 aspect ratio */}
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

      {/* Synchronized Unified Global Form Modal popup structure */}
      {modalContext && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[85vh] md:max-h-none overflow-y-auto md:overflow-visible border border-gray-100">
            
            {/* Left Sidebar Pane */}
            <div className="md:col-span-5 bg-gradient-to-b from-[#261a0f] to-[#120c07] p-6 flex flex-col justify-between text-white relative">
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tighter">GAURS</span>
                <span className="text-[7px] uppercase tracking-widest text-[#dfc7a1] font-medium -mt-1">your own world</span>
              </div>
              <div className="space-y-4 my-6 flex-grow flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#dfc7a1]">The Luxury Promise</span>
                <div className="flex items-center gap-3 text-xs text-gray-200"><PhoneCall className="h-4 w-4 text-[#dfc7a1]" /> Instant Call Back</div>
                <div className="flex items-center gap-3 text-xs text-gray-200"><Car className="h-4 w-4 text-[#dfc7a1]" /> Free Site Visit</div>
                <div className="flex items-center gap-3 text-xs text-gray-200"><Tags className="h-4 w-4 text-[#dfc7a1]" /> Unmatched Price</div>
              </div>
            </div>

            {/* Right Form Fields Pane */}
            <div className="md:col-span-7 p-6 flex flex-col justify-center relative bg-white">
              <button
                onClick={closeFormModal}
                className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-4">
                    <span className="text-[9px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded inline-block">
                      {modalContext}
                    </span>
                    <h3 className="text-base font-black text-gray-900 tracking-tight mt-1">
                      Reserve Your Dream Home Today
                    </h3>
                  </div>

                  <form onSubmit={handleModalSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-gray-200 py-2 text-xs font-medium text-gray-900 focus:outline-none focus:border-[#5a4229]"
                    />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-gray-200 py-2 text-xs font-medium text-gray-900 focus:outline-none focus:border-[#5a4229]"
                    />
                    <div className="flex items-center border-b border-gray-200 focus-within:border-[#5a4229]">
                      <span className="flex items-center gap-1 text-xs text-gray-500 font-semibold pr-1.5 select-none">
                        <span className="inline-block w-3.5 h-2 bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#128807] rounded-sm opacity-90" />
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Contact Number"
                        className="w-full bg-transparent py-2 text-xs font-medium text-gray-900 focus:outline-none"
                      />
                    </div>
                    <textarea
                      rows={1}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Message (Optional)"
                      className="w-full bg-transparent border-b border-gray-200 py-2 text-xs font-medium text-gray-900 focus:outline-none focus:border-[#5a4229] resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#5a4229] py-3 text-xs font-bold uppercase tracking-widest text-[#dfc7a1] shadow-md transition-all hover:bg-[#46331f] active:scale-[0.99] mt-4"
                    >
                      Enquire Now
                    </button>
                  </form>
                </>
              ) : (
                /* Compact Success View State Block */
                <div className="flex flex-col items-center justify-center text-center py-6 space-y-3 animate-scale-up">
                  <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100">
                    <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-gray-900">Application Received</h3>
                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                      Thank you. Your request context details have been captured. A dedicated sector connectivity expert will call you shortly to facilitate your schedule.
                    </p>
                  </div>
                  <button
                    onClick={closeFormModal}
                    className="mt-2 px-5 py-2 rounded-lg border border-gray-200 bg-gray-50 text-[10px] font-bold uppercase text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}