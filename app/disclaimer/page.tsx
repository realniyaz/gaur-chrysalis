"use client";

import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ShieldAlert, FileText, Scale } from "lucide-react";

export default function DisclaimerPage() {
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
              <ShieldAlert className="h-6 w-6 stroke-[2]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-950">
              Legal Disclaimer
            </h1>
            <p className="text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-widest">
              Gaur Chrysalis Real Estate Showcase
            </p>
            <div className="h-0.5 w-16 bg-[#dfc7a1] mx-auto mt-2 rounded-full" />
          </div>

          {/* Informational Legal Content Accordion Paper Block */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 space-y-8 text-gray-700 text-xs sm:text-sm leading-relaxed text-justify font-medium">
            
            {/* Section Item 1: Information Authenticity */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <FileText className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  1. Information Accuracy & Authenticity
                </h2>
              </div>
              <p>
                The information, visual assets, property descriptions, design layouts, and pricing details 
                presented on this landing portal are compiled solely for informational and general guidance purposes. 
                While every logical effort is made to maintain complete layout synchronization and accuracy, the 
                rendered digital graphics, architectural illustrations, project parameters, and floor map 
                dimensions represent pre-launch marketing conceptions and are subject to variation or modification 
                by the developer without prior notice.
              </p>
            </div>

            {/* Section Item 2: Authorized Relationship Channel Disclaimer */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <Scale className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  2. Authorized Channel Partner Status
                </h2>
              </div>
              <p>
                This digital web domain is maintained exclusively by an Authorized Channel Partner for Gaurs Group 
                projects. It does not constitute the official administrative domain of Gaursons India or its corporate 
                subsidiaries. All registered trademarks, brand names, visual logos, and identity tokens belong to their 
                respective corporate stakeholders. The content presented here does not represent a direct legal offer or 
                binding contract on behalf of the underlying development group.
              </p>
            </div>

            {/* Section Item 3: Regulatory Compliance Framework */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-gray-900">
                <ShieldAlert className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wider">
                  3. RERA Regulatory Compliance
                </h2>
              </div>
              <p>
                Homebuyers and independent investors are strongly advised to verify all comprehensive design layouts, 
                super areas, payment terms, and delivery schedules directly with the real estate developer or on the official 
                state RERA regulatory portal under the registered tracking metrics (Project RERA Registration No: 
                UPRERAPRJ622344/11/2025 and Agent RERA No: PRM/KA/RERA/1251/310/AG/231020/004186) before initiating 
                any legal transactions, bookings, or formal agreements.
              </p>
            </div>

            {/* Section Item 4: Limitation of Liability */}
            <div className="space-y-3 border-t border-gray-100 pt-6">
              <p className="text-[11px] sm:text-xs text-gray-400 italic">
                By browsing and submitting your parameters through the interactive lead generation form containers on 
                this website, you explicitly acknowledge and agree that the authorized partner holds zero direct liability 
                for errors, transactional misinterpretations, or actions taken based on this general showcase content. 
                Your communication routes are treated with complete encryption metrics as defined in our privacy charters.
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