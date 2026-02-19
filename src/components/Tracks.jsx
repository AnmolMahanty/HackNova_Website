import { motion } from "framer-motion";
import { Brain, BookOpen, Globe, Shield, Lightbulb, Swords } from "lucide-react";

const Tracks = () => {
  const tracks = [
    {
      title: "EDTECH",
      description: "Revolutionizing the way we learn.",
      icon: <BookOpen className="w-10 h-10" />,
      color: "hover:border-[#FFC800] hover:shadow-[0_0_20px_rgba(255,200,0,0.5)]",
      iconColor: "text-[#FFC800]"
    },
    {
      title: "AI / ML",
      description: "Build intelligent systems and smart solutions.",
      icon: <Brain className="w-10 h-10" />,
      color: "hover:border-[#FF003C] hover:shadow-[0_0_20px_rgba(255,0,60,0.5)]",
      iconColor: "text-[#FF003C]"
    },
    {
      title: "WEB / APP DEV",
      description: "Create decentralized or impactful web & mobile builds.",
      icon: <Globe className="w-10 h-10" />,
      color: "hover:border-[#00FF64] hover:shadow-[0_0_20px_rgba(0,255,100,0.5)]",
      iconColor: "text-[#00FF64]"
    },
    {
      title: "Cybertech",
      description: "Securing the digital frontier.",
      icon: <Shield className="w-10 h-10" />,
      color: "hover:border-[#B400FF] hover:shadow-[0_0_20px_rgba(180,0,255,0.5)]",
      iconColor: "text-[#B400FF]"
    },
    {
      title: "OPEN INNOVATION",
      description: "Solve real-world problems with your unique ideas.",
      icon: <Lightbulb className="w-10 h-10" />,
      color: "hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]",
      iconColor: "text-[#00F0FF]"
    },
  ];

  return (
    <section id="tracks" className="py-24 px-4 bg-[#0a0f1f] relative overflow-hidden flex flex-col items-center">
       {/* Background Noise/Effect */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0"></div>
       
      <div className="max-w-6xl w-full z-10 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-3 mb-2"
            >
                <Swords className="w-8 h-8 text-[#FF4D00]" />
                <h2 className="text-4xl md:text-5xl font-orbitron text-white tracking-wide">
                    EVENT TRACKS
                </h2>
            </motion.div>
            <p className="text-gray-500 tracking-[0.3em] font-mono text-xs md:text-sm uppercase">
                CHOOSE YOUR BATTLEFIELD
            </p>
        </div>

        {/* Grid/Flex Layout for Centering */}
        <div className="flex flex-wrap justify-center gap-8">
            {tracks.map((track, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative w-full md:w-[calc(33.333%-2rem)] max-w-sm h-72 bg-black/40 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 backdrop-blur-md group transition-all duration-300 ${track.color} cursor-pointer hover:-translate-y-2`}
                >
                    {/* Centered Icon with Glow & Scale Effect */}
                    <div className={`mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-[0_0_20px_currentColor] ${track.iconColor} shadow-none`}>
                        <div className={`${track.iconColor} drop-shadow-[0_0_8px_currentColor]`}>
                             {track.icon}
                        </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold font-orbitron text-white mb-3 text-center tracking-wide">
                        {track.title}
                    </h3>
                    <p className="text-gray-400 text-sm text-center font-mono leading-relaxed group-hover:text-gray-300 transition-colors">
                        {track.description}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
