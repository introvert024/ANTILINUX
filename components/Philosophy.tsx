"use client";

import { XCircle, CheckCircle, Cpu, ShieldCheck } from "lucide-react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-fedora/20 text-fedora-light border border-fedora/30 font-mono text-xs">
            THE PARADIGM SHIFT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Why Windows Makes Zero Sense in the Age of AI
          </h2>
          <div className="space-y-4 text-slate-300 font-light leading-relaxed">
            <p>
              For decades, Windows trapped developers and creators into closed binaries, registry locks, subscription-based utility bloatware, and invasive telemetry services.
            </p>
            <p>
              <strong className="text-white font-semibold">Today, code is the executable.</strong> With coding LLMs and AI autonomous agents, you no longer need to download shady freeware or pay monthly fees for trivial tools. If you need a PDF organizer, an audio transcriber, an image batch processor, or an automation daemon, you prompt it into existence in seconds.
            </p>
            <p>
              Linux is the unencumbered home for this new paradigm. It delivers direct POSIX kernel calls, unhindered GPU tensor access without WSL2 hypervisor overhead, lightweight container runtimes, and total hardware control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-gnome-surface border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-accent-danger font-semibold text-sm">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>The Windows Trap</span>
              </div>
              <p className="text-xs text-slate-400">
                Closed apps, \$20/mo subscriptions, start menu advertisements, and Windows Recall silently screenshotting your private code.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gnome-surface border border-accent-neon/20 space-y-2">
              <div className="flex items-center gap-2 text-accent-neon font-semibold text-sm">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>The ANTILINUX Freedom</span>
              </div>
              <p className="text-xs text-slate-400">
                Generate micro-tools on demand with local Ollama/Claude, run natively in 1ms with 0 telemetry and 100% private execution.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-gnome-surface to-gnome-card border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-fedora/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-accent-neon animate-pulse" />
              <span className="font-mono text-sm font-semibold text-white">ANTILINUX AI Stack in Action</span>
            </div>
            <span className="text-xs font-mono text-slate-400">Fedora 41 Wayland</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-gnome-darker/80 border border-white/5 text-slate-300">
              <span className="text-slate-500"># 1. Prompt your offline local model</span>
              <br />
              <span className="text-accent-neon">$</span> antilux ai prompt &quot;Build zero-latency microphone audio transcriber with whisper.cpp&quot;
            </div>
            <div className="p-3 rounded-xl bg-fedora-dark/40 border border-fedora/30 text-fedora-light">
              <span className="text-accent-cyan">✓</span> Generated: transcribing-agent.py (38 lines)
              <br />
              <span className="text-accent-cyan">✓</span> Linked: pipewire & libwhisper native C bindings
              <br />
              <span className="text-accent-cyan">✓</span> Execution Time: 0.03s (Direct kernel memory, 0 WSL overhead)
            </div>
            <div className="p-3 rounded-xl bg-gnome-darker/80 border border-white/5 text-slate-300">
              <span className="text-slate-500"># 2. Add to your GNOME app drawer automatically</span>
              <br />
              <span className="text-accent-neon">$</span> antilux desktop-integrate --app transcribing-agent
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-400 flex items-center justify-between border-t border-white/10">
            <span>Native Python 3.12 + PyTorch + Ollama</span>
            <span className="text-accent-neon font-mono font-bold">100% Offline & Free</span>
          </div>
        </div>

      </div>
    </section>
  );
}
