"use client";

import {
  MessageSquare,
  Workflow,
  TrendingUp,
  FileText,
  Users,
  Download,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Input via Telegram",
      description:
        "Catat penjualan cukup dengan chat sederhana. Tidak perlu buka aplikasi lain.",
    },
    {
      icon: Workflow,
      title: "Otomasi",
      description:
        "Workflow otomatis memproses data masuk ke Sheets dan menghitung laba real-time.",
    },
    {
      icon: TrendingUp,
      title: "Hitung Laba",
      description:
        "Laba kotor dan bersih dihitung otomatis setiap transaksi. Tidak perlu manual.",
    },
    {
      icon: FileText,
      title: "Rekap Otomatis",
      description:
        "Terima rekap penjualan harian atau mingguan langsung ke Telegram Anda.",
    },
    {
      icon: Users,
      title: "Multi-User",
      description: "Bisa digunakan untuk beberapa jenis usaha yang kamu miliki",
    },
    {
      icon: Download,
      title: "Ekspor & Integrasi",
      description:
        "Export ke CSV atau sinkronkan dengan Google Drive. Data selalu aman.",
    },
  ];

  return (
    <section id="fitur" className="py-12 px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-slate-900 mb-2"
            style={{ fontSize: "1.75rem", fontWeight: 700 }}
          >
            Fitur Utama
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto"
            style={{ fontSize: "0.9375rem" }}
          >
            Semua yang Anda butuhkan untuk pembukuan UMKM yang cepat, akurat,
            dan tanpa ribet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-5 rounded-lg border border-slate-200 hover:border-[#3B82F6] hover:shadow-md transition-all duration-300 bg-white"
              >
                <div className="bg-[#3B82F6]/5 rounded-lg p-2 w-fit mb-3 group-hover:bg-[#3B82F6]/10 transition-colors">
                  <Icon className="h-4 w-4 text-[#3B82F6]" />
                </div>
                <h3
                  className="text-slate-900 mb-1.5"
                  style={{ fontWeight: 600, fontSize: "0.9375rem" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  style={{ fontSize: "0.8125rem" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
