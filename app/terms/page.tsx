"use client";

import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Scale, ShieldCheck, FileCheck, HelpCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] flex flex-col selection:bg-amber-200 selection:text-black">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Core Content Layout Block */}
      <div className="flex-grow py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Page Top Heading Header Panel */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 text-center space-y-3 mb-10">
            <div className="h-12 w-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-700 border border-amber-100 mx-auto shadow-inner">
              <Scale className="h-6 w-6 stroke-[2]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
              Terms & Conditions
            </h1>
            <p className="text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-widest">
              Gaur Chrysalis Digital Portal Usage
            </p>
            <div className="h-0.5 w-16 bg-[#dfc7a1] mx-auto mt-2 rounded-full" />
          </div>

          {/* Core Content Terms Block */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 space-y-8 text-gray-700 text-xs sm:text-sm leading-relaxed text-justify font-medium">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <FileCheck className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p>
                By accessing, browsing, or utilizing the interactive form containers on this website, you 
                explicitly agree to comply with and be bound by the following Terms and Conditions of use. 
                This portal serves as an informational display platform for the Gaur Chrysalis real estate project. 
                If you do not agree with any part of these terms, please discontinue use of this site immediately.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <ShieldCheck className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  2. Use of Information & Lead Submission
                </h2>
              </div>
              <p>
                The lead collection forms (including Quick Enquiry, Request A Call, Book Site Visit, and Best Deal forms) 
                are designed to facilitate communication between interested homebuyers and our authorized channel partner 
                sales strategists. By submitting your name, email, and contact number, you give explicit consent to be 
                contacted via voice calls, SMS, or WhatsApp regarding project inventory, pricing updates, and limited pre-launch offers.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <Scale className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  3. Intellectual Property Rights
                </h2>
              </div>
              <p>
                All trademarks, developer logos, project architectural renders, site plans, and digital media assets showcased 
                on this domain are the intellectual property of Gaursons India or their respective owners. Content on this site 
                is meant purely for consumer reference as part of our capacity as an authorized channel partner. Unauthorized 
                duplication, scraping, or modification of this source code and visual layout is strictly prohibited.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <HelpCircle className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  4. Modification of Portal Content
                </h2>
              </div>
              <p>
                The pricing rates (starting from ₹ 8,499/- Sq.Ft.*), spatial dimensions (e.g., 1800 Sq. Ft. for 3 BHK layouts), 
                amenities list, and availability tags represent current market structures and can be dynamically changed or retracted 
                by the developer without prior notice. Final purchasing conditions are exclusively governed by the official allotment 
                letter and subsequent flat buyer agreements.
              </p>
            </div>

            {/* Bottom Note */}
            <div className="space-y-3 border-t border-gray-100 pt-6">
              <p className="text-[11px] sm:text-xs text-gray-400 italic">
                These terms are governed by and construed in accordance with the regulatory framework of the Real Estate (Regulation 
                and Development) Act (RERA) parameters of Uttar Pradesh. Any updates to these usage criteria will be updated here in 
                real time.
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