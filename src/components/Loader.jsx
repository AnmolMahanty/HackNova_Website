import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    "Initializing HACKNOVA Protocol...",
    "Loading Innovation Modules...",
    "Connecting Developers Nationwide...",
    "Access Granted"
  ];

  useEffect(() => {
    let currentText = messages[textIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          if (textIndex < messages.length - 1) {
            setTextIndex(prev => prev + 1);
            setIsTyping(true);
          } else {
            // End of sequence
            setTimeout(onLoadingComplete, 800);
          }
        }, 1000); // Pause before next line
      }
    }, 50); // Typing speed

    return () => clearInterval(typeInterval);
  }, [textIndex]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-neon-blue font-orbitron"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-2xl p-8 border border-neon-blue/30 bg-black/90 shadow-[0_0_30px_rgba(0,240,255,0.1)] rounded-sm relative">
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-blue"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-blue"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-blue"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-blue"></div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-neon-purple/70 font-mono">
            <span>root@hacknova:~#</span>
            <span className="animate-pulse">_</span>
          </div>

          <motion.div 
            key={textIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold tracking-wider text-white"
          >
            {displayedText}
            <span className="animate-pulse text-neon-blue">|</span>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-900 mt-8 overflow-hidden">
            <motion.div
              className="h-full bg-neon-blue box-shadow-[0_0_10px_#00F0FF]"
              initial={{ width: "0%" }}
              animate={{ width: `${((textIndex + 1) / messages.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
