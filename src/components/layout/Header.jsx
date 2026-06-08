"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight, Search, PlusCircle, Bell } from "lucide-react";

const routeConfig = {
  "/dashboard": {
    title: "Academic Analytics Overview",
    subtitle: "Dashboard",
    actionLabel: "Quick Schedule",
    searchPlaceholder: "Search batches, classes...",
  },
  "/courses": {
    title: "Course Curriculum Vault",
    subtitle: "Courses & Syllabus",
    actionLabel: "Create Course",
    searchPlaceholder: "Search modules, subjects...",
  },
  "/students": {
    title: "Student Admissions Directory",
    subtitle: "Student Hub",
    actionLabel: "Enroll Student",
    searchPlaceholder: "Search by Roll No or Name...",
  },
  "/fees": {
    title: "Fee Collection Desk",
    subtitle: "Finance Management",
    actionLabel: "Generate Invoice",
    searchPlaceholder: "Search receipts, dues...",
  },
};

export default function Header() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Assignment Submitted",
      msg: "Rahul (Class 10) uploaded Math assignment",
      time: "5m ago",
      unread: true,
    },
    {
      id: 2,
      title: "Fee Alert",
      msg: "Batch B-3 fee clearance pending for 5 students",
      time: "1h ago",
      unread: true,
    },
  ]);

  const currentRoute = routeConfig[pathname] || {
    title: "EduPulse Management Space",
    subtitle: "LMS Portal",
    actionLabel: "Add New Record",
    searchPlaceholder: "Search anything...",
  };

  const hasUnread = notifications.some((n) => n.unread);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-3.5 flex items-center justify-between z-20">
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>EduPulse LMS</span>
            <ChevronRight className="w-3 h-3" />
            <span className="capitalize font-medium text-slate-500">
              {currentRoute.subtitle}
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">
            {currentRoute.title}
          </h2>
        </div>
      </div>

      {/* RIGHT: Global System Status, Search & Actions */}
      <div className="flex items-center gap-3.5">
        {/* LMS Cloud Sync Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-semibold">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
          <span>Live Classroom Server: Active</span>
        </div>

        {/* Dynamic Context Search Bar */}
        <div className="relative max-w-xs hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder={currentRoute.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-2 text-xs w-64 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-700"
          />
        </div>

        {/* Context-Driven Primary Action Button */}
        <button
          onClick={() =>
            alert(`Triggered action for: ${currentRoute.actionLabel}`)
          }
          className="px-3.5 py-2 text-xs font-semibold bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg shadow-blue-500/10 flex items-center gap-1.5 transition-all transform hover:scale-[1.02]"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{currentRoute.actionLabel}</span>
        </button>

        {/* Notification Hub Drodown */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className={`p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all relative ${
              hasUnread ? "text-slate-800" : "text-slate-500"
            }`}
          >
            <Bell
              className={`w-5 h-5 ${hasUnread ? "animate-bounce text-indigo-600" : ""}`}
            />
            {hasUnread && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" />
            )}
          </button>

          {isNotificationOpen && (
            <div className="absolute right-0 mt-3 w-80 bg-white border border-slate-100 shadow-xl rounded-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                <h3 className="font-bold text-sm text-slate-900">
                  Academic Alerts
                </h3>
                <button
                  onClick={() =>
                    setNotifications(
                      notifications.map((n) => ({ ...n, unread: false })),
                    )
                  }
                  className="text-[10px] font-semibold text-blue-600 hover:underline"
                >
                  Mark all read
                </button>
              </div>
              <div className="mt-3 space-y-2.5 max-h-60 overflow-y-auto">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-2.5 rounded-xl transition-all ${notif.unread ? "bg-blue-50/40" : "hover:bg-slate-50"}`}
                  >
                    <div className="flex justify-between items-start gap-1">
                      <span className="font-bold text-xs text-slate-800 block leading-tight">
                        {notif.title}
                      </span>
                      <span className="text-[9px] text-slate-400 shrink-0">
                        {notif.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      {notif.msg}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Separator & User Avatar */}
        <div className="h-9 w-[1px] bg-slate-100" />
        <div className="flex items-center gap-2">
          <div className="w-8.5 h-8.5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xs font-extrabold text-indigo-600">
            NA
          </div>
        </div>
      </div>
    </header>
  );
}
