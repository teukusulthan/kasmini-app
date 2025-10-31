"use client";

import {
  Settings,
  MessageSquare,
  BarChart3,
  ArrowRight,
  File,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Settings,
      title: "Daftar Kasmini",
      description:
        "Klik 'Coba Gratis' lalu klik start dan ketik nama bisnismu.",
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Catat Penjualan",
      description:
        'Tambahkan produk dan kirim pesan sederhana seperti "jual nasi goreng 2" ke bot Telegram.',
    },
    {
      number: "03",
      icon: File,
      title: "Terima Rekap",
      description:
        "Dapatkan rekap penjualan harian dalam bentuk pdf otomatis di Telegram.",
    },
  ];

  return (
    <section id="cara-kerja" className="py-12 pt-20 px-8 lg:px-16 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-slate-900 mb-2"
            style={{ fontSize: "1.75rem", fontWeight: 700 }}
          >
            Cara Kerja
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto"
            style={{ fontSize: "0.9375rem" }}
          >
            Tiga langkah sederhana untuk mulai otomasi pembukuan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm h-full">
                  <div
                    className="text-[#3B82F6]/20 mb-2.5"
                    style={{ fontSize: "1.5rem", fontWeight: 800 }}
                  >
                    {step.number}
                  </div>
                  <div className="bg-[#3B82F6]/5 rounded-lg p-2 w-fit mb-3">
                    <Icon className="h-4 w-4 text-[#3B82F6]" />
                  </div>
                  <h3
                    className="text-slate-900 mb-1.5"
                    style={{ fontWeight: 600, fontSize: "0.9375rem" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-slate-600 leading-relaxed"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2.5 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Flow Diagram */}
        <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 bg-[#3B82F6]/5 px-3 py-2 rounded-lg border border-[#3B82F6]/20">
              <MessageSquare className="h-4 w-4 text-[#3B82F6]" />
              <span
                className="text-slate-900"
                style={{ fontWeight: 600, fontSize: "0.8125rem" }}
              >
                Telegram
              </span>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400 rotate-90 md:rotate-0" />
            <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg border border-purple-200">
              <Settings className="h-4 w-4 text-purple-600" />
              <span
                className="text-slate-900"
                style={{ fontWeight: 600, fontSize: "0.8125rem" }}
              >
                Kalkulasi
              </span>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400 rotate-90 md:rotate-0" />

            <div className="flex items-center gap-2 bg-[#3B82F6]/5 px-3 py-2 rounded-lg border border-[#3B82F6]/20">
              <File className="h-4 w-4 text-[#3B82F6]" />
              <span
                className="text-slate-900"
                style={{ fontWeight: 600, fontSize: "0.8125rem" }}
              >
                Rekap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
