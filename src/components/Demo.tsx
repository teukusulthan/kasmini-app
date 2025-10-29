"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export function Demo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Chat Telegram",
      description: "Input penjualan cukup dengan chat sederhana",
      content: (
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <div className="space-y-4">
            <div className="bg-slate-100 rounded-xl p-4">
              <p className="text-slate-700">jual kopi 3</p>
              <p
                className="text-slate-500 mt-1"
                style={{ fontSize: "0.875rem" }}
              >
                10:23 AM
              </p>
            </div>
            <div className="bg-[#3B82F6] text-white rounded-xl p-4 ml-12">
              <p>✓ Transaksi tercatat</p>
              <p className="mt-2">Total: Rp 45.000</p>
              <p>Modal: Rp 21.000</p>
              <p>Untung: Rp 24.000</p>
              <p className="mt-1 opacity-90" style={{ fontSize: "0.875rem" }}>
                10:23 AM
              </p>
            </div>
            <div className="bg-slate-100 rounded-xl p-4">
              <p className="text-slate-700">jual nasi goreng 2</p>
              <p
                className="text-slate-500 mt-1"
                style={{ fontSize: "0.875rem" }}
              >
                11:45 AM
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Rekap Harian",
      description: "Terima ringkasan penjualan setiap hari",
      content: (
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <div className="bg-[#3B82F6] text-white rounded-xl p-6">
            <h3 style={{ fontWeight: 600, fontSize: "1.125rem" }}>
              📊 Rekap Harian - 16 Okt 2025
            </h3>
            <div className="mt-4 space-y-2">
              <p>Total Penjualan: Rp 106.000</p>
              <p>Total Modal: Rp 47.000</p>
              <p>Total Untung: Rp 59.000</p>
              <p className="mt-4">Transaksi: 10 items</p>
              <p>Produk Terlaris: Kopi (3 unit)</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="opacity-90" style={{ fontSize: "0.875rem" }}>
                Dikirim otomatis setiap hari pukul 6:00
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="demo" className="py-12 pt-20 px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-slate-900 mb-2"
            style={{ fontSize: "1.75rem", fontWeight: 700 }}
          >
            Demo & Preview
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto"
            style={{ fontSize: "0.9375rem" }}
          >
            Lihat bagaimana Kasmini bekerja dalam kehidupan nyata.
          </p>
        </div>

        <div className="relative">
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <div className="text-center mb-4">
              <h3
                className="text-slate-900 mb-1"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              >
                {slides[currentSlide].title}
              </h3>
              <p className="text-slate-600" style={{ fontSize: "0.8125rem" }}>
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="min-h-[300px] flex items-center justify-center">
              {slides[currentSlide].content}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-5">
              <Button
                variant="outline"
                onClick={prevSlide}
                className="rounded-lg h-auto py-1.5 px-3"
                style={{ fontSize: "0.8125rem" }}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-3.5 w-3.5 mr-1" />
                Sebelumnya
              </Button>

              <div className="flex gap-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-[#3B82F6] w-5"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextSlide}
                className="rounded-lg h-auto py-1.5 px-3"
                style={{ fontSize: "0.8125rem" }}
                disabled={currentSlide === slides.length - 1}
              >
                Selanjutnya
                <ChevronRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
