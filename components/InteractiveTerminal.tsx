"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, RefreshCw, X } from "lucide-react";

interface LogEntry {
  cmd: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    {
      cmd: "fastfetch",
      output: (
        <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs">
          <div className="text-fedora-light leading-none select-none font-bold">
            {`   /:-------------:\\
:-------------------::
:-----------/shhOHbmp---:\\
/-----------omMMMNNNMMD  ---:
:-----------sMMMMNMNMP.    ---:
:-----------:MMMdP-------    ---\\
,------------:MMMr--------      ---:
:------------:MMMx--------       ---:
:------------.NNNNo-------        ---:
:-------------/smMMN/--           ---:
\\_____________________/          ---\\`}
          </div>
          <div className="space-y-1 text-slate-300">
            <div><span className="text-accent-neon font-bold">antilux@fedora-workstation</span></div>
            <div>-------------------------</div>
            <div><span className="text-fedora-light font-bold">OS:</span> ANTILINUX (Fedora Linux 41 Workstation x86_64)</div>
            <div><span className="text-fedora-light font-bold">Kernel:</span> 6.11.3-300.fc41.x86_64 (Wayland Native)</div>
            <div><span className="text-fedora-light font-bold">DE:</span> GNOME 47.1 (Pop Shell Dynamic Tiling)</div>
            <div><span className="text-fedora-light font-bold">Shell:</span> zsh 5.9 + starship prompt</div>
            <div><span className="text-fedora-light font-bold">AI Runtime:</span> Ollama daemon (Direct PCIe CUDA/ROCm)</div>
            <div>
              <span className="text-fedora-light font-bold">Memory:</span>{" "}
              <span className="text-accent-neon font-bold">924MiB</span> / 64240MiB (
              <span className="text-accent-neon font-bold">1.4% idle</span>)
            </div>
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const clean = cmd.trim().toLowerCase();
    if (!clean) return;

    if (clean === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let result: React.ReactNode;

    switch (clean) {
      case "help":
        result = (
          <div className="text-xs space-y-1">
            <div className="text-accent-neon font-bold">ANTILINUX Interactive Shell v1.0.0</div>
            <div>Available commands:</div>
            <div><span className="text-fedora-light font-bold">fastfetch</span> - System specs, kernel, memory footprint</div>
            <div><span className="text-fedora-light font-bold">antilux ai</span> - Test offline local AI model loading</div>
            <div><span className="text-fedora-light font-bold">bench-ram</span> - Compare idle memory consumption vs Windows 11</div>
            <div><span className="text-fedora-light font-bold">cat manifesto.txt</span> - Read the anti-surveillance builder manifesto</div>
            <div><span className="text-fedora-light font-bold">build-my-app</span> - Simulate on-demand AI micro-tool creation</div>
            <div><span className="text-fedora-light font-bold">clear</span> - Clear terminal buffer</div>
          </div>
        );
        break;

      case "fastfetch":
        result = (
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs">
            <div className="text-fedora-light leading-none select-none font-bold">
              {`   /:-------------:\\
:-------------------::
:-----------/shhOHbmp---:\\
/-----------omMMMNNNMMD  ---:
:-----------sMMMMNMNMP.    ---:
:-----------:MMMdP-------    ---\\
,------------:MMMr--------      ---:
:------------:MMMx--------       ---:
:------------.NNNNo-------        ---:
:-------------/smMMN/--           ---:
\\_____________________/          ---\\`}
            </div>
            <div className="space-y-1 text-slate-300">
              <div><span className="text-accent-neon font-bold">antilux@fedora-workstation</span></div>
              <div>-------------------------</div>
              <div><span className="text-fedora-light font-bold">OS:</span> ANTILINUX (Fedora Linux 41 Workstation x86_64)</div>
              <div><span className="text-fedora-light font-bold">Kernel:</span> 6.11.3-300.fc41.x86_64 (Wayland Native)</div>
              <div><span className="text-fedora-light font-bold">DE:</span> GNOME 47.1 (Pop Shell Dynamic Tiling)</div>
              <div><span className="text-fedora-light font-bold">Shell:</span> zsh 5.9 + starship prompt</div>
              <div><span className="text-fedora-light font-bold">AI Runtime:</span> Ollama daemon (Direct PCIe CUDA/ROCm)</div>
              <div>
                <span className="text-fedora-light font-bold">Memory:</span>{" "}
                <span className="text-accent-neon font-bold">924MiB</span> / 64240MiB (
                <span className="text-accent-neon font-bold">1.4% idle</span>)
              </div>
            </div>
          </div>
        );
        break;

      case "antilux ai":
        result = (
          <div className="text-xs space-y-2">
            <div className="text-accent-cyan">[Ollama Service] Active (pid 1420). Local models online.</div>
            <div className="text-slate-400">&gt; Loading &apos;deepseek-coder:6.7b&apos; into VRAM (Zero hypervisor latency)...</div>
            <div className="text-accent-neon font-bold">✓ Model loaded in 0.31s (Direct GPU tensor core pass).</div>
            <div className="p-3 bg-gnome-card rounded-lg text-slate-200 border border-white/5 font-mono">
              <span className="text-slate-500">AI Prompt:</span> &quot;Build a background clipboard history daemon in Python with Libadwaita UI&quot;<br />
              <span className="text-accent-neon font-semibold">Generated in 1.4s:</span><br />
              <code>~/.local/bin/clip-vault (Executed natively in 0.02s)</code>
            </div>
          </div>
        );
        break;

      case "bench-ram":
        result = (
          <div className="text-xs space-y-2">
            <div className="font-bold text-white">=== REAL-WORLD CLEAN IDLE BENCHMARK ===</div>
            <div>Windows 11 24H2 Clean Boot:</div>
            <div className="w-full bg-gnome-card rounded h-3 overflow-hidden flex">
              <div className="bg-accent-danger h-full" style={{ width: "78%" }} />
            </div>
            <div className="text-accent-danger font-mono font-semibold">4,850 MB (Background telemetry, Edge update, Widgets, Security Center)</div>
            
            <div className="pt-2">ANTILINUX Fedora Workstation:</div>
            <div className="w-full bg-gnome-card rounded h-3 overflow-hidden flex">
              <div className="bg-accent-neon h-full" style={{ width: "15%" }} />
            </div>
            <div className="text-accent-neon font-mono font-bold">920 MB (3.93 GB RAM freed up for your local AI models)</div>
          </div>
        );
        break;

      case "cat manifesto.txt":
        result = (
          <div className="text-xs text-slate-300 space-y-2 p-3 border-l-2 border-accent-neon bg-gnome-darker/50 rounded-r-xl">
            <div className="font-bold text-white text-sm">THE ANTILINUX MANIFESTO (2026)</div>
            <p>1. In the age of AI, the operating system is a foundation for builders, not an advertising billboard.</p>
            <p>2. You should never have to ask permission from a store or endure Microsoft Recall taking screenshots of your private work.</p>
            <p>3. If you can describe it, your AI agent can write it. If it runs on POSIX, it runs forever without fees.</p>
          </div>
        );
        break;

      case "build-my-app":
        result = (
          <div className="text-xs space-y-2">
            <div className="text-accent-neon font-bold">&gt;&gt;&gt; Simulating On-Demand App Construction:</div>
            <div className="text-slate-400">Target: Standalone Local AI Audio Transcriber</div>
            <div className="text-fedora-light">1. Fetching local Whisper C++ runner... [OK]</div>
            <div className="text-fedora-light">2. Compiling native Wayland audio hook... [OK]</div>
            <div className="text-fedora-light">3. Auto-generating GTK4 Libadwaita window... [OK]</div>
            <div className="text-accent-neon font-bold">✓ App created in 2.8s at ~/.local/bin/whisper-dock</div>
          </div>
        );
        break;

      default:
        result = (
          <div className="text-accent-danger font-mono text-xs">
            antilux: command not found: &apos;{cmd}&apos;. Type <span className="text-accent-neon font-bold">&apos;help&apos;</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { cmd, output: result }]);
    setInputVal("");
  };

  return (
    <section id="terminal" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent-neon mb-2">
          Interactive Shell Simulator
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          Experience ANTILINUX in Your Browser
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/15 bg-gnome-surface shadow-2xl backdrop-blur-xl">
        {/* Title Bar */}
        <div className="px-4 py-3 bg-gnome-darker/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-danger cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-accent-warning cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-accent-neon cursor-pointer" />
            <span className="text-xs font-mono text-slate-400 ml-3">
              antilux@workstation: ~ (zsh + starship)
            </span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-fedora/30 text-fedora-light border border-fedora/40">
            Fedora Linux 41 Workstation
          </span>
        </div>

        {/* Command Shortcuts */}
        <div className="px-4 py-2 bg-white/[0.03] border-b border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">Click to execute:</span>
          {["fastfetch", "antilux ai", "bench-ram", "cat manifesto.txt", "build-my-app"].map((c) => (
            <button
              key={c}
              onClick={() => executeCommand(c)}
              className="px-2.5 py-1 rounded bg-gnome-card hover:bg-accent-neon hover:text-black transition-colors border border-white/10 text-slate-300"
            >
              {c}
            </button>
          ))}
          <button
            onClick={() => executeCommand("clear")}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-red-500 hover:text-white transition-colors border border-white/10 text-slate-400 ml-auto"
          >
            clear
          </button>
        </div>

        {/* Screen Output */}
        <div className="p-5 font-mono text-sm sm:text-base min-h-[340px] max-h-[460px] overflow-y-auto space-y-4 leading-relaxed">
          <div className="text-slate-400 text-xs">
            Welcome to ANTILINUX Terminal (Fedora 41 kernel 6.11-generic x86_64).
            <br />
            Local AI daemon [Ollama] is running on GPU:0 (0.0ms cold start). Type &apos;help&apos; or click above.
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-sm">
                <span className="text-accent-neon font-bold">antilux ❯</span>{" "}
                <span className="text-white">{item.cmd}</span>
              </div>
              <div className="text-slate-300 pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            executeCommand(inputVal);
          }}
          className="px-5 py-3 bg-gnome-darker/70 border-t border-white/10 flex items-center gap-3 font-mono text-sm"
        >
          <span className="text-accent-neon font-bold flex items-center gap-1.5 shrink-0">
            <span>antilux</span>
            <span className="text-fedora-light">❯</span>
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command (try 'fastfetch', 'antilux ai', or 'help')..."
            className="w-full bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-600 focus:ring-0"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-accent-neon/20 hover:bg-accent-neon text-accent-neon hover:text-black text-xs font-bold transition-all shrink-0"
          >
            RUN
          </button>
        </form>
      </div>
    </section>
  );
}
