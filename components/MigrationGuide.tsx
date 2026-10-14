export default function MigrationGuide() {
  const steps = [
    {
      step: "1",
      title: "Download Fedora 41 Workstation ISO",
      desc: "Download the standard x86_64 Fedora Workstation ISO from fedoraproject.org.",
      link: "https://fedoraproject.org/workstation/download",
      linkText: "Fedora Project Official Download",
    },
    {
      step: "2",
      title: "Flash to USB using Rufus or Ventoy",
      desc: "Plug in any 8GB+ USB flash drive. Open Rufus on Windows, select the downloaded ISO, choose GPT partition scheme, and click Start.",
    },
    {
      step: "3",
      title: "Boot USB & Install Fedora",
      desc: "Reboot your PC, enter the boot menu (F12, F11, or Del), select your USB drive, and follow the installer. You can install alongside Windows or format your disk.",
    },
    {
      step: "4",
      title: "Run ANTILINUX Automated Setup",
      desc: "Open terminal and run the one-line curl command or execute setup.sh from the release bundle to install AI runtimes, apply GNOME presets, and optimize mirrors.",
      code: "curl -fsSL https://antilux.vercel.app/setup.sh | bash",
    },
  ];

  const alternatives = [
    { win: "MS Office 365", linux: "OnlyOffice Desktop / LibreOffice / Google Docs" },
    { win: "Adobe Photoshop", linux: "Photopea / GIMP / Krita" },
    { win: "Windows WSL2", linux: "Native Linux Kernel (Zero virtualization penalty)" },
    { win: "Notepad / Notepad++", linux: "Zed / VS Code OSS / Neovim" },
    { win: "Task Manager", linux: "Btop / Fastfetch / GNOME System Monitor" },
  ];

  return (
    <section id="migration" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-fedora/20 text-fedora-light border border-fedora/30 font-mono text-xs">
          DITCH WINDOWS PLAYBOOK
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How to Switch in 4 Easy Steps</h2>
        <p className="text-slate-400 font-light">
          Whether dual-booting alongside Windows or wiping the drive clean, switching is frictionless.
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-4">
        {steps.map((s, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-gnome-surface border border-white/5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-fedora/30 text-fedora-light font-mono font-bold text-sm flex items-center justify-center shrink-0">
                {s.step}
              </span>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
            </div>
            <p className="text-sm text-slate-400 pl-11">{s.desc}</p>
            {s.link && (
              <div className="pl-11 pt-1">
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent-neon hover:underline inline-flex items-center gap-1 font-mono"
                >
                  {s.linkText} ↗
                </a>
              </div>
            )}
            {s.code && (
              <div className="pl-11 pt-2">
                <code className="block p-3 bg-gnome-darker rounded-xl text-accent-neon font-mono text-xs select-all">
                  {s.code}
                </code>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Software Alternatives Matrix */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gnome-surface border border-white/10 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span>🔄 Windows App Alternatives on ANTILINUX</span>
        </h3>
        <div className="divide-y divide-white/5 text-xs sm:text-sm">
          {alternatives.map((a, i) => (
            <div key={i} className="py-2.5 flex flex-col sm:flex-row justify-between gap-1">
              <span className="text-slate-400 font-medium">{a.win}</span>
              <span className="text-accent-neon font-mono">→ {a.linux}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
