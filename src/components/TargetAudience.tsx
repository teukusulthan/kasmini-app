"use client";

import { Coffee, ShoppingBag, Home, Users } from "lucide-react";

export function TargetAudience() {
  const audiences = [
    {
      icon: Coffee,
      title: "Warung & Kafe",
      painPoint: "Sibuk melayani, lupa catat penjualan.",
      solution: "Catat via chat saat ada waktu luang.",
    },
    {
      icon: ShoppingBag,
      title: "Toko Online",
      painPoint: "Orderan banyak, pencatatan manual ribet.",
      solution: "Input cepat, data langsung terorganisir.",
    },
    {
      icon: Home,
      title: "Jasa Rumahan",
      painPoint: "Sulit pantau laba setiap hari.",
      solution: "Laba otomatis dihitung real-time.",
    },
    {
      icon: Users,
      title: "Komunitas/UKM",
      painPoint: "Banyak anggota, perlu akses bersama.",
      solution: "Multi-user dengan peran yang jelas.",
    },
  ];

  return (
    <section className="py-12 px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-slate-900 mb-2"
            style={{ fontSize: "1.75rem", fontWeight: 700 }}
          >
            Untuk Siapa?
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto"
            style={{ fontSize: "0.9375rem" }}
          >
            Kasmini dirancang khusus untuk pemilik UMKM yang ingin fokus ke
            bisnis, bukan pembukuan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#10B981] hover:shadow-md transition-all duration-300"
              >
                <div className="bg-[#10B981]/10 rounded-lg p-2 w-fit mb-3">
                  <Icon className="h-4 w-4 text-[#10B981]" />
                </div>
                <h3
                  className="text-slate-900 mb-2.5"
                  style={{ fontWeight: 600, fontSize: "0.875rem" }}
                >
                  {audience.title}
                </h3>
                <div className="space-y-2">
                  <div>
                    <p
                      className="text-slate-500 mb-0.5"
                      style={{ fontSize: "0.6875rem", fontWeight: 500 }}
                    >
                      Masalah:
                    </p>
                    <p
                      className="text-slate-600"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {audience.painPoint}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#10B981] mb-0.5"
                      style={{ fontSize: "0.6875rem", fontWeight: 500 }}
                    >
                      Solusi:
                    </p>
                    <p
                      className="text-slate-700"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {audience.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
