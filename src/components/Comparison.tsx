"use client";
import { Check, X } from "lucide-react";

export function Comparison() {
  const comparisons = [
    {
      feature: "Setup",
      kasmini: "≤ 10 menit",
      manual: "—",
      complex: "1-2 hari",
      kasminiIcon: true,
      manualIcon: false,
      complexIcon: false,
    },
    {
      feature: "Biaya",
      kasmini: "Mulai Rp 0",
      manual: "Gratis (waktu mahal)",
      complex: "Rp 100k+/bulan",
      kasminiIcon: true,
      manualIcon: false,
      complexIcon: false,
    },
    {
      feature: "Pakai Google Sheets",
      kasmini: true,
      manual: true,
      complex: false,
      kasminiIcon: true,
      manualIcon: true,
      complexIcon: false,
    },
    {
      feature: "Rekap Otomatis",
      kasmini: true,
      manual: false,
      complex: true,
      kasminiIcon: true,
      manualIcon: false,
      complexIcon: true,
    },
    {
      feature: "Tanpa Training Berat",
      kasmini: true,
      manual: true,
      complex: false,
      kasminiIcon: true,
      manualIcon: true,
      complexIcon: false,
    },
  ];

  const renderCell = (value: boolean | string, icon: boolean) => {
    if (typeof value === "boolean") {
      return icon ? (
        <Check className="h-5 w-5 text-[#10B981] mx-auto" />
      ) : (
        <X className="h-5 w-5 text-slate-300 mx-auto" />
      );
    }
    return <span className="text-slate-700">{value}</span>;
  };

  return (
    <section className="py-12 px-8 lg:px-16 bg-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-slate-900 mb-2"
            style={{ fontSize: "1.75rem", fontWeight: 700 }}
          >
            Perbandingan
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto"
            style={{ fontSize: "0.9375rem" }}
          >
            Lihat bagaimana Kasmini lebih cepat, mudah, dan ekonomis dibanding
            metode lain.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th
                    className="text-left p-3 text-slate-900"
                    style={{ fontWeight: 600, fontSize: "0.8125rem" }}
                  >
                    Fitur
                  </th>
                  <th className="p-3 bg-[#3B82F6]/5">
                    <div
                      className="text-[#3B82F6]"
                      style={{ fontWeight: 700, fontSize: "0.875rem" }}
                    >
                      Kasmini
                    </div>
                  </th>
                  <th
                    className="p-3 text-slate-600"
                    style={{ fontWeight: 600, fontSize: "0.8125rem" }}
                  >
                    Manual
                  </th>
                  <th
                    className="p-3 text-slate-600"
                    style={{ fontWeight: 600, fontSize: "0.8125rem" }}
                  >
                    Aplikasi Kompleks
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td
                      className="p-3 text-slate-700"
                      style={{ fontWeight: 500, fontSize: "0.75rem" }}
                    >
                      {row.feature}
                    </td>
                    <td
                      className="p-3 text-center bg-[#3B82F6]/5"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {renderCell(row.kasmini, row.kasminiIcon)}
                    </td>
                    <td
                      className="p-3 text-center"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {renderCell(row.manual, row.manualIcon)}
                    </td>
                    <td
                      className="p-3 text-center"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {renderCell(row.complex, row.complexIcon)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
