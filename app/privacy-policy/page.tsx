"use client";

import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ShieldCheck, Eye, Lock, UserCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] flex flex-col selection:bg-amber-200 selection:text-black">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Core Content Layout Block */}
      <div className="flex-grow py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Page Top Heading Header Panel */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 text-center space-y-3 mb-10">
            <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 border border-emerald-100 mx-auto shadow-inner">
              <ShieldCheck className="h-6 w-6 stroke-[2]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-widest">
              Data Protection & Privacy Charters
            </p>
            <div className="h-0.5 w-16 bg-[#dfc7a1] mx-auto mt-2 rounded-full" />
          </div>

          {/* Core Content Privacy Block */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 space-y-8 text-gray-700 text-xs sm:text-sm leading-relaxed text-justify font-medium">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <Eye className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  1. Information We Collect
                </h2>
              </div>
              <p>
                When you use our specialized lead capture form panels (including Quick Enquiry, Request A Call, 
                Book Site Visit, or Call for Best Deal Price rows), we collect the explicit identity parameters 
                you submit. This information includes your Full Name, Email Address, and Contact Number. 
                This metrics collection is entirely intentional and designed to process your inventory 
                showcase requirements.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <UserCheck className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  2. How We Use Your Data
                </h2>
              </div>
              <p>
                Your submitted parameter attributes are processed to connect you with an authorized channel 
                partner sales strategist. This data allows us to fulfill requests for high-resolution floor plan vector 
                blueprints, arrange complimentary physical site tours, and share limited pre-launch pricing 
                discounts or updates regarding the Gaur Chrysalis development. We do not engage in cold email spam loops or blind list distribution.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <Lock className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  3. Encryption & Data Security
                </h2>
              </div>
              <p>
                We respect your privacy. Your submitted data remains completely safe, isolated, and encrypted 
                to ensure maximum protection against unauthorized access or breaches. We maintain strict digital 
                security standards across our Next.js API routes, preventing any external data leak or unauthorized mining activities.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <ShieldCheck className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  4. Third-Party Disclosures
                </h2>
              </div>
              <p>
                We do not sell, rent, or lease consumer information metrics to third-party marketing entities. Your data 
                is only shared internally with authorized real estate relationship managers who are explicitly tasked with 
                processing your Gaur Yamuna City query parameters.
              </p>
            </div>

            {/* Bottom Note */}
            <div className="space-y-3 border-t border-gray-100 pt-6">
              <p className="text-[11px] sm:text-xs text-gray-400 italic">
                This policy complies directly with standard data protection guidelines and RERA transparency laws. Any 
                revisions to our privacy parameters will be updated directly on this page in real time.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Standalone Global Corporate Footer */}
      <Footer />
    </main>
  );
}