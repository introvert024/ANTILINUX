"use client";

import { useState } from "react";
import { Copy, Check, Terminal, Sparkles } from "lucide-react";

export default function ScriptGenerator() {
  const [opts, setOpts] = useState({
    gnome: true,
    ollama: true,
    dev: true,
    gaming: false,
    office: false,
    speed: true,
  });

  const [copied, setCopied] = useState(false);

  const toggle = (key: keyof typeof opts) => {
    setOpts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const generateCommand = () => {
    const flags: string[] = [];
    if (!opts.gnome) flags.push("--no-gnome");
    if (!opts.ollama) flags.push("--no-ai");
    if (!opts.dev) flags.push("--minimal-dev");
    if (opts.gaming) flags.push("--with-gaming");
    if (opts.office) flags.push("--with-office");
    if (opts.speed) flags.push("--fast-mirrors");

    if (flags.length === 0) {
      return "curl -fsSL https://antilux.vercel.app/setup.sh | bash";
    }
    return `curl -fsSL https://antilux.vercel.app/setup.sh | bash -s -- ${flags.join(" ")}`;
  };

  const cmd = generateCommand();

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="generator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent-neon/20 text-accent-neon border border-accent-neon/30 font-mono text-xs">
          CUSTOM COMPONENT SELECTOR
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Generate Your Custom Bootstrap Script
        </h2>
        <p className="text-slate-400 font-light">
          Choose the components you want and get a custom setup command tailored for your workstation.
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-gnome-surface border border-white/10 shadow-2xl space-y-8">
        
        {/* Checkbox Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          <label className="flex items-start gap-3 p-3.5 rounded-xl bg-gnome-card/60 border border-white/5 cursor-pointer hover:border-white/20 transition-all select-none">
            <input
              type="checkbox"
              checked={opts.gnome}
              onChange={() => toggle("gnome")}
              className="mt-1 rounded text-accent-neon focus:ring-0"
            />
            <div>
              <div className="text-sm font-semibold text-white">Curated GNOME Theme</div>
              <div className="text-xs text-slate-400">Dark glass, Pop tiling, Dash-to-dock</div>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3.5 rounded-xl bg-gnome-card/60 border border-white/5 cursor-pointer hover:border-white/20 transition-all select-none">
            <input
              type="checkbox"
              checked={opts.ollama}
              onChange={() => toggle("ollama")}
              className="mt-1 rounded text-accent-neon focus:ring-0"
            />
            <div>
              <div className="text-sm font-semibold text-white">Local AI Runtime (Ollama)</div>
              <div className="text-xs text-slate-400">Pre-download Llama 3 & DeepSeek Coder</div>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3.5 rounded-xl bg-gnome-card/60 border border-white/5 cursor-pointer hover:border-white/20 transition-all select-none">
            <input
              type="checkbox"
              checked={opts.dev}
              onChange={() => toggle("dev")}
              className="mt-1 rounded text-accent-neon focus:ring-0"
            />
            <div>
              <div className="text-sm font-semibold text-white">Full Dev Toolchain</div>
              <div className="text-xs text-slate-400">Git, Python 3, Node LTS, Rust, Podman</div>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3.5 rounded-xl bg-gnome-card/60 border border-white/5 cursor-pointer hover:border-white/20 transition-all select-none">
            <input
              type="checkbox"
              checked={opts.gaming}
              onChange={() => toggle("gaming")}
              className="mt-1 rounded text-accent-neon focus:ring-0"
            />
            <div>
              <div className="text-sm font-semibold text-white">Proton Gaming Pack</div>
              <div className="text-xs text-slate-400">Steam, Vulkan shaders, Wine-GE</div>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3.5 rounded-xl bg-gnome-card/60 border border-white/5 cursor-pointer hover:border-white/20 transition-all select-none">
            <input
              type="checkbox"
              checked={opts.office}
              onChange={() => toggle("office")}
              className="mt-1 rounded text-accent-neon focus:ring-0"
            />
            <div>
              <div className="text-sm font-semibold text-white">Productivity Apps</div>
              <div className="text-xs text-slate-400">VS Code OSS, Obsidian, OnlyOffice</div>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3.5 rounded-xl bg-gnome-card/60 border border-white/5 cursor-pointer hover:border-white/20 transition-all select-none">
            <input
              type="checkbox"
              checked={opts.speed}
              onChange={() => toggle("speed")}
              className="mt-1 rounded text-accent-neon focus:ring-0"
            />
            <div>
              <div className="text-sm font-semibold text-white">DNF 10x Turbo Mirrors</div>
              <div className="text-xs text-slate-400">Fastest mirror & parallel downloads</div>
            </div>
          </label>

        </div>

        {/* Command Display */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>RUN THIS ON FEDORA TERMINAL:</span>
            <span className="text-accent-neon flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Dynamic Script Ready
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-gnome-darker border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto w-full select-all">
              <span className="text-accent-neon font-bold">$ </span>
              <span>{cmd}</span>
            </div>
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-accent-neon text-black font-mono font-bold text-xs hover:bg-white transition-all flex items-center justify-center gap-2 shrink-0"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copied!" : "Copy Command"}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
