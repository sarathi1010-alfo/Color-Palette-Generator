"use client";

import { useState } from "react";
import { Layout, Smartphone, Globe, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface LivePreviewProps {
  colors: string[];
}

type Template = "landing" | "dashboard" | "mobile";

export function LivePreview({ colors }: LivePreviewProps) {
  const [template, setTemplate] = useState<Template>("landing");

  const primary = colors[0];
  const secondary = colors[1] || colors[0];
  const accent = colors[2] || colors[0];
  const neutral = colors[colors.length - 1];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl font-display font-bold">Visual Preview</h2>
        <div className="flex bg-surface p-1 rounded-2xl border border-border">
          <button
            onClick={() => setTemplate("landing")}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all",
              template === "landing" ? "bg-background shadow-md text-text-primary" : "text-text-secondary hover:text-text-primary"
            )}
          >
            <Globe size={14} />
            <span>Landing</span>
          </button>
          <button
            onClick={() => setTemplate("dashboard")}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all",
              template === "dashboard" ? "bg-background shadow-md text-text-primary" : "text-text-secondary hover:text-text-primary"
            )}
          >
            <Layout size={14} />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setTemplate("mobile")}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all",
              template === "mobile" ? "bg-background shadow-md text-text-primary" : "text-text-secondary hover:text-text-primary"
            )}
          >
            <Smartphone size={14} />
            <span>App</span>
          </button>
        </div>
      </div>

      <div className="aspect-video w-full rounded-[40px] border border-border bg-background overflow-hidden shadow-2xl">
        {template === "landing" && (
          <div className="h-full flex flex-col p-8 space-y-8">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: primary }} />
                <div className="w-24 h-4 rounded bg-surface" />
              </div>
              <div className="flex space-x-4">
                <div className="w-12 h-2 rounded bg-surface" />
                <div className="w-12 h-2 rounded bg-surface" />
              </div>
            </nav>
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
              <div className="space-y-3">
                <div className="h-10 w-80 rounded-full mx-auto" style={{ backgroundColor: secondary, opacity: 0.2 }} />
                <div className="h-10 w-64 rounded-full mx-auto" style={{ backgroundColor: primary }} />
              </div>
              <div className="h-4 w-96 rounded bg-surface mx-auto" />
              <div className="flex space-x-4">
                <div className="h-12 w-32 rounded-2xl" style={{ backgroundColor: primary }} />
                <div className="h-12 w-32 rounded-2xl border border-border" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 rounded-3xl bg-surface border border-border p-4 space-y-3">
                   <div className="w-8 h-8 rounded-full" style={{ backgroundColor: accent, opacity: 0.3 }} />
                   <div className="w-full h-2 rounded bg-background/50" />
                </div>
              ))}
            </div>
          </div>
        )}

        {template === "dashboard" && (
          <div className="h-full flex">
            <div className="w-20 border-r border-border p-4 flex flex-col items-center space-y-6">
               <div className="w-10 h-10 rounded-xl" style={{ backgroundColor: primary }} />
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-lg bg-surface" />
               ))}
            </div>
            <div className="flex-1 p-8 space-y-8 bg-surface/30">
               <div className="flex items-center justify-between">
                  <div className="w-48 h-8 rounded-lg bg-surface" />
                  <div className="w-10 h-10 rounded-full" style={{ backgroundColor: secondary }} />
               </div>
               <div className="grid grid-cols-3 gap-6">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-32 rounded-3xl bg-background border border-border p-6 space-y-4">
                        <div className="flex items-center justify-between">
                           <div className="w-20 h-2 rounded bg-surface" />
                           <CreditCard size={16} className="opacity-20" />
                        </div>
                        <div className="w-12 h-6 rounded bg-surface" />
                        <div className="w-full h-1 rounded overflow-hidden bg-surface">
                           <div className="h-full w-2/3" style={{ backgroundColor: i === 1 ? primary : i === 2 ? secondary : accent }} />
                        </div>
                    </div>
                  ))}
               </div>
               <div className="flex-1 rounded-3xl bg-background border border-border p-6">
                   <div className="w-full h-full flex items-end space-x-2">
                      {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-lg transition-all"
                          style={{
                            height: `${h}%`,
                            backgroundColor: i % 2 === 0 ? primary : secondary,
                            opacity: 0.8
                          }}
                        />
                      ))}
                   </div>
               </div>
            </div>
          </div>
        )}

        {template === "mobile" && (
            <div className="h-full flex items-center justify-center p-6">
                <div className="h-full aspect-[9/19] rounded-[40px] border-[8px] border-surface bg-background overflow-hidden relative shadow-xl flex flex-col">
                    <div className="h-6 w-1/2 bg-surface absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-10" />
                    <div className="p-6 pt-12 space-y-6 flex-1">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: secondary }} />
                            <div className="w-6 h-6 rounded bg-surface" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-8 w-3/4 rounded-lg bg-surface" />
                            <div className="h-4 w-1/2 rounded-lg bg-surface/50" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-square rounded-3xl bg-surface border border-border flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-2xl" style={{ backgroundColor: i % 2 === 0 ? primary : accent, opacity: 0.4 }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="h-14 w-full rounded-2xl flex items-center justify-center font-bold text-white shadow-lg" style={{ backgroundColor: primary }}>
                            Get Started
                        </div>
                        <div className="flex justify-around items-center h-10 border-t border-border pt-4">
                             {[1,2,3,4].map(i => (
                                <div key={i} className="w-5 h-5 rounded bg-surface" />
                             ))}
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
