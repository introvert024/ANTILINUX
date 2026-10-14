"use client";

import { useState } from "react";
import { Copy, Check, Download, Archive, ExternalLink, Terminal } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const installCmd = "curl -fsSL https://antilux.vercel.app/setup.sh | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-14 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gnome-surface border border-accent-neon/30 text-accent-neon text-xs font-mono font-medium shadow-md">
          <span className="w-2 h-2 rounded-full bg-accent-neon animate-ping" />
          <span>THE POST-WINDOWS REVOLUTION</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-300">Fedora 41/42 Workstation + GNOME</span>
        </div>

        {/* Big Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Ditch Windows. <br />
          <span className="bg-gradient-to-r from-fedora-light via-accent-neon to-cyan-300 bg-clip-text text-transparent">
            Build & Run in the Age of AI.
          </span>
        </h1>

        {/* Pitch */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Windows is bloated with telemetry, forced ads, and background surveillance. In an era where AI enables you to build custom micro-tools and apps in minutes, you need bare-metal POSIX speed, native GPU access, and total sovereignty over your hardware.
        </p>

        {/* Quick Command Bar */}
        <div className="max-w-xl mx-auto pt-2 space-y-3">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-gnome-surface border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-sm">
            <div className="flex items-center gap-3 px-3 py-1.5 w-full sm:w-auto text-slate-300 overflow-x-auto">
              <span className="text-accent-neon font-bold">$</span>
              <span className="select-all text-xs sm:text-sm whitespace-nowrap">{installCmd}</span>
            </div>
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 active:bg-accent-neon active:text-black text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-accent-neon" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy Script"}</span>
            </button>
          </div>

          {/* Release Download Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://github.com/introvert024/ANTILINUX/releases/download/v1.0.0/antilux-v1.0.0-fedora-installer.tar.gz"
              className="px-4 py-2 rounded-xl bg-accent-neon text-black font-bold text-xs hover:bg-white transition-all flex items-center gap-2 shadow-lg shadow-accent-neon/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Release v1.0.0 (.tar.gz)</span>
            </a>
            <a
              href="https://github.com/introvert024/ANTILINUX/releases/download/v1.0.0/antilux-v1.0.0-fedora-installer.zip"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all flex items-center gap-2 border border-white/10"
            >
              <Archive className="w-3.5 h-3.5" />
              <span>Download (.zip)</span>
            </a>
            <a
              href="https://github.com/introvert024/ANTILINUX/releases/tag/v1.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl text-slate-400 hover:text-accent-neon text-xs font-mono transition-colors flex items-center gap-1"
            >
              <span>GitHub Release</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-[12px] text-slate-500 font-mono text-center">
            Transforms any fresh or existing Fedora 41+ installation into ANTILINUX
          </p>
        </div>

        {/* Stats Grid */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-gnome-surface/60 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl font-bold font-mono text-accent-neon">920 MB</div>
            <div className="text-xs text-slate-400 mt-0.5">Idle RAM Usage (vs 4.8GB on Win 11)</div>
          </div>
          <div className="p-4 rounded-xl bg-gnome-surface/60 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl font-bold font-mono text-fedora-light">0% Spyware</div>
            <div className="text-xs text-slate-400 mt-0.5">No Recall, Ads, or Telemetry</div>
          </div>
          <div className="p-4 rounded-xl bg-gnome-surface/60 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl font-bold font-mono text-accent-cyan">Native AI</div>
            <div className="text-xs text-slate-400 mt-0.5">Ollama & CUDA/ROCm Stack Ready</div>
          </div>
          <div className="p-4 rounded-xl bg-gnome-surface/60 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl font-bold font-mono text-accent-purple">Atomic GNOME</div>
            <div className="text-xs text-slate-400 mt-0.5">Pop Dynamic Auto-Tiling & Glass UI</div>
          </div>
        </div>

      </div>
    </section>
  );
}
