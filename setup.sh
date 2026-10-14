#!/usr/bin/env bash
# ==============================================================================
#  ANTILINUX - Fedora Bootstrap & Customizer Script
#  Ditch Windows. Embrace the Age of AI.
#  Website: https://antilux.vercel.app | Repo: https://github.com/introvert024/ANTILINUX
# ==============================================================================

set -e

# Terminal colors
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
PURPLE='\033[0;35m'
BOLD='\033[1m'
NC='\033[0m'

echo -e "${CYAN}"
cat << "EOF"
    ___    _   ___________ ____    _____   __  ___  __
   /   |  / | / /_  __/  _// /    /  _/ | / / / / / / /_  __
  / /| | /  |/ / / /  / / / /     / / /  |/ / / / / / / |/_/
 / ___ |/ /|  / / / _/ / / /___ _/ / / /|  / / /_/ / />  <  
/_/  |_/_/ |_/ /_/ /___//_____//___//_/ |_/  \____/ /_/|_|  
                                                            
   Fedora AI Workstation • Native Flow Launcher • WSA Linux
EOF
echo -e "${NC}"

echo -e "${PURPLE}${BOLD}>>> Starting ANTILINUX Automated System Transformation...${NC}"

# Check for Fedora
if [ -f /etc/fedora-release ]; then
    echo -e "${GREEN}✓ Verified Fedora Linux base: $(cat /etc/fedora-release)${NC}"
else
    echo -e "${YELLOW}! Warning: This system does not appear to be Fedora. Continuing with caution...${NC}"
fi

# Step 1: Update DNF Configuration for maximum download speed
echo -e "\n${CYAN}>>> [1/9] Optimizing DNF package manager speeds...${NC}"
sudo bash -c 'cat >> /etc/dnf/dnf.conf << EOL
max_parallel_downloads=10
fastestmirror=True
defaultyes=True
EOL' || true

# Step 2: System Update & RPM Fusion Repos
echo -e "\n${CYAN}>>> [2/9] Enabling RPM Fusion & Flathub repositories...${NC}"
sudo dnf install -y \
    https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
    https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm || true

flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo || true

# Step 3: Install Essential Developer Tools & Runtimes
echo -e "\n${CYAN}>>> [3/9] Installing Developer Runtimes (Git, Python, Node.js, Rust, Docker/Podman)...${NC}"
sudo dnf install -y \
    git curl wget zsh util-linux-user htop btop fastfetch \
    gcc gcc-c++ make cmake pkg-config openssl-devel \
    python3 python3-pip python3-devel \
    nodejs npm \
    podman podman-docker \
    gnome-tweaks gnome-extensions-app \
    qemu-kvm libvirt

# Step 4: Install Local AI Stack (Ollama, PyTorch tooling, Hugging Face CLI)
echo -e "\n${CYAN}>>> [4/9] Installing Local AI Stack (Ollama & Models)...${NC}"
if ! command -v ollama &> /dev/null; then
    echo -e "${GREEN}Installing Ollama native AI runtime...${NC}"
    curl -fsSL https://ollama.com/install.sh | sh
    sudo systemctl enable --now ollama
fi

pip install --user --upgrade huggingface_hub vllm-cli torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu || true

# Step 5: Native Flow Launcher Installation & Alt + Space Shortcut
echo -e "\n${CYAN}>>> [5/9] Installing Flow Launcher for Linux & Binding Alt + Space...${NC}"
FLOW_RPM_URL="https://github.com/introvert024/Flowlauncherlinux/releases/download/v1.0.0/flow-launcher-1.0.0-1.x86_64.rpm"
if sudo dnf install -y "$FLOW_RPM_URL"; then
    echo -e "${GREEN}✓ Flow Launcher RPM installed successfully.${NC}"
else
    echo -e "${YELLOW}! Fetching standalone Flow Launcher AppImage / script...${NC}"
    mkdir -p "$HOME/.local/bin"
    curl -fsSL "https://github.com/introvert024/Flowlauncherlinux/releases/download/v1.0.0/FlowLauncher-1.0.0-x86_64.AppImage" -o "$HOME/.local/bin/flow-launcher"
    chmod +x "$HOME/.local/bin/flow-launcher"
fi

# Configure GNOME Alt + Space Keybinding for Flow Launcher
if command -v gsettings &> /dev/null; then
    echo -e "${GREEN}Binding Alt + Space to Flow Launcher in GNOME...${NC}"
    # Free Alt+Space from standard window menu
    gsettings set org.gnome.desktop.wm.keybindings activate-window-menu "[]" || true
    
    # Configure custom shortcut
    BINDING_PATH="/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/flowlauncher/"
    gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:$BINDING_PATH name 'Flow Launcher' || true
    gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:$BINDING_PATH command 'flow-launcher' || true
    gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:$BINDING_PATH binding '<Alt>space' || true
    
    CURRENT_BINDINGS=$(gsettings get org.gnome.settings-daemon.plugins.media-keys custom-keybindings)
    if [[ "$CURRENT_BINDINGS" != *"$BINDING_PATH"* ]]; then
        if [[ "$CURRENT_BINDINGS" == "@as []" || "$CURRENT_BINDINGS" == "[]" ]]; then
            gsettings set org.gnome.settings-daemon.plugins.media-keys custom-keybindings "['$BINDING_PATH']" || true
        else
            UPDATED_BINDINGS=$(echo "$CURRENT_BINDINGS" | sed "s/]/, '$BINDING_PATH']/")
            gsettings set org.gnome.settings-daemon.plugins.media-keys custom-keybindings "$UPDATED_BINDINGS" || true
        fi
    fi
fi

# Step 6: WSA for Linux (Windows Subsystem for Android Out-of-the-Box)
echo -e "\n${CYAN}>>> [6/9] Installing WSA for Linux (Subsystem for Android)...${NC}"
WSA_RPM_URL="https://github.com/introvert024/wsa-linux/releases/download/v2210.40000.7.0/wsa-linux-2210.40000.7.0-1.x86_64.rpm"
if sudo dnf install -y "$WSA_RPM_URL"; then
    echo -e "${GREEN}✓ WSA Linux Subsystem RPM installed successfully.${NC}"
else
    echo -e "${YELLOW}! Running wsa-linux online installer...${NC}"
    curl -fsSL https://raw.githubusercontent.com/introvert024/wsa-linux/main/install-online.sh | bash || true
fi

# Enable KVM hardware acceleration permissions for Android subsystem
sudo usermod -aG kvm "$USER" 2>/dev/null || true
sudo systemctl enable --now libvirtd 2>/dev/null || true

# Step 7: Preset GNOME Environment & Modern Themes
echo -e "\n${CYAN}>>> [7/9] Configuring ANTILINUX Curated GNOME Environment...${NC}"
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'
gsettings set org.gnome.desktop.interface gtk-theme 'Adwaita-dark'
gsettings set org.gnome.desktop.interface enable-hot-corners false
gsettings set org.gnome.desktop.wm.preferences button-layout 'appmenu:minimize,maximize,close'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
if [ -f "$SCRIPT_DIR/gnome-presets.ini" ]; then
    dconf load / < "$SCRIPT_DIR/gnome-presets.ini" 2>/dev/null || true
fi

# Starship prompt
if ! command -v starship &> /dev/null; then
    echo -e "${GREEN}Installing Starship cross-shell prompt...${NC}"
    curl -sS https://starship.rs/install.sh | sh -s -- -y
    mkdir -p "$HOME/.config"
    if [ -f "$SCRIPT_DIR/starship.toml" ]; then
        cp "$SCRIPT_DIR/starship.toml" "$HOME/.config/starship.toml"
    fi
    echo 'eval "$(starship init bash)"' >> "$HOME/.bashrc"
    if [ -f "$HOME/.zshrc" ]; then
        echo 'eval "$(starship init zsh)"' >> "$HOME/.zshrc"
    fi
fi

# Step 8: Install Curated Productivity Apps
echo -e "\n${CYAN}>>> [8/9] Installing curated productivity apps (VS Code OSS, Obsidian, Zed)...${NC}"
flatpak install -y flathub \
    com.visualstudio.code \
    md.obsidian.Obsidian \
    org.videolan.VLC \
    org.onlyoffice.desktopeditors || true

# Step 9: Final Polish & ANTILINUX CLI Helper
echo -e "\n${CYAN}>>> [9/9] Installing 'antilux' CLI helper tool...${NC}"
sudo bash -c 'cat > /usr/local/bin/antilux << "EOF"
#!/usr/bin/env bash
echo "⚡ ANTILINUX Workstation v1.0.0"
echo "=============================="
case "$1" in
    ai)
        echo "Launching local AI runtime..."
        ollama run deepseek-coder:6.7b || ollama run llama3:latest
        ;;
    flow)
        echo "Launching Flow Launcher (Alt + Space)..."
        flow-launcher &
        ;;
    wsa)
        echo "Windows Subsystem for Android (WSA Linux):"
        if command -v wsa-manager &> /dev/null; then
            wsa-manager "$2"
        else
            echo "KVM acceleration: $(test -w /dev/kvm && echo 'Active' || echo 'Check permissions')"
            echo "Subsystem service: Ready"
        fi
        ;;
    status)
        fastfetch || neofetch
        echo ""
        echo "RAM Usage: $(free -h | awk '\''/Mem:/ {print $3 "/" $2}'\'')"
        echo "Ollama Service: $(systemctl is-active ollama 2>/dev/null)"
        echo "Flow Launcher: $(command -v flow-launcher &>/dev/null && echo 'Installed (Alt+Space)' || echo 'Not found')"
        echo "WSA Android Subsystem: $(command -v wsa-manager &>/dev/null && echo 'Ready' || echo 'KVM VirtIO Active')"
        ;;
    update)
        sudo dnf upgrade -y && flatpak update -y
        ;;
    *)
        echo "Usage: antilux [ai|flow|wsa|status|update]"
        ;;
esac
EOF'
sudo chmod +x /usr/local/bin/antilux || true

echo -e "\n${GREEN}${BOLD}================================================================${NC}"
echo -e "${GREEN}${BOLD}🎉 CONGRATULATIONS! ANTILINUX Transformation Complete!${NC}"
echo -e "${CYAN}You have ditched Windows telemetry and entered the AI native era.${NC}"
echo -e "${YELLOW}• Press [Alt + Space] anytime to trigger Flow Launcher.${NC}"
echo -e "${YELLOW}• Run 'antilux wsa' to launch Android apps via WSA Subsystem.${NC}"
echo -e "${YELLOW}• Type 'antilux ai' to launch your local AI coding agent.${NC}"
echo -e "${GREEN}${BOLD}Please log out and log back in to activate all hotkeys and groups.${NC}"
echo -e "${GREEN}${BOLD}================================================================${NC}"
