import { useState } from "react";
import { Github, Twitter, Instagram, Mail, Linkedin, Youtube, Check, Copy } from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e, text) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // ── VIDEO SECTION: transparent so global video shows through ──
    <footer className="relative bg-black/80 py-12 border-t border-neon-blue/20 backdrop-blur-sm scanlines">
      {/* Faint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              data-text="HACKNOVA"
              className="glitch-text text-3xl font-bold font-orbitron text-white inline-block"
            >
              HACK<span className="text-neon-blue">NOVA</span>
            </h3>
            <p className="text-gray-600 text-xs mt-2 font-mono">© 2026 Technova Club. All rights reserved.</p>
            <p className="text-gray-700 text-xs mt-1 font-mono">SSJCOE :: DOMBIVLI (E)</p>
          </div>

          {/* Status */}
          <div className="text-center font-mono text-xs text-neon-blue/50 space-y-1">
            <p className="flicker">SYSTEM_STATUS :: ONLINE</p>
            <p>17 MAR 2026 :: H-HOUR APPROACHING</p>
          </div>

          {/* Socials */}
          <div className="flex gap-6 items-center">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/technova_club?igsh=eG5ueDN4MTZycHhz" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/technova24/" },
              { Icon: Youtube, href: "https://www.youtube.com/@TechNova_Club" },
              { Icon: Mail, href: "mailto:technovaclub24@gmail.com", isMail: true }
            ].map(({ Icon, href, isMail }, i) => {
              const isExternal = !href.startsWith("mailto:");
              
              if (isMail) {
                 return (
                  <div key={i} className="relative group">
                    <button
                      onClick={(e) => handleCopy(e, "technovaclub24@gmail.com")}
                      className="text-gray-600 hover:text-neon-blue transition-colors hover:drop-shadow-[0_0_8px_#00F0FF] flex items-center justify-center"
                    >
                      {copied ? <Check size={20} className="text-green-500" /> : <Icon size={20} />}
                    </button>
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neon-blue/20 text-neon-blue text-[10px] font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-neon-blue/30 backdrop-blur-md">
                      {copied ? "COPIED!" : "COPY EMAIL"}
                    </div>
                  </div>
                 );
              }

              return (
                <a
                  key={i}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="text-gray-600 hover:text-neon-blue transition-colors hover:drop-shadow-[0_0_8px_#00F0FF]"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom separator */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-800 text-xs font-mono tracking-widest">
            &lt; POWERED BY TECHNOVA CLUB // BUILD.DISRUPT.SURVIVE /&gt;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
