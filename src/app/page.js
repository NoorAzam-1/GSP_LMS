import React from "react";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-slate-50 h-full text-slate-900 font-sans selection:bg-blue-500/30">
      <section className="relative overflow-hidden py-10">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-100/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-600 mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5 animate-bounce text-amber-500" />
            <span>Next-Gen Education Infrastructure</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Manage Academy & Entrance Prep <br />
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              In One Unified CRM Ecosystem
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Empower your institute with GSP LMS. Seamlessly track 6th-12th
            standard schooling, automate heavy entrance exam batches, sync
            WhatsApp campaigns, and streamline fee desk workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
            >
              <span>Launch LMS Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-semibold text-sm rounded-xl transition-colors shadow-sm">
              Schedule Private Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
