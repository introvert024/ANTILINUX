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
                                                            
         Fedora-Powered AI Workstation Edition
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
echo -e "\n${CYAN}>>> [1/7] Optimizing DNF package manager speeds...${NC}"
sudo bash -c 'cat >> /etc/dnf/dnf.conf << EOL
max_parallel_downloads=10
fastestmirror=True
defaultyes=True
EOL' || true

# Step 2: System Update & RPM Fusion Repos
echo -e "\n${CYAN}>>> [2/7] Enabling RPM Fusion & Flathub repositories...${NC}"
sudo dnf install -y \
    https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
    https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm || true

flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo || true

# Step 3: Install Essential Developer Tools & Runtimes
echo -e "\n${CYAN}>>> [3/7] Installing Developer Runtimes (Git, Python, Node.js, Rust, Docker/Podman)...${NC}"
sudo dnf install -y \
    git curl wget zsh util-linux-user htop btop fastfetch \
    gcc gcc-c++ make cmake pkg-config openssl-devel \
    python3 python3-pip python3-devel \
    nodejs npm \
    podman podman-docker \
    gnome-tweaks gnome-extensions-app

# Install Rust
if ! command -v rustc &> /dev/null; then
    echo -e "${GREEN}Installing Rust toolchain...${NC}"
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source "$HOME/.cargo/env"
fi

# Step 4: Install Local AI Stack (Ollama, PyTorch tooling, Hugging Face CLI)
echo -e "\n${CYAN}>>> [4/7] Installing Local AI Stack (Ollama & Models)...${NC}"
if ! command -v ollama &> /dev/null; then
    echo -e "${GREEN}Installing Ollama native AI runtime...${NC}"
    curl -fsSL https://ollama.com/install.sh | sh
    sudo systemctl enable --now ollama
fi

# Install Python AI essentials
pip install --user --upgrade huggingface_hub vllm-cli torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu || true

# Step 5: Preset GNOME Environment & Modern Themes
echo -e "\n${CYAN}>>> [5/7] Configuring ANTILINUX Curated GNOME Environment...${NC}"

# Dark Mode and Font settings
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'
gsettings set org.gnome.desktop.interface gtk-theme 'Adwaita-dark'
gsettings set org.gnome.desktop.interface enable-hot-corners false
gsettings set org.gnome.desktop.wm.preferences button-layout 'appmenu:minimize,maximize,close'

# Apply dconf presets if available
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
if [ -f "$SCRIPT_DIR/gnome-presets.ini" ]; then
    dconf load / < "$SCRIPT_DIR/gnome-presets.ini" 2>/dev/null || true
fi

# Install Modern Starship prompt
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

# Step 6: Install Flatpak Modern Productivity Apps
echo -e "\n${CYAN}>>> [6/7] Installing curated productivity apps (VS Code OSS, Obsidian, Zed)...${NC}"
flatpak install -y flathub \
    com.visualstudio.code \
    md.obsidian.Obsidian \
    org.videolan.VLC \
    org.onlyoffice.desktopeditors || true

# Step 7: Final Polish & ANTILINUX CLI Helper
echo -e "\n${CYAN}>>> [7/7] Installing 'antilux' CLI helper tool...${NC}"
sudo bash -c 'cat > /usr/local/bin/antilux << "EOF"
#!/usr/bin/env bash
echo "⚡ ANTILINUX Workstation v1.0.0"
echo "=============================="
case "$1" in
    ai)
        echo "Launching local AI runtime..."
        ollama run deepseek-coder:6.7b || ollama run llama3:latest
        ;;
    status)
        fastfetch || neofetch
        echo ""
        echo "RAM Usage: $(free -h | awk '\''/Mem:/ {print $3 "/" $2}'\'')"
        echo "Ollama Service: $(systemctl is-active ollama)"
        ;;
    update)
        sudo dnf upgrade -y && flatpak update -y
        ;;
    *)
        echo "Usage: antilux [ai|status|update]"
        ;;
esac
EOF'
sudo chmod +x /usr/local/bin/antilux || true

echo -e "\n${GREEN}${BOLD}================================================================${NC}"
echo -e "${GREEN}${BOLD}🎉 CONGRATULATIONS! ANTILINUX Transformation Complete!${NC}"
echo -e "${CYAN}You have ditched Windows telemetry and entered the AI native era.${NC}"
echo -e "${YELLOW}• Type 'antilux status' to view your system performance.${NC}"
echo -e "${YELLOW}• Type 'antilux ai' to launch your local AI coding agent.${NC}"
echo -e "${GREEN}${BOLD}Please log out and log back in or restart your system.${NC}"
echo -e "${GREEN}${BOLD}================================================================${NC}"
