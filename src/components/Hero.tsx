"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground className="relative overflow-hidden min-h-[60vh] bg-slate-100">
      <motion.div id="hero" className="pt-32 pb-20 z-10 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="space-y-6">
            <div>
              <h1
                className="text-[#000000] text-6xl mb-3"
                style={{ fontSize: "5 rem", fontWeight: 800, lineHeight: 1.1 }}
              >
                kasmini<span className="text-blue-400">.</span>
              </h1>
              <p
                className="text-[#3B82F6]"
                style={{ fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 }}
              >
                Pembukuan cepat, keputusan tepat.
              </p>
            </div>

            <p
              className="text-slate-600 max-w-2xl mx-auto"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
            >
              Catat penjualan lewat Telegram, otomatis masuk Google Sheets,
              hitung laba, dan kirim rekap harian/mingguan—tanpa ribet.
            </p>

            <div className="pt-2">
              <Button
                asChild
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg px-6 py-3 h-auto"
                style={{ fontSize: "1.0625rem" }}
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
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
