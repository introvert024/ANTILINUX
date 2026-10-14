// ANTILINUX Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Bind Enter key on terminal input
  const termInput = document.getElementById('term-input');
  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleInputSubmit();
      }
    });
  }
});

// Copy Hero Command
function copyHeroCommand() {
  const text = "curl -fsSL https://antilux.vercel.app/setup.sh | bash";
  navigator.clipboard.writeText(text).then(() => {
    const btnText = document.getElementById('hero-copy-text');
    const originalText = btnText.innerText;
    btnText.innerText = "Copied!";
    setTimeout(() => {
      btnText.innerText = originalText;
    }, 2000);
  });
}

// Copy Generated Command
function copyGeneratedCommand() {
  const cmd = document.getElementById('gen-command-text').innerText;
  navigator.clipboard.writeText(cmd).then(() => {
    const btnText = document.getElementById('gen-copy-btn-text');
    const originalText = btnText.innerText;
    btnText.innerText = "Copied to Clipboard!";
    setTimeout(() => {
      btnText.innerText = originalText;
    }, 2000);
  });
}

// Update Dynamic Command Generator based on checkboxes
function updateGeneratedCommand() {
  const gnome = document.getElementById('opt-gnome').checked;
  const ollama = document.getElementById('opt-ollama').checked;
  const dev = document.getElementById('opt-dev').checked;
  const gaming = document.getElementById('opt-gaming').checked;
  const office = document.getElementById('opt-office').checked;
  const speed = document.getElementById('opt-speed').checked;

  let flags = [];
  if (!gnome) flags.push("--no-gnome");
  if (!ollama) flags.push("--no-ai");
  if (!dev) flags.push("--minimal-dev");
  if (gaming) flags.push("--with-gaming");
  if (office) flags.push("--with-office");
  if (speed) flags.push("--fast-mirrors");

  let cmd = "curl -fsSL https://antilux.vercel.app/setup.sh | bash";
  if (flags.length > 0) {
    cmd = `curl -fsSL https://antilux.vercel.app/setup.sh | bash -s -- ${flags.join(' ')}`;
  }

  document.getElementById('gen-command-text').innerText = cmd;
  const tag = document.getElementById('gen-tag');
  if (flags.length === 0) {
    tag.innerText = "Default Workstation Profile";
  } else {
    tag.innerText = `Custom Profile (${flags.length} modifier flags)`;
  }
}

// Terminal Commands Dictionary
const COMMANDS = {
  help: `
<div class="text-accent-neon font-bold">ANTILINUX Interactive Shell v1.0.0</div>
Available commands:
  <span class="text-fedora-light font-bold">fastfetch</span>        - Display system specs, kernel, and active GNOME theme
  <span class="text-fedora-light font-bold">antilux ai</span>       - Test the local offline AI model runtime (Ollama)
  <span class="text-fedora-light font-bold">bench-ram</span>        - Compare live RAM consumption vs Windows 11
  <span class="text-fedora-light font-bold">cat manifesto.txt</span>- Read why we are abandoning proprietary OSes
  <span class="text-fedora-light font-bold">build-my-app</span>     - Simulate on-demand AI micro-app generation
  <span class="text-fedora-light font-bold">clear</span>            - Clear terminal screen
`,
  fastfetch: `
<div class="flex flex-col sm:flex-row gap-4 font-mono text-xs">
<div class="text-fedora-light leading-none select-none">
          /:-------------:\\<br>
       :-------------------::<br>
     :-----------/shhOHbmp---:\\<br>
   /-----------omMMMNNNMMD  ---:<br>
  :-----------sMMMMNMNMP.    ---:<br>
 :-----------:MMMdP-------    ---\\ <br>
,------------:MMMr--------      ---:<br>
:------------:MMMx--------       ---:<br>
:------------.NNNNo-------        ---:<br>
:-------------/smMMN/--           ---:<br>
 \\_____________________/          ---\\
</div>
<div class="space-y-1 text-slate-300">
  <div><span class="text-accent-neon font-bold">antilux@fedora-workstation</span></div>
  <div>-------------------------</div>
  <div><span class="text-fedora-light font-bold">OS:</span> ANTILINUX (Fedora Linux 41 Workstation x86_64)</div>
  <div><span class="text-fedora-light font-bold">Kernel:</span> 6.11.3-300.fc41.x86_64 (Wayland Native)</div>
  <div><span class="text-fedora-light font-bold">Uptime:</span> 14 days, 3 hours, 22 mins</div>
  <div><span class="text-fedora-light font-bold">Packages:</span> 1840 (rpm), 12 (flatpak)</div>
  <div><span class="text-fedora-light font-bold">Shell:</span> zsh 5.9 + starship prompt</div>
  <div><span class="text-fedora-light font-bold">DE:</span> GNOME 47.1 (Tiling enabled, Pop Shell)</div>
  <div><span class="text-fedora-light font-bold">Terminal:</span> Ghostty (GPU Accelerated)</div>
  <div><span class="text-fedora-light font-bold">CPU:</span> AMD Ryzen 9 7950X / Intel Core i9 (32) @ 5.700GHz</div>
  <div><span class="text-fedora-light font-bold">GPU:</span> NVIDIA RTX 4090 / AMD Radeon 7900 XTX (CUDA 12.6 Native)</div>
  <div><span class="text-fedora-light font-bold">Memory:</span> <span class="text-accent-neon font-bold">924MiB</span> / 64240MiB (<span class="text-accent-neon font-bold">1.4% idle!</span>)</div>
</div>
</div>
`,
  "antilux ai": `
<div class="text-xs space-y-2">
  <div class="text-accent-cyan">[Ollama Service] Daemon is active (pid 1420). Local models ready.</div>
  <div class="text-slate-400">&gt; Loading 'deepseek-coder:6.7b' into VRAM (Direct PCIe 4.0 DMA transfer)...</div>
  <div class="text-accent-neon font-bold">✓ Model loaded in 0.31s (No virtualization lag).</div>
  <div class="p-3 bg-gnome-card rounded-lg text-slate-200 border border-white/5 font-mono">
    <span class="text-slate-500">AI Prompt:</span> "Write a zero-dependency POSIX microservice that monitors GPU temperature and notifies GNOME"<br><br>
    <span class="text-accent-neon font-semibold">Generated in 1.2s:</span><br>
    <code>#!/usr/bin/env bash<br>
    while true; do<br>
      temp=$(nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader)<br>
      [ "$temp" -gt 80 ] && notify-send -u critical "GPU Temp Alert" "Temp: $temp°C"<br>
      sleep 5<br>
    done</code>
  </div>
</div>
`,
  "bench-ram": `
<div class="text-xs space-y-2">
  <div class="font-bold text-white">=== REAL-WORLD CLEAN IDLE BENCHMARK ===</div>
  <div>Windows 11 24H2 Clean Boot:</div>
  <div class="w-full bg-gnome-card rounded h-4 overflow-hidden flex">
    <div class="bg-accent-danger h-full" style="width: 78%"></div>
  </div>
  <div class="text-accent-danger">4,850 MB (Background telemetry, Edge update, Widgets, Security Center)</div>
  
  <div class="pt-2">ANTILINUX Fedora Workstation:</div>
  <div class="w-full bg-gnome-card rounded h-4 overflow-hidden flex">
    <div class="bg-accent-neon h-full" style="width: 15%"></div>
  </div>
  <div class="text-accent-neon font-bold">920 MB (3.93 GB RAM freed for your local AI models and builds)</div>
</div>
`,
  "cat manifesto.txt": `
<div class="text-xs text-slate-300 space-y-2 p-2 border-l-2 border-accent-neon">
  <div class="font-bold text-white text-sm">THE ANTILINUX MANIFESTO (2026)</div>
  <p>1. In the age of AI, the operating system is a host for builders, not an advertising billboard.</p>
  <p>2. You should never have to ask permission from an app store or wait for Microsoft to add a feature to Windows.</p>
  <p>3. If you can describe it, your AI agent can write it. If it runs on POSIX, it runs forever without license fees.</p>
  <p>4. No telemetry. No Recall spyware. Total hardware control.</p>
</div>
`,
  "build-my-app": `
<div class="text-xs space-y-2">
  <div class="text-accent-neon font-bold">&gt;&gt;&gt; Simulating On-Demand App Construction:</div>
  <div class="text-slate-400">Target: Standalone Local AI Voice Notepad</div>
  <div class="text-fedora-light">1. Cloning local Whisper C++ runner... [OK]</div>
  <div class="text-fedora-light">2. Compiling native Wayland audio recorder... [OK]</div>
  <div class="text-fedora-light">3. Generating GTK4 / Libadwaita UI layout... [OK]</div>
  <div class="text-accent-neon font-bold">✓ App created in 3.4s at ~/.local/bin/voice-notes</div>
  <div class="text-slate-400">Launch with: <span class="text-white font-bold">voice-notes</span> (Added to GNOME app drawer)</div>
</div>
`
};

// Execute Command in Terminal
function runCommand(cmd) {
  const body = document.getElementById('term-body');
  
  if (cmd === 'clear') {
    body.innerHTML = `
      <div class="text-slate-400 text-xs">
        Terminal cleared. Type 'help' or click buttons above for commands.
      </div>
    `;
    return;
  }

  // Append user command
  const cmdElem = document.createElement('div');
  cmdElem.className = 'font-mono text-sm';
  cmdElem.innerHTML = `<span class="text-accent-neon font-bold">antilux ❯</span> <span class="text-white">${cmd}</span>`;
  body.appendChild(cmdElem);

  // Append output
  const outputElem = document.createElement('div');
  outputElem.className = 'text-slate-300 font-mono text-xs sm:text-sm pl-2';
  
  const cleanCmd = cmd.trim().toLowerCase();
  if (COMMANDS[cleanCmd]) {
    outputElem.innerHTML = COMMANDS[cleanCmd];
  } else {
    outputElem.innerHTML = `
      <div class="text-accent-danger font-mono text-xs">
        antilux: command not found: '${cmd}'. Type <span class="text-accent-neon font-bold">'help'</span> for available commands.
      </div>
    `;
  }

  body.appendChild(outputElem);
  body.scrollTop = body.scrollHeight;
}

// Handle Form/Input Submission
function handleInputSubmit() {
  const input = document.getElementById('term-input');
  const val = input.value.trim();
  if (val) {
    runCommand(val);
    input.value = '';
  }
}
