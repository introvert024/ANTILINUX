export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent-danger/20 text-accent-danger border border-accent-danger/30 font-mono text-xs">
          THE RAW DATA
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Windows 11 vs. ANTILINUX</h2>
        <p className="text-slate-400 font-light">
          Look at how much of your hardware Windows consumes before you even start coding.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-white/10 rounded-2xl overflow-hidden bg-gnome-surface">
          <thead>
            <tr className="bg-gnome-darker/90 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-slate-400">
              <th className="p-5">Metric / Feature</th>
              <th className="p-5 text-accent-danger bg-accent-danger/5 border-l border-white/10">Windows 11 (Standard)</th>
              <th className="p-5 text-accent-neon bg-accent-neon/5 border-l border-white/10">ANTILINUX (Fedora + GNOME)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            <tr className="hover:bg-white/[0.02]">
              <td className="p-5 font-semibold text-white">Clean Boot RAM Idle</td>
              <td className="p-5 text-slate-400 bg-accent-danger/5 border-l border-white/10">
                <span className="text-accent-danger font-mono font-bold">4.2 GB - 5.5 GB</span> (Background telemetry, Edge update, Widgets)
              </td>
              <td className="p-5 text-white bg-accent-neon/5 border-l border-white/10">
                <span className="text-accent-neon font-mono font-bold">~920 MB</span> (Pristine Wayland session, ultra-efficient)
              </td>
            </tr>
            <tr className="hover:bg-white/[0.02]">
              <td className="p-5 font-semibold text-white">Telemetry & Surveillance</td>
              <td className="p-5 text-slate-400 bg-accent-danger/5 border-l border-white/10">
                <span className="text-accent-danger">38+ telemetry daemons</span>, Recall screenshots of desktop, Advertising ID
              </td>
              <td className="p-5 text-white bg-accent-neon/5 border-l border-white/10">
                <span className="text-accent-neon">0 Trackers</span>. Fully open source, verifiable RPM & OSTree packages
              </td>
            </tr>
            <tr className="hover:bg-white/[0.02]">
              <td className="p-5 font-semibold text-white">Local AI Performance</td>
              <td className="p-5 text-slate-400 bg-accent-danger/5 border-l border-white/10">
                WSL2 hypervisor penalty with 15-25% memory overhead and slow cross-filesystem I/O
              </td>
              <td className="p-5 text-white bg-accent-neon/5 border-l border-white/10">
                <span className="text-accent-neon">Direct Bare-Metal</span> CUDA / ROCm / Vulkan access on Btrfs/Ext4
              </td>
            </tr>
            <tr className="hover:bg-white/[0.02]">
              <td className="p-5 font-semibold text-white">Desktop Environment</td>
              <td className="p-5 text-slate-400 bg-accent-danger/5 border-l border-white/10">
                Fragmented Windows 8/10/11 UI, start menu ads, locked taskbar layout
              </td>
              <td className="p-5 text-white bg-accent-neon/5 border-l border-white/10">
                <span className="text-accent-neon">Curated GNOME</span> with Pop Tiling, Starship, Blur-my-shell, and smooth gestures
              </td>
            </tr>
            <tr className="hover:bg-white/[0.02]">
              <td className="p-5 font-semibold text-white">Launcher & Search</td>
              <td className="p-5 text-slate-400 bg-accent-danger/5 border-l border-white/10">
                Slow Windows Search, forced Bing ads, high disk indexing, no plugin system
              </td>
              <td className="p-5 text-white bg-accent-neon/5 border-l border-white/10">
                <span className="text-accent-neon font-bold">Flow Launcher [Alt + Space]</span>: Instant spotlight search, calculator, AI prompt runner, file finder
              </td>
            </tr>
            <tr className="hover:bg-white/[0.02]">
              <td className="p-5 font-semibold text-white">Android Subsystem (WSA)</td>
              <td className="p-5 text-slate-400 bg-accent-danger/5 border-l border-white/10">
                <span className="text-accent-danger font-semibold">Deprecated & Killed</span> by Microsoft in March 2025
              </td>
              <td className="p-5 text-white bg-accent-neon/5 border-l border-white/10">
                <span className="text-accent-neon font-bold">WSA for Linux (Out-of-box)</span>: Powered by KVM, VirtIO 3D GPU acceleration, Aurora Store & APK sideloading
              </td>
            </tr>
            <tr className="hover:bg-white/[0.02]">
              <td className="p-5 font-semibold text-white">Gaming Support</td>
              <td className="p-5 text-slate-400 bg-accent-danger/5 border-l border-white/10">
                DirectX with heavy background shader caches and anticheat kernel rootkits
              </td>
              <td className="p-5 text-white bg-accent-neon/5 border-l border-white/10">
                <span className="text-accent-neon">Valve Proton + Wine-GE</span>: Runs 95%+ of Steam library with equal or better FPS
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
