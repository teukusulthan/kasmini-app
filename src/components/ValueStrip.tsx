"use client";

import { Clock, BarChart3, Sheet, Zap } from "lucide-react";

export function ValueStrip() {
  const values = [
    {
      icon: Clock,
      title: "Hemat 5–10 jam/minggu",
      description: "Otomasi pencatatan",
    },
    {
      icon: BarChart3,
      title: "Rekap otomatis",
      description: "Harian & mingguan",
    },
    {
      icon: Sheet,
      title: "Data rapi di Google Sheets",
      description: "Familiar & mudah diakses",
    },
  ];

  return (
    <section className="py-10 px-8 lg:px-16 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2.5"
              >
                <div className="bg-[#3B82F6]/10 rounded-lg p-2.5">
                  <Icon className="h-5 w-5 text-[#3B82F6]" />
                </div>
                <div>
                  <p
                    className="text-white"
                    style={{ fontWeight: 600, fontSize: "0.875rem" }}
                  >
                    {value.title}
                  </p>
                  <p
                    className="text-slate-400 mt-0.5"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
