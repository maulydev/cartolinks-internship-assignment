"use client";

import { notifications } from "@/data/notifications";
import { Bell, X, CheckCircle, Info, AlertTriangle } from "lucide-react";
import React, { useState } from "react";
import { createPortal } from "react-dom";

const NotificationsDrawer = () => {
  const [open, setOpen] = useState(false);

  const typeStyles: Record<string, { icon: React.ElementType; color: string }> =
    {
      success: { icon: CheckCircle, color: "text-green-500" },
      info: { icon: Info, color: "text-blue-500" },
      alert: { icon: AlertTriangle, color: "text-yellow-500" },
    };

  const toggleDrawer = () => setOpen((v) => !v);

  // Drawer & overlay JSX
  const drawerUI = (
    <>
      {/* Overlay */}
      <div
        onClick={toggleDrawer}
        className={`fixed inset-0 bg-black/40 dark:bg-slate-950/70 backdrop-blur-sm transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-[99]`}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-[26rem] h-screen bg-white dark:bg-gray-900 shadow-xl transition-transform duration-500 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } z-[99]`}
      >
        <header className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Notifications
          </h2>
          <button onClick={toggleDrawer} className="cursor-pointer">
            <X className="text-gray-600 dark:text-gray-300" />
          </button>
        </header>

        <main className="overflow-y-auto h-full p-4 space-y-3">
          {notifications.map(({ id, title, text, time, type }) => {
            const { icon: Icon, color } = typeStyles[type] || typeStyles.info;
            return (
              <div
                key={id}
                className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <Icon className={`${color} mt-1`} size={20} />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {text}
                  </p>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {time}
                  </span>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );

  return (
    <>
      {/* Bell button stays in header */}
      <button onClick={toggleDrawer} className="relative cursor-pointer z-60">
        <Bell size={22} className="text-gray-700 dark:text-gray-200" />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
          {notifications.length}
        </span>
      </button>

      {/* Render overlay + drawer into body */}
      {typeof window !== "undefined" && createPortal(drawerUI, document.body)}
    </>
  );
};

export default NotificationsDrawer;
