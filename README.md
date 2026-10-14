# ANTILINUX 🐧⚡

> **Ditch Windows. Embrace the Age of AI.**
> Build your own applications on demand, break free from telemetry and bloatware, and unleash raw bare-metal performance on a Fedora-powered, pre-tuned GNOME experience.

[![Release v1.0.0](https://img.shields.io/badge/Release-v1.0.0-00E599?style=for-the-badge&logo=github&logoColor=white)](https://github.com/introvert024/ANTILINUX/releases/tag/v1.0.0)
[![ANTILINUX Website](https://img.shields.io/badge/Website-ANTILINUX-00E599?style=for-the-badge&logo=vercel&logoColor=white)](https://antilux.vercel.app)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/introvert024/ANTILINUX&project-name=ANTILINUX)
[![Base: Fedora 41/42](https://img.shields.io/badge/Base-Fedora_Linux-51A2DA?style=for-the-badge&logo=fedora&logoColor=white)](https://getfedora.org)
[![Desktop: Curated GNOME](https://img.shields.io/badge/Desktop-Curated_GNOME-4A86CF?style=for-the-badge&logo=gnome&logoColor=white)](https://gnome.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## ⚡ The Philosophy

In the coming age of AI, **code is the new executable**. 

With advanced AI models and autonomous agentic workflows, you no longer need bloated, proprietary Windows apps loaded with telemetry, subscription paywalls, and background spyware like Windows Recall. You can build, customize, and spin up bespoke micro-tools and apps tailored exactly to your workflow in seconds.

And where do AI models, developer tools, and agents run best? **Natively on Linux.**

**ANTILINUX** is a purpose-engineered Fedora workstation experience:
- **Zero bloatware & zero telemetry**: No Recall, no forced Bing searches, no Cortana, no ads in your start menu.
- **Pre-set GNOME desktop**: Ultra-slick, dark-mode glass aesthetic with dynamic tiling, hot-corners, buttery Wayland gestures, and productivity docks.
- **Pre-installed AI & Dev Stack**: Ollama, PyTorch GPU drivers (CUDA/ROCm auto-configured), Docker/Podman, Python 3, Node.js, Rust, and AI agent frameworks ready on first boot.
- **Bare-metal speed**: 900MB idle RAM vs 4.8GB on Windows 11. 100% of your CPU and GPU power goes to your models and code.

---

## 📦 Official Release Downloads & Install

You can install ANTILINUX using either the online one-liner or by downloading the official release bundle:

### Option 1: Standalone Release Bundle (Offline / Portable)
Download the latest verified release assets from [GitHub Releases v1.0.0](https://github.com/introvert024/ANTILINUX/releases/tag/v1.0.0):

- **[antilux-v1.0.0-fedora-installer.tar.gz](https://github.com/introvert024/ANTILINUX/releases/download/v1.0.0/antilux-v1.0.0-fedora-installer.tar.gz)** *(Linux native tarball)*
- **[antilux-v1.0.0-fedora-installer.zip](https://github.com/introvert024/ANTILINUX/releases/download/v1.0.0/antilux-v1.0.0-fedora-installer.zip)** *(Universal zip archive)*
- **[setup.sh](https://github.com/introvert024/ANTILINUX/releases/download/v1.0.0/setup.sh)** *(Standalone bootstrap script)*
- **[SHA256SUMS.txt](https://github.com/introvert024/ANTILINUX/releases/download/v1.0.0/SHA256SUMS.txt)** *(Cryptographic checksums)*

```bash
# Extract and run
tar -xzvf antilux-v1.0.0-fedora-installer.tar.gz
chmod +x setup.sh
./setup.sh
```

### Option 2: Quick Online Bootstrap
Run directly on Fedora 41 or 42 (Workstation or Silverblue):

```bash
curl -fsSL https://antilux.vercel.app/setup.sh | bash
```
```

Or clone this repository and run locally:

```bash
git clone https://github.com/introvert024/ANTILINUX.git
cd ANTILINUX
chmod +x setup.sh
./setup.sh
```

---

## 🖥️ What's Inside ANTILINUX?

### 1. Curated GNOME Experience
- Pre-configured GNOME extensions:
  - **Forge / Pop Shell**: Dynamic window auto-tiling
  - **Dash to Dock**: Customizable macOS/Ubuntu-style dock
  - **Blur my Shell**: Frosted glass transparency
  - **AppIndicator & KStatusNotifierItem**: System tray support
  - **Just Perfection**: Minimalist UI toggles
- Bespoke Dark Cyberpunk & Minimalist Themes
- Custom high-productivity keyboard shortcuts (`Super + Enter` for terminal, `Super + Space` for runner)

### 2. Pre-configured AI & Developer Suite
- **Local LLMs & AI Runtime**: Ollama pre-installed with systemd service, ready for `llama3`, `deepseek-coder`, `mistral`, and `qwen`.
- **Containers**: Podman & Docker CE with Rootless container support.
- **Coding Runtimes**: Python 3.12+, Node.js LTS, Bun, Rust (`cargo`), Go.
- **Editors & Terminals**: Ghostty & Alacritty terminals with zsh + Starship prompt, VS Code (OSS) / Zed.
- **AI Agent Tooling**: Model Context Protocol (MCP) server scaffolds and CLI agent wrappers.

### 3. Windows Migrator Toolkit
- Migration checklist and file transfer scripts
- Proton / Wine-GE pre-configured for seamless Steam gaming (higher FPS than Windows!)
- LibreOffice + OnlyOffice + WebApp wrappers for seamless productivity

---

## 🌐 Web Platform & Documentation

The ANTILINUX official landing page and documentation portal is hosted on Vercel:
👉 **[antilux.vercel.app](https://antilux.vercel.app)**

Features of the web portal:
- **Interactive Web Terminal**: Test ANTILINUX CLI commands directly in your browser.
- **Windows vs. ANTILINUX Matrix**: Real-time benchmarks on RAM, latency, and telemetry.
- **Custom Installer Generator**: Select your preferred AI models and dev tools to generate a customized bash setup script.
- **Migration Guide**: Step-by-step tutorial for dual-booting or completely wiping Windows.

---

## 🛠️ Local Website Development (Next.js & Vercel)

```bash
# Clone the repository
git clone https://github.com/introvert024/ANTILINUX.git
cd ANTILINUX

# Install dependencies
npm install

# Start Next.js local development server
npm run dev

# Build for production (same as Vercel)
npm run build
```

---

## 🤝 Contributing

Join the movement to liberate developers and creators from proprietary operating systems:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
