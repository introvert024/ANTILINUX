import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ANTILINUX — Ditch Windows. Build at the Speed of AI.",
  description: "Fedora-powered, pre-tuned GNOME workstation engineered for the AI builder era. Zero telemetry, zero bloatware, native local AI runtimes.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
  openGraph: {
    title: "ANTILINUX — Ditch Windows. Build at the Speed of AI.",
    description: "Fedora-powered workstation with curated GNOME and out-of-the-box local AI runtime (Ollama, PyTorch, CUDA/ROCm).",
    url: "https://antilux.vercel.app",
    siteName: "ANTILINUX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${sans.variable} ${mono.variable} font-sans antialiased bg-gnome-darker text-slate-100 min-h-screen selection:bg-accent-neon selection:text-black`}>
        {/* Background Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-fedora/20 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-accent-neon/15 rounded-full blur-[160px]" />
          <div className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] bg-accent-purple/15 rounded-full blur-[150px]" />
          <div className="cyber-grid absolute inset-0 opacity-[0.08]" />
        </div>
        {children}
      </body>
    </html>
  );
}
