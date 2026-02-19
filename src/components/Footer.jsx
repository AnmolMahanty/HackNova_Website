import { Github, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-orbitron text-white">
            HACK<span className="text-neon-blue">NOVA</span>
          </h3>
          <p className="text-gray-500 text-sm mt-2">© 2026 Technova Club. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Instagram /></a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Twitter /></a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Github /></a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Mail /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
