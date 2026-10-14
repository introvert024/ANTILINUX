"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gnome-darker/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fedora to-accent-neon p-[2px] shadow-lg shadow-fedora/25 group-hover:shadow-accent-neon/30 transition-all">
            <div className="w-full h-full bg-gnome-darker rounded-[10px] flex items-center justify-center font-mono font-bold text-lg text-accent-neon">
              ⏻
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-wider text-white flex items-center gap-1.5">
              ANTI<span className="text-accent-neon">LINUX</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-fedora/30 text-fedora-light border border-fedora/40 font-mono font-medium">
                FEDORA
              </span>
            </span>
            <span className="text-[11px] text-slate-400 font-mono tracking-tight">ai-native workstation</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#philosophy" className="hover:text-accent-neon transition-colors">Philosophy</a>
          <a href="#features" className="hover:text-accent-neon transition-colors">Specs</a>
          <a href="#releases" className="hover:text-accent-neon transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-neon animate-pulse" />
            Releases
          </a>
          <a href="#terminal" className="hover:text-accent-neon transition-colors">Shell</a>
          <a href="#comparison" className="hover:text-accent-neon transition-colors">vs. Windows</a>
          <a href="#generator" className="hover:text-accent-neon transition-colors">Installer</a>
          <a href="#migration" className="hover:text-accent-neon transition-colors">Switch Guide</a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/introvert024/ANTILINUX"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 text-white text-sm font-medium flex items-center gap-2 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="#releases"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-fedora to-accent-neon text-black font-bold text-sm shadow-lg shadow-accent-neon/20 hover:shadow-accent-neon/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            <span>Install</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-gnome-surface border-b border-white/10 space-y-3 font-medium text-slate-200">
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-accent-neon"
          >
            Philosophy
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-accent-neon"
          >
            Specs
          </a>
          <a
            href="#releases"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-accent-neon text-accent-neon"
          >
            Releases v1.0.0
          </a>
          <a
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-accent-neon"
          >
            Live Shell
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-accent-neon"
          >
            vs. Windows 11
          </a>
          <a
            href="#generator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-accent-neon"
          >
            Custom Installer
          </a>
          <a
            href="#migration"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-accent-neon"
          >
            Switch Guide
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://github.com/introvert024/ANTILINUX"
              target="_blank"
              className="py-2.5 rounded-xl bg-white/10 text-white font-medium text-center flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
