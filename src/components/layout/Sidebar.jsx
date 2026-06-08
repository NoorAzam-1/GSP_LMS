"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  Award,
  Receipt,
  Users,
  Settings,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Megaphone
} from "lucide-react";

export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "academy",
      label: "Academy (6th - 12th)",
      path: "/academy",
      icon: GraduationCap,
    },
    {
      id: "entrance",
      label: "Entrance Hub",
      path: "/entrance",
      icon: Award,
    },
    {
      id: "fees",
      label: "Fee Management",
      path: "/fees",
      icon: Receipt,
      badge: 3,
      badgeType: "warning",
    },
    {
      id: "staff",
      label: "Faculty & Staff",
      path: "/staff",
      icon: Users,
    },
    {
      id: "whatsapp",
      label: "Whatsapp Campaign",
      path: "/campaign",
      icon: Megaphone,
    },
    {
      id: "settings",
      label: "CRM Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside
      className={`bg-white border-r border-slate-100 h-screen flex flex-col transition-all duration-300 ease-in-out shrink-0 z-30 sticky top-0 ${
        isSidebarCollapsed ? "w-24" : "w-64"
      }`}
    >
      {/* Brand Header */}
      <div className="p-3 border-b border-slate-100 flex items-center justify-between">
        {!isSidebarCollapsed && (
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-linear-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-200">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-600 uppercase">
                GSP_LMS
              </h2>
            </div>
          </div>
        )}
        
        {isSidebarCollapsed && (
          <div className="mx-auto min-w-10 h-10 bg-linear-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        )}

        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className={`p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors ${
            isSidebarCollapsed ? "mx-auto mt-0" : ""
          }`}
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path || pathname?.startsWith(`${item.path}/`);

          return (
            <Link
              key={item.id}
              href={item.path}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group relative ${
                isActive
                  ? "bg-linear-to-r from-blue-50 to-indigo-50/50 text-blue-600 font-semibold"
                  : item.specialGlow
                    ? "text-emerald-600 hover:bg-emerald-50/40"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-transform group-hover:scale-110 ${
                  isActive
                    ? "text-blue-600"
                    : item.specialGlow
                      ? "text-emerald-500 animate-pulse"
                      : "text-slate-400 group-hover:text-slate-600"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              {!isSidebarCollapsed && (
                <span className="flex-1 text-left whitespace-nowrap truncate">
                  {item.label}
                </span>
              )}

              {!isSidebarCollapsed && item.badge && item.badge > 0 && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.badgeType === "warning"
                      ? "bg-rose-100 text-rose-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {item.badge}
                </span>
              )}

              {item.specialGlow && !isSidebarCollapsed && (
                <span className="absolute right-2 top-2.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {!isSidebarCollapsed && (
        <div className="p-3 m-3 bg-linear-to-tr from-slate-50 to-blue-50/30 border border-slate-100 rounded-2xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm shrink-0">
              N
            </div>
            <div className="truncate">
              <p className="text-xs font-semibold text-slate-900 truncate">
                Noor Azam
              </p>
              <p className="text-[10px] text-slate-400 truncate">
                Store Admin Manager
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}