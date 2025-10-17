"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Fitur", href: "#fitur" },
    { name: "Cara Kerja", href: "#cara-kerja" },
    { name: "Demo", href: "#demo" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className="text-lg text-[#0F172A]"
              style={{ fontWeight: 700 }}
            >
              kasmini.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-600 hover:text-[#0F172A] transition-colors"
                style={{ fontSize: "0.8125rem" }}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#hero")}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg px-4 py-1.5 h-auto"
              style={{ fontSize: "0.8125rem" }}
            >
              Coba Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#0F172A]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0F172A]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-600 hover:text-[#0F172A] transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  scrollToSection("#hero");
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg w-full"
              >
                Coba Gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
