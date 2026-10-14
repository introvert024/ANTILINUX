"use client";

import { LayoutGrid, Cpu, Terminal, Boxes, Gamepad2, Zap } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Terminal,
      color: "text-accent-cyan bg-accent-cyan/20",
      title: "Flow Launcher [Alt + Space]",
      desc: "Native Linux port of Flow Launcher (.NET 8 + Avalonia UI) by introvert024. Press Alt+Space for spotlight app search, calculator, AI prompts, and GitHub jump.",
    },
    {
      icon: Boxes,
      color: "text-accent-purple bg-accent-purple/20",
      title: "WSA Subsystem for Android",
      desc: "Windows Subsystem for Android (wsa-linux) pre-installed out of the box! Run mobile Android apps natively with KVM VirtIO 3D GPU acceleration and Aurora Store.",
    },
    {
      icon: LayoutGrid,
      color: "text-fedora-light bg-fedora/20",
      title: "Auto-Tiling GNOME",
      desc: "Pre-integrated with Pop Shell dynamic tiling. Enjoy automatic window splitting and multi-monitor management with butter-smooth Wayland gestures.",
    },
    {
      icon: Cpu,
      color: "text-accent-neon bg-accent-neon/20",
      title: "Out-of-Box Local AI",
      desc: "Ollama runs as a background systemd daemon. Pull and run DeepSeek Coder, Llama 3, or Qwen with direct GPU pass-through in seconds.",
    },
    {
      icon: Gamepad2,
      color: "text-fedora-light bg-fedora-light/20",
      title: "Gaming Ready (Proton)",
      desc: "Steam with Proton and Wine-GE ready to roll. Play 95%+ of Windows games with native Vulkan shaders and zero Windows stutter.",
    },
    {
      icon: Zap,
      color: "text-accent-warning bg-accent-warning/20",
      title: "10x DNF & Atomic ZRAM",
      desc: "Optimized parallel DNF mirrors and compressed ZRAM memory swapping enabled by default to effortlessly handle multi-billion parameter LLMs.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-fedora/20 text-fedora-light border border-fedora/30 font-mono text-xs">
          WORKSTATION ARCHITECTURE
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Engineered for Focus & Power</h2>
        <p className="text-slate-400 font-light">
          A rock-solid Fedora base paired with a curated developer GNOME desktop and the ultimate AI toolkit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gnome-surface border border-white/10 hover:border-accent-neon/40 transition-all group space-y-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
