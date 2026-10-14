"use client";

import Link from "next/link";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gnome-darker py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-fedora to-accent-neon p-[2px]">
            <div className="w-full h-full bg-gnome-darker rounded-[6px] flex items-center justify-center font-mono font-bold text-xs text-accent-neon">
              ⏻
            </div>
          </div>
          <div>
            <span className="font-bold text-white tracking-wide">ANTILINUX</span>
            <span className="text-slate-400 text-xs ml-2">Fedora AI Workstation Edition</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <a
            href="https://github.com/introvert024/ANTILINUX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-neon transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          <a
            href="https://github.com/introvert024/ANTILINUX/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-neon transition-colors"
          >
            Release v1.0.0
          </a>
          <a
            href="https://github.com/introvert024/ANTILINUX/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-neon transition-colors"
          >
            MIT License
          </a>
          <a
            href="/setup.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-neon transition-colors font-mono text-xs"
          >
            setup.sh
          </a>
        </div>

        <div className="text-xs text-slate-500 font-mono">
          Powered by Next.js & Vercel • Open Source (MIT)
        </div>

      </div>
    </footer>
  );
}
