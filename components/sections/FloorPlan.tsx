"use client";

import React, { useState } from "react";
import { X, PhoneCall, Car, Tags, CheckCircle2, Lock } from "lucide-react";

interface PlanItem {
  type: string;
  src: string;
  dim: string;
}

interface ModalFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function FloorPlan() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<ModalFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const planData: PlanItem[] = [
    {
      type: "3 BHK Apartments",
      src: "/Screenshot 2026-06-07 165553.png",
      dim: "Super Area: 1625 Sq. Ft.",
    },
    {
      type: "4 BHK Apartments",
      src: "/Screenshot 2026-06-07 165604.png",
      dim: "Super Area: 1960 Sq. Ft.",
    },
  ];

  const openFormModal = (planType: string) => {
    setSelectedPlan(planType);
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const closeFormModal = () => {
    setSelectedPlan(null);
    setIsSubmitted(false);
  };

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="floorplan" className="w-full bg-[#f4f2ee] py-12 md:py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10 md:mb-12">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-[0.2em]">
            Smartly Designed Layouts
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
            Floor Plans
          </h2>
          <div className="h-0.5 w-12 bg-[#dfc7a1] mx-auto mt-2 rounded-full" />
        </div>

        {/* Floor Plan Cards Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto w-full">
          {planData.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-3 shadow-md border border-gray-100 hover:border-[#dfc7a1]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col group"
            >
              {/* Image Container with Lock CTA Overlay */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center border border-gray-50">
                <img
                  src={plan.src}
                  alt={plan.type}
                  className="h-full w-full object-cover object-center blur-[2px] scale-[1.01] transition-transform duration-500 pointer-events-none"
                  loading="lazy"
                />
                
                {/* Request Call Button Mask */}
                <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] flex flex-col items-center justify-center p-4">
                  <button
                    onClick={() => openFormModal(plan.type)}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-950 shadow-md transition-all hover:bg-[#dfc7a1] hover:scale-105"
                  >
                    <Lock className="h-3 w-3 text-amber-700" />
                    Request A Call
                  </button>
                </div>
              </div>

              {/* Bottom Meta Data */}
              <div className="mt-4 mb-1 text-center space-y-2 px-1 w-full">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                  {plan.dim}
                </p>
                <div className="bg-gradient-to-r from-[#3a2a1a] to-[#5a4229] text-[#dfc7a1] rounded-xl py-2.5 px-4 shadow-sm transition-all duration-300 group-hover:from-[#dfc7a1] group-hover:to-[#ebd5b2] group-hover:text-gray-950">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider truncate">
                    {plan.type}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Synchronized Lead Form Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[85vh] md:max-h-none overflow-y-auto md:overflow-visible">
            
            {/* Left Sidebar Info Block */}
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

            {/* Right Form Fields Block */}
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
                      Unlock Floor Plan Blueprints
                    </span>
                    <h3 className="text-base font-black text-gray-900 tracking-tight mt-1">
                      Unlock {selectedPlan} Plan
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
                      Request Details
                    </button>
                  </form>
                </>
              ) : (
                /* Compact Success State View */
                <div className="flex flex-col items-center justify-center text-center py-6 space-y-3 animate-scale-up">
                  <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100">
                    <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-gray-900">Blueprint Request Received</h3>
                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                      Thank you. A layout representative will call you shortly to unlock the vector floor plan files.
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