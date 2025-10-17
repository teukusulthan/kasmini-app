"use client";

import { Button } from "./ui/button";
import Link from "next/link";
export function FinalCTA() {
  return (
    <section className="py-12 px-8 lg:px-16 bg-gradient-to-br from-[#0F172A] to-[#15213e]">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-white mb-3"
          style={{ fontSize: "1.875rem", fontWeight: 800 }}
        >
          Mulai otomatis hari ini.
        </h2>
        <p
          className="text-slate-300 max-w-2xl mx-auto mb-6"
          style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
        >
          Butuh 10 menit untuk setup. Coba gratis, tanpa kartu kredit.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button
            asChild
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg px-5 py-2.5 h-auto"
          >
            <Link
              href="https://t.me/kasmini_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coba Gratis
            </Link>
          </Button>
        </div>

        {/* Why Kasmini */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <p
              className="text-white mb-0.5"
              style={{ fontWeight: 600, fontSize: "0.8125rem" }}
            >
              Input cukup lewat chat
            </p>
            <p className="text-slate-400" style={{ fontSize: "0.6875rem" }}>
              Tidak perlu buka banyak aplikasi
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <p
              className="text-white mb-0.5"
              style={{ fontWeight: 600, fontSize: "0.8125rem" }}
            >
              Laba kotor & bersih otomatis
            </p>
            <p className="text-slate-400" style={{ fontSize: "0.6875rem" }}>
              Real-time setiap transaksi
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <p
              className="text-white mb-0.5"
              style={{ fontWeight: 600, fontSize: "0.8125rem" }}
            >
              Rekap harian
            </p>
            <p className="text-slate-400" style={{ fontSize: "0.6875rem" }}>
              Langsung ke Telegram
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <p
              className="text-white mb-0.5"
              style={{ fontWeight: 600, fontSize: "0.8125rem" }}
            >
              Integrasi Google Sheets
            </p>
            <p className="text-slate-400" style={{ fontSize: "0.6875rem" }}>
              Fleksibel & mudah dikustomisasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
