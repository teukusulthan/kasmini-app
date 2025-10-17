"use client";
import {
  Mail,
  MessageSquare,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white py-10 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="mb-2.5"
              style={{ fontSize: "1.125rem", fontWeight: 700 }}
            >
              Kasmini
            </h3>
            <p
              className="text-slate-400 mb-3 leading-relaxed"
              style={{ fontSize: "0.8125rem" }}
            >
              Pembukuan otomatis UMKM via Telegram, Google Sheets, dan n8n.
              Cepat, mudah, tanpa ribet.
            </p>
            <div className="flex gap-2.5">
              <a
                href="#"
                className="bg-white/5 hover:bg-white/10 p-1.5 rounded-lg transition-colors"
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-white/10 p-1.5 rounded-lg transition-colors"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-white/10 p-1.5 rounded-lg transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Produk */}
          <div>
            <h4
              className="mb-2.5"
              style={{ fontWeight: 600, fontSize: "0.875rem" }}
            >
              Produk
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#fitur")}
                  className="text-slate-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.8125rem" }}
                >
                  Fitur
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#cara-kerja")}
                  className="text-slate-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.8125rem" }}
                >
                  Cara Kerja
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.8125rem" }}
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Sumber Daya */}
          <div>
            <h4
              className="mb-2.5"
              style={{ fontWeight: 600, fontSize: "0.875rem" }}
            >
              Sumber Daya
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.8125rem" }}
                >
                  Dokumentasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.8125rem" }}
                >
                  Tutorial
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#testimoni")}
                  className="text-slate-400 hover:text-white transition-colors"
                  style={{ fontSize: "0.8125rem" }}
                >
                  Testimoni
                </button>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4
              className="mb-2.5"
              style={{ fontWeight: 600, fontSize: "0.875rem" }}
            >
              Kontak
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@kasmini.id"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  style={{ fontSize: "0.8125rem" }}
                >
                  <Mail className="h-3 w-3" />
                  hello@kasmini.id
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  style={{ fontSize: "0.8125rem" }}
                >
                  <MessageSquare className="h-3 w-3" />
                  Support Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2.5">
            <p className="text-slate-400" style={{ fontSize: "0.75rem" }}>
              © 2025 Kasmini. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                style={{ fontSize: "0.75rem" }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                style={{ fontSize: "0.75rem" }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
