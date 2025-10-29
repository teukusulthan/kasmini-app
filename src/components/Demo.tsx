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
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 w-full max-w-[22rem] sm:max-w-md md:max-w-lg mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-slate-100 rounded-xl p-3 sm:p-4">
              <p className="text-slate-700 text-sm sm:text-base break-words">
                jual kopi 3
              </p>
              <p className="text-slate-500 mt-1 text-xs sm:text-sm">10:23 AM</p>
            </div>

            <div className="bg-[#3B82F6] text-white rounded-xl p-3 sm:p-4 sm:ml-12 ml-6">
              <p className="text-sm sm:text-base">✓ Transaksi tercatat</p>
              <div className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1 text-sm sm:text-base">
                <p>Total: Rp 45.000</p>
                <p>Modal: Rp 21.000</p>
                <p>Untung: Rp 24.000</p>
              </div>
              <p className="mt-1 opacity-90 text-xs sm:text-sm">10:23 AM</p>
            </div>

            <div className="bg-slate-100 rounded-xl p-3 sm:p-4">
              <p className="text-slate-700 text-sm sm:text-base break-words">
                jual nasi goreng 2
              </p>
              <p className="text-slate-500 mt-1 text-xs sm:text-sm">11:45 AM</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Rekap Harian",
      description: "Terima ringkasan penjualan setiap hari",
      content: (
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 w-full max-w-[22rem] sm:max-w-md md:max-w-lg mx-auto">
          <div className="bg-[#3B82F6] text-white rounded-xl p-4 sm:p-6">
            <h3 className="font-semibold text-base sm:text-lg">
              📊 Rekap Harian - 16 Okt 2025
            </h3>
            <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              <p>Total Penjualan: Rp 106.000</p>
              <p>Total Modal: Rp 47.000</p>
              <p>Total Untung: Rp 59.000</p>
              <p className="mt-3 sm:mt-4">Transaksi: 10 items</p>
              <p>Produk Terlaris: Kopi (3 unit)</p>
            </div>
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
              <p className="opacity-90 text-xs sm:text-sm">
                Dikirim otomatis setiap hari pukul 6:00
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="demo"
      className="py-10 sm:py-12 pt-16 sm:pt-20 px-4 sm:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-slate-900 mb-2 text-xl sm:text-2xl font-bold">
            Demo &amp; Preview
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Lihat bagaimana Kasmini bekerja dalam kehidupan nyata.
          </p>
        </div>

        <div className="relative">
          <div className="bg-slate-50 rounded-lg p-4 sm:p-5 border border-slate-200">
            <div className="text-center mb-3 sm:mb-4">
              <h3 className="text-slate-900 mb-1 font-semibold text-sm sm:text-base">
                {slides[currentSlide].title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Konten: tinggi adaptif agar tidak terlalu kosong di mobile */}
            <div className="min-h-[220px] sm:min-h-[300px] md:min-h-[340px] flex items-center justify-center">
              {slides[currentSlide].content}
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mt-4 sm:mt-5">
              <Button
                variant="outline"
                onClick={prevSlide}
                className="rounded-lg h-auto py-1.5 px-3 text-xs sm:text-sm"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-3.5 w-3.5 mr-1" />
                Sebelumnya
              </Button>

              {/* Dots: lebih besar di mobile agar mudah diklik */}
              <div className="flex items-center gap-1.5 sm:gap-2 mx-auto sm:mx-0 order-last sm:order-none">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                    className={`h-2.5 w-2.5 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-[#3B82F6] w-6 sm:w-8"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextSlide}
                className="rounded-lg h-auto py-1.5 px-3 text-xs sm:text-sm"
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
