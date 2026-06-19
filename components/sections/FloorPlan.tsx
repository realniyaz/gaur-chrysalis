"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // 👈 Imported Next.js App Router Hook
import { X, Lock } from "lucide-react";

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
  const router = useRouter(); // 👈 Initialized client router container
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const closeFormModal = () => {
    setSelectedPlan(null);
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
          message: formData.message || `Floor Plan Request for ${selectedPlan}`,
          context: `Floor Plan Request - ${selectedPlan}`,
        }),
      });

      if (response.ok) {
        closeFormModal(); // Close modal overlay window seamlessly
        router.push("/thank-you"); // 🚀 Native App Router redirection to trigger conversions
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
                <div className="bg-gradient-to-r from-[#3a2a1a] to-[#5a4229] text-[#dfc7a1] rounded-xl py-2.5 px-4 shadow-sm transition-all duration-300 group-hover:from-[#dfc7a1] group-hover:to-[#ebd5b2] group-hover:text-gray-900">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider truncate">
                    {plan.type}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          BROCHURE/PLAN MODAL WINDOW (SIMPLIFIED HERO-STYLE LOOK)
          ========================================================================= */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col p-6 sm:p-8 space-y-6">
            
            {/* Modal Header Panel */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Get More Details Enquire Now
              </h3>
              <button 
                onClick={closeFormModal}
                disabled={isLoading}
                className="p-1 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none disabled:opacity-50"
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