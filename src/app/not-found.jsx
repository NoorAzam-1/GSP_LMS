import React from "react";
import Link from "next/link";
import { FileQuestion, LayoutDashboard, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 text-center bg-slate-100/10  mx-auto w-full">
      <div className="flex flex-col items-center justify-center shadow-sm p-10 rounded-2xl bg-slate-200/30">
        <div className="w-20 h-20 bg-linear-to-tr from-rose-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center text-rose-600 mb-6 shadow-inner relative group">
          <span className="absolute inset-0 rounded-2xl bg-rose-500/5 animate-pulse" />
          <FileQuestion className="w-10 h-10 transition-transform group-hover:rotate-12 duration-300" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-rose-500 bg-rose-50 px-3 py-1 rounded-full mb-3">
          Error 404
        </span>

        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          This Page Isn't in the Syllabus!
        </h1>

        <p className="text-slate-500 text-sm max-w-md mb-10 leading-relaxed">
          The page you are looking for might have been deleted, had its name
          changed, or it hasn't been created yet.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-md shadow-blue-500/10 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01]"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Go to Dashboard</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-3 text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-slate-400" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}