// src/app/thank-you/page.tsx
"use client";

import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ArrowLeft, Phone, MessageSquareQuote } from "lucide-react";

export default function ThankYouPage() {
  const phoneNumber = "+919910374156";
  const whatsappNumber = "+919910374156";
  const whatsappMessage = encodeURIComponent(
    "Hi, I just submitted an enquiry on your portal for Gaur Chrysalis. Please share the pricing sheet, configuration options, and inventory updates immediately."
  );

  return (
    <>
      {/* 🎯 Google Ads Conversion Tracking Script Trigger */}
      <Script id="google-conversion-tracking" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {'send_to': 'AW-18243414829/S1AyCPOR0sAcEK3WkftD'});
          }
        `}
      </Script>

      <main className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 select-none">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 sm:p-10 text-center flex flex-col items-center space-y-6 animate-scale-up">
          
          {/* Success Icon Badge */}
          <div className="h-20 w-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm animate-pulse">
            <CheckCircle2 className="h-10 w-10 stroke-[2]" />
          </div>

          {/* Core Content Layer */}
          <div className="space-y-2.5">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Submission Confirmed
            </span>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight pt-1">
              Thank You!
            </h1>
            <p className="text-xs font-semibold text-gray-500 max-w-xs mx-auto leading-relaxed">
              Your structural layout registration has been processed successfully. A verified relationship manager has received the lead and is compiling your requested assets.
            </p>
          </div>

          {/* Quick Notice Banner Box */}
          <div className="w-full bg-[#fafafa] rounded-xl p-3.5 border border-gray-100 text-left">
            <p className="text-[11px] font-bold text-gray-700 leading-normal">
              ⏱️ <span className="text-gray-900">Priority Processing Active:</span> Connect via WhatsApp below to fetch instant digital blueprints, brochures, and layout matrices immediately.
            </p>
          </div>

          <div className="w-full border-t border-gray-100" />

          {/* Primary Call Action Panels Stack */}
          <div className="w-full flex flex-col gap-3">
            
            {/* WhatsApp Integration Link */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#20ba59] transition-all shadow-md transform active:scale-[0.99]"
            >
              <MessageSquareQuote className="h-4 w-4" />
              <span>Connect on WhatsApp</span>
            </a>

            {/* Direct Dialer Path link */}
            <a
              href={`tel:${phoneNumber}`}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gray-900 transition-colors shadow-sm"
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>Call Executive Directly</span>
            </a>
            
            {/* Go Back Link Home */}
            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gray-50 border border-gray-200 py-3 text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Return Home</span>
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}