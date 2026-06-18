"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface PricingTier {
  type: string;
  price: string;
  size: string;
  ctaText: string;
}

interface ModalFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<ModalFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const customPricingData: PricingTier[] = [
    {
      type: "3 BHK Apartments",
      price: "₹ 8,499/- Sq.Ft.*",
      size: "1625 Sq. ft.",
      ctaText: "Request Pricing Details",
    },
    {
      type: "4 BHK Apartments",
      price: "₹ On Request",
      size: "1960 Sq. ft.",
      ctaText: "Request Pricing Details",
    },
  ];

  const openFormModal = (tierType: string) => {
    setSelectedTier(tierType);
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const closeFormModal = () => {
    setSelectedTier(null);
    setIsSubmitted(false);
  };

  // Wrapper to trigger Google Ads tracking event upon valid form confirmation
  const fireConversionEvent = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18243414829/S1AyCPOR0sAcEK3WkftD'
      });
      console.log("🎯 Pricing Section Google Conversion event logged successfully.");
    }
  };

  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          context: `Pricing Request - ${selectedTier}`,
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
    <section id="price" className="relative w-full py-24 md:py-32 bg-[#0d0d0d] overflow-hidden scroll-mt-20">
      
      {/* Bulletproof Ambient Background Layout */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 backdrop-blur-[2px] transition-transform duration-700"
          style={{ backgroundImage: "url('/aerial.jpeg')" }} 
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/90 mix-blend-multiply" />
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#dfc7a1]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Elite Section Header */}
        <div className="text-center space-y-3 mb-16 md:mb-24">
          <span className="text-xs font-bold text-[#dfc7a1] uppercase tracking-[0.25em]">
            Exclusive Inventory
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Luxury Pricing Collection
          </h2>
          <div className="h-0.5 w-16 bg-[#dfc7a1] mx-auto rounded-full" />
        </div>

        {/* Card Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto w-full">
          {customPricingData.map((tier, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-1.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(223,199,161,0.15)] flex flex-col group border border-white/5"
            >
              {/* Premium Heading Integration */}
              <div className="bg-gradient-to-r from-[#3a2a1a] to-[#5a4229] rounded-[1.25rem] py-4 px-6 text-center shadow-lg">
                <h3 className="text-lg font-bold text-[#dfc7a1] tracking-wide">
                  {tier.type}
                </h3>
              </div>

              {/* Data Specifications Grid */}
              <div className="px-8 py-10 flex-grow flex flex-col justify-center space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-5">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Price
                  </span>
                  <span className="text-2xl font-black text-gray-900 tracking-tight">
                    {tier.price}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Super Area
                  </span>
                  <span className="text-lg font-bold text-gray-800 tracking-wide">
                    {tier.size}
                  </span>
                </div>
              </div>

              {/* Enhanced Interactive Button Trigger */}
              <div className="px-8 pb-8">
                <button
                  onClick={() => openFormModal(tier.type)}
                  className="w-full text-center rounded-xl bg-[#dfc7a1] py-4 text-xs font-bold uppercase tracking-widest text-gray-950 shadow-md transition-all duration-300 hover:bg-[#ebd5b2] hover:scale-[1.02] active:scale-[0.98]"
                >
                  {tier.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          PRICING MODAL WINDOW (CLEAN COMPACT DESIGN REPLICATING HERO REFACTOR)
          ========================================================================= */}
      {selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col p-6 sm:p-8 space-y-6">
            
            {/* Modal Header Panel */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Get More Details Enquire Now
              </h3>
              <button 
                onClick={closeFormModal}
                className="p-1 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Close form window"
              >
                <X className="h-5 w-5 stroke-[2.5]" />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                {/* Name Input Box */}
                <div className="flex flex-col space-y-1">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter Name"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email Input Box */}
                <div className="flex flex-col space-y-1">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter Email"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
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
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter Number"
                      className="w-full bg-transparent px-3 py-3 text-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Action Submit Banner Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-black py-3.5 text-sm font-bold tracking-wide text-white shadow-md hover:bg-gray-900 transition-colors duration-200 mt-2 disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Submit Now"}
                </button>
              </form>
            ) : (
              /* Re-styled Success Resolution State Box */
              <div className="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-scale-up">
                <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm">
                  <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">Enquiry Received</h3>
                  <p className="text-xs text-gray-500 max-w-xs leading-relaxed font-medium">
                    Thank you for your interest in our {selectedTier} inventory. Your query details have been submitted successfully. An executive manager will connect with you shortly with comprehensive rate cards.
                  </p>
                </div>
                <button
                  onClick={closeFormModal}
                  className="mt-2 w-full rounded-xl bg-gray-950 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-sm hover:bg-gray-900 transition-colors"
                >
                  Dismiss Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}