"use client";

import { Download, Archive, FileCode, ExternalLink, ShieldCheck } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ReleasesSection() {
  const assets = [
    {
      badge: "Linux Native",
      badgeColor: "bg-fedora/30 text-fedora-light border-fedora/40",
      size: "4.3 KB",
      name: "antilux-v1.0.0-fedora-installer.tar.gz",
      desc: "Complete bundle with automated installer, GNOME preset dconf profiles, and Starship configs.",
      url: "https://github.com/introvert024/ANTILINUX/releases/download/v1.0.0/antilux-v1.0.0-fedora-installer.tar.gz",
      btnText: "Download .tar.gz",
      btnClass: "bg-accent-neon text-black hover:bg-white",
      icon: Download,
      sha: "339ed34b79b9ddc311551b510cb0cf6b1a1ebfea5cb63a3ffab4b410b299b115",
    },
    {
      badge: "Universal Zip",
      badgeColor: "bg-accent-purple/30 text-accent-purple border-accent-purple/40",
      size: "4.9 KB",
      name: "antilux-v1.0.0-fedora-installer.zip",
      desc: "Portable zip archive suitable for transferring via Windows or offline USB storage.",
      url: "https://github.com/introvert024/ANTILINUX/releases/download/v1.0.0/antilux-v1.0.0-fedora-installer.zip",
      btnText: "Download .zip",
      btnClass: "bg-white/10 hover:bg-white/20 text-white border border-white/10",
      icon: Archive,
      sha: "cb7eca391590ccebc153e91291d11b41a2c4bae924e287e6435eeee688de6478",
    },
    {
      badge: "Single Script",
      badgeColor: "bg-accent-cyan/30 text-accent-cyan border-accent-cyan/40",
      size: "6.1 KB",
      name: "setup.sh",
      desc: "Direct shell script to audit, install RPMs, setup Ollama AI, and apply GNOME presets in one go.",
      url: "https://github.com/introvert024/ANTILINUX/releases/download/v1.0.0/setup.sh",
      btnText: "Download Script",
      btnClass: "bg-white/10 hover:bg-white/20 text-white border border-white/10",
      icon: FileCode,
      sha: "d83ba1c5053fe4138bd4e63151776e6f28374dfafcfebff51fb7b0d85743c291",
    },
  ];

  return (
    <section id="releases" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent-neon/20 text-accent-neon border border-accent-neon/30 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-accent-neon animate-pulse" />
          OFFICIAL GITHUB RELEASES
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Download ANTILINUX v1.0.0</h2>
        <p className="text-slate-400 font-light">
          Download verified standalone release bundles to install ANTILINUX offline or on existing Fedora 41/42 machines.
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-gnome-surface border border-white/10 shadow-2xl space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-accent-neon text-black font-mono font-bold text-xs">
                LATEST STABLE
              </span>
              <span className="text-xl font-bold text-white">v1.0.0 — Fedora AI Workstation Edition</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Published on GitHub Releases • Cryptographically Verified SHA256
            </p>
          </div>
          <a
            href="https://github.com/introvert024/ANTILINUX/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-accent-neon text-white hover:text-accent-neon text-xs font-mono flex items-center gap-2 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Release on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assets.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-gnome-card/70 border border-white/10 hover:border-accent-neon/50 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-mono border ${a.badgeColor}`}>
                      {a.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{a.size}</span>
                  </div>
                  <h4 className="text-base font-bold text-white truncate" title={a.name}>
                    {a.name}
                  </h4>
                  <p className="text-xs text-slate-400">{a.desc}</p>
                </div>
                <div className="space-y-3 pt-3 border-t border-white/5">
                  <a
                    href={a.url}
                    className={`w-full py-2.5 rounded-xl font-mono font-bold text-xs transition-all flex items-center justify-center gap-2 ${a.btnClass}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{a.btnText}</span>
                  </a>
                  <div
                    className="text-[10px] text-slate-500 font-mono truncate"
                    title={`SHA256: ${a.sha}`}
                  >
                    SHA: {a.sha.slice(0, 24)}...
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification & Install Box */}
        <div className="p-5 rounded-2xl bg-gnome-darker border border-white/5 space-y-3">
          <div className="text-xs font-mono text-slate-400">HOW TO INSTALL FROM DOWNLOADED RELEASE:</div>
          <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-1">
            <div><span className="text-slate-500"># 1. Unpack the release archive</span></div>
            <div><span className="text-accent-neon">$</span> tar -xzvf antilux-v1.0.0-fedora-installer.tar.gz</div>
            <div><span className="text-slate-500"># 2. Make executable and run</span></div>
            <div><span className="text-accent-neon">$</span> chmod +x setup.sh && ./setup.sh</div>
          </div>
        </div>

      </div>
    </section>
  );
}
