"use client";

import React, { useState } from "react";
import { X, PhoneCall, Car, Tags, CheckCircle2 } from "lucide-react";

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
      size: "1800 Sq. ft.",
      ctaText: "Request Pricing Details",
    },
    {
      type: "4 BHK Apartments",
      price: "₹ On Request",
      size: "On Request",
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

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="price" className="relative w-full py-24 md:py-32 bg-[#0d0d0d] overflow-hidden scroll-mt-20">
  
  {/* Bulletproof Ambient Background Layout */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 backdrop-blur-[2px] transition-transform duration-700"
      style={{ backgroundImage: "url('/public/aerial.jpeg')" }} 
    />
    {/* Dark subtle overlay wrapper forcing contrast and visibility */}
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

        {/* Re-designed Card Architecture Grid */}
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

      {/* Luxury Form Popup Modal Layer */}
      {selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-lg bg-black/75 transition-opacity duration-300 animate-fade-in">
          <div className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible border border-gray-100">
            
            {/* Left Side: Modern Asymmetrical Value Sidebar */}
            <div className="md:col-span-5 bg-gradient-to-b from-[#261a0f] to-[#120c07] p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#dfc7a1]/5 rounded-full blur-2xl" />
              
              {/* Brand Logo Identity */}
              <div className="flex flex-col z-10">
                <span className="font-black text-2xl tracking-tighter text-white">GAURS</span>
                <span className="text-[9px] uppercase tracking-widest text-[#dfc7a1] font-medium tracking-[0.2em] -mt-0.5">your own world</span>
              </div>

              {/* Elevated Trust Vectors */}
              <div className="space-y-8 flex-grow flex flex-col justify-center my-12 z-10">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#dfc7a1]">
                    Our Guarantee
                  </h4>
                  <p className="text-xl font-extrabold tracking-tight">The Luxury Promise</p>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-2xl text-[#dfc7a1] border border-white/10 transition-transform group-hover:scale-110 duration-300">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-gray-200">Instant Call Back</span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-2xl text-[#dfc7a1] border border-white/10 transition-transform group-hover:scale-110 duration-300">
                    <Car className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-gray-200">Complimentary Site Visit</span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-2xl text-[#dfc7a1] border border-white/10 transition-transform group-hover:scale-110 duration-300">
                    <Tags className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-gray-200">Unmatched Direct Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Side: High-Conversion Form Sheet */}
            <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center relative bg-white">
              <button
                onClick={closeFormModal}
                className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-8 space-y-1">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-md inline-block animate-pulse">
                      Limited Pre-Launch Offers
                    </span>
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Register to Unlock Pricing
                    </h3>
                  </div>

                  <form onSubmit={handleModalSubmit} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Full Name"
                        className="w-full bg-transparent border-b border-gray-200 py-3 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#5a4229] transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-gray-200 py-3 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#5a4229] transition-colors"
                      />
                    </div>

                    <div className="flex items-center border-b border-gray-200 focus-within:border-[#5a4229] transition-colors">
                      <div className="flex items-center gap-1.5 pr-2.5 text-sm text-gray-500 py-3 select-none font-semibold">
                        <span className="inline-block w-4 h-2.5 bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#128807] rounded-sm opacity-90" />
                        <span>+91</span>
                        <span className="text-[8px] text-gray-400 ml-0.5">▼</span>
                      </div>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Contact Number"
                        className="w-full bg-transparent py-3 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Describe your requirement (Optional)"
                        className="w-full bg-transparent border-b border-gray-200 py-3 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#5a4229] resize-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#5a4229] py-4 text-xs font-bold uppercase tracking-widest text-[#dfc7a1] shadow-lg transition-all duration-300 hover:bg-[#46331f] hover:scale-[1.01] active:scale-[0.99] mt-6"
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              ) : (
                /* Premium Success State Transition Display */
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-5 animate-scale-up">
                  <div className="h-20 w-20 bg-emerald-50 rounded-3xl flex items-center justify-center border border-emerald-100 text-emerald-600 shadow-sm shadow-emerald-100 animate-pulse">
                    <CheckCircle2 className="h-10 w-10 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">Application Received</h3>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for your interest in Gaur Chrysalis. An executive relationship manager is processing your request and will reach out shortly.
                    </p>
                  </div>
                  <button
                    onClick={closeFormModal}
                    className="mt-6 px-8 py-3 rounded-xl border border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-widest text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Return to Showcase
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