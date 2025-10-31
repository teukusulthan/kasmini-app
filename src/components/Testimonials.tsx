"use client";

import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "M Hasbianur",
      business: "Warung Kopi Seduh",
      avatar:
        "https://images.unsplash.com/photo-1573496800808-56566a492b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZW50cmVwcmVuZXVyfGVufDF8fHx8MTc2MDU5NTc5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Sejak pakai Kasmini, saya hemat 2 jam sehari. Tidak perlu lagi catat manual di buku, semua otomatis tercatat dan dikirimin rekapannya.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      business: "Toko Kelontong Jaya",
      avatar:
        "https://images.unsplash.com/photo-1627230868261-59051f3e5de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjb2ZmZWUlMjBzaG9wJTIwb3duZXJ8ZW58MXx8fHwxNzYwNTk1NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Setup gasampe 5 menitt, langsung jalan. Sekarang setiap hari dapat laporan laba bersih yang udah rapi tanpa hitung-hitung lagi.",
      rating: 5,
    },
    {
      name: "Alvin Rikardo",
      business: "Catering Rumahan Berkah",
      avatar:
        "https://images.unsplash.com/photo-1594402918464-2d7bb2e97292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBjYWZlfGVufDF8fHx8MTc2MDU5NTc5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Awalnya skeptis pakai bot, ternyata lebih praktis dari aplikasi lain.  mudah pakai, tinggal kirim chat ke Telegram.",
      rating: 5,
    },
  ];

  return (
    <section id="testimoni" className="py-12 px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-slate-900 mb-2"
            style={{ fontSize: "1.75rem", fontWeight: 700 }}
          >
            Dipercaya Ribuan UMKM
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto"
            style={{ fontSize: "0.9375rem" }}
          >
            Dengar langsung dari pemilik usaha yang sudah merasakan manfaat
            Kasmini.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-5 border border-slate-200 hover:border-[#3B82F6] hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[#FCD34D] text-[#FCD34D]"
                  />
                ))}
              </div>

              <p
                className="text-slate-700 mb-4 leading-relaxed"
                style={{ fontSize: "0.8125rem" }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-200">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-slate-900"
                    style={{ fontWeight: 600, fontSize: "0.8125rem" }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-slate-600"
                    style={{ fontSize: "0.6875rem" }}
                  >
                    {testimonial.business}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
