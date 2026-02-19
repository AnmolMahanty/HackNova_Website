import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, MapPin, Target, Zap, TrendingUp, Image as ImageIcon } from "lucide-react";

const PreviousEvents = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: "01",
      title: "BUILD IT TOUR 2.0",
      description: "A nationwide initiative to foster innovation and hands-on building.",
      date: "SEP 27, 2025",
      status: "RESTORED",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      details: {
        location: "MUMBAI_HQ",
        briefing: "The exclusive curtain-raiser for the main Build It initiative.",
        objectives: [
           "Introduce vision and goals of the Build It initiative.",
           "Interaction with industry experts and mentors.",
           "Foster enthusiasm ahead of the main hackathon."
        ],
        highlights: [
            "Talks by Industry Leaders on future tech.",
            "Hands-on workshops for physical computing."
        ],
        impact: "Inspired over 500+ participants to start building hardware projects.",
        visuals: [
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80"
        ]
      }
    },
    {
      id: "02",
      title: "HACKNOVA 1.0",
      description: "The inaugural chapter where it all began. 24 hours of pure code.",
      date: "NOV 15, 2024",
      status: "ARCHIVED",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      details: {
        location: "TECHNOVA_CAMPUS",
        briefing: "The first-ever 24-hour hackathon that started a movement.",
        objectives: [
           "Provide a platform for rapid prototyping.",
           "Connect students with mentorship opportunities.",
           "Solve real-world problem statements."
        ],
        highlights: [
            "24 Hours of non-stop coding.",
            "Participation from 30+ colleges."
        ],
        impact: "Created 50+ deployable prototypes in a single day.",
        visuals: [
            "https://images.unsplash.com/photo-1504384308090-c54be3855833?w=400&q=80",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
        ]
      }
    },
    {
      id: "03",
      title: "TECHNOVA 2024",
      description: "Annual technical symposium featuring workshops and project expos.",
      date: "MAR 10, 2024",
      status: "COMPLETED",
      image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?w=800&q=80",
      details: {
        location: "MAIN_AUDITORIUM",
        briefing: "A celebration of technology, culture, and innovation.",
        objectives: [
           "Showcase student projects to a wider audience.",
           "Technical workshops on AI and Blockchain."
        ],
        highlights: [
            "Project Expo with 100+ stalls.",
            "Keynote sessions by Alumni."
        ],
        impact: "Bridged the gap between academia and industry requirements.",
        visuals: [
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
            "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80"
        ]
      }
    }
  ];

  const handleOpenModal = () => {
      const progress = scrollYProgress.get();
      const total = events.length;
      // Calculate current index based on scroll progress
      // Clamp index between 0 and total-1
      let index = Math.floor(progress * total);
      if (index >= total) index = total - 1;
      if (index < 0) index = 0;
      
      setSelectedEvent(events[index]);
  };

  return (
    <section id="legacy" ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left: Dynamic Image Display */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm group">
             {/* Scanlines Effect */}
             <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-5 mix-blend-overlay pointer-events-none z-20"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1 w-full animate-[scan_2s_linear_infinite] z-20"></div>
             
             {/* Text Overlay Top Right */}
             <div className="absolute top-4 right-4 bg-black/80 px-2 py-1 border border-white/20 text-[10px] font-mono text-white z-30">
               {/* Change Date dynamically based on scroll */}
               <DynamicContent scrollYProgress={scrollYProgress} events={events} field="date" />
             </div>

             {events.map((event, index) => (
                <ImagePanel 
                    key={event.id} 
                    event={event} 
                    index={index} 
                    total={events.length} 
                    scrollYProgress={scrollYProgress} 
                />
             ))}
             
             {/* Glitch Overlay on Hover */}
             <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-10 transition-opacity z-10 mix-blend-color-dodge"></div>
          </div>

          {/* Right: Terminal Text Content */}
          <div className="flex flex-col justify-center h-full">
             <div className="mb-8">
                 <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2 leading-tight">
                    <DynamicContent scrollYProgress={scrollYProgress} events={events} field="title" />
                 </h2>
                 <div className="h-1 w-20 bg-neon-blue mb-6"></div>
                 
                 <div className="font-mono text-gray-400 space-y-2 text-sm md:text-base">
                    <p>&gt; ACCESSING_MEMORY_BLOCK...</p>
                    <p>&gt; DECRYPTING_VISUALS...</p>
                    <p className="text-white">
                        &gt; STATUS: <span className="text-neon-green">
                            <DynamicContent scrollYProgress={scrollYProgress} events={events} field="status" />
                        </span>
                    </p>
                 </div>
             </div>

             <div className="border-l-2 border-white/20 pl-6 py-2">
                 <p className="text-gray-300 font-light text-lg">
                    <DynamicContent scrollYProgress={scrollYProgress} events={events} field="description" />
                 </p>
             </div>

             <div className="mt-12 flex items-center gap-4">
                 <p className="font-mono text-xs text-gray-500">
                    ID: ARCHIVE <DynamicContent scrollYProgress={scrollYProgress} events={events} field="id" />
                 </p>
                 <button 
                    onClick={handleOpenModal}
                    className="px-4 py-2 border border-white/20 text-xs font-mono text-white hover:bg-neon-blue/20 hover:border-neon-blue transition-all uppercase tracking-widest cursor-pointer"
                 >
                    Access Data &gt;_
                 </button>
             </div>
          </div>
        </div>
      </div>
      
      {/* Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-5xl bg-[#0a0f1f] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
                >
                    {/* Left: Image & Title */}
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <img 
                            src={selectedEvent.image} 
                            alt={selectedEvent.title} 
                            className="w-full h-full object-cover filter grayscale contrast-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 p-4">
                             <div className="inline-block px-2 py-1 border border-white/30 text-[10px] font-mono text-white/70 mb-2 backdrop-blur-md">
                                CASE FILE: ARCHIVE {selectedEvent.id}
                             </div>
                             <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white leading-none mb-2">
                                {selectedEvent.title}
                             </h2>
                             <div className="flex items-center gap-4 text-xs font-mono text-neon-blue">
                                <span className="flex items-center gap-1"><MapPin size={12}/> {selectedEvent.details.location}</span>
                                <span>{selectedEvent.date}</span>
                             </div>
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="w-full md:w-3/5 p-8 overflow-y-auto custom-scrollbar bg-[#050505]">
                        <button 
                            onClick={() => setSelectedEvent(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-8">
                             <p className="text-[10px] font-mono text-text-neon-yellow uppercase tracking-widest mb-2 text-yellow-500/80">
                                // BRIEFING
                             </p>
                             <p className="text-xl text-gray-200 font-light leading-relaxed">
                                {selectedEvent.details.briefing}
                             </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-orbitron text-white mb-4 border-b border-white/10 pb-2">
                                    <Target size={14} className="text-neon-purple"/> OBJECTIVES
                                </h4>
                                <ul className="space-y-2">
                                    {selectedEvent.details.objectives.map((obj, i) => (
                                        <li key={i} className="text-xs md:text-sm text-gray-400 border-l border-white/10 pl-3">
                                            {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div>
                                <h4 className="flex items-center gap-2 text-sm font-orbitron text-white mb-4 border-b border-white/10 pb-2">
                                    <Zap size={14} className="text-neon-blue"/> HIGHLIGHTS
                                </h4>
                                <ul className="space-y-2">
                                    {selectedEvent.details.highlights.map((item, i) => (
                                        <li key={i} className="text-xs md:text-sm text-gray-400">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mb-8">
                             <h4 className="flex items-center gap-2 text-sm font-orbitron text-white mb-2">
                                <TrendingUp size={14} className="text-green-400"/> IMPACT
                             </h4>
                             <p className="text-sm text-gray-400">
                                {selectedEvent.details.impact}
                             </p>
                        </div>

                        <div>
                             <h4 className="flex items-center gap-2 text-sm font-orbitron text-white mb-4">
                                <ImageIcon size={14} className="text-gray-400"/> VISUAL EVIDENCE
                             </h4>
                             <div className="flex gap-4 overflow-x-auto pb-2">
                                {selectedEvent.details.visuals.map((img, i) => (
                                    <img 
                                        key={i}
                                        src={img} 
                                        alt="evidence" 
                                        className="h-24 w-40 object-cover rounded-md border border-white/10 opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                ))}
                             </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

    </section>
  );
};

// Helper Components for Cleaner Main Function

const ImagePanel = ({ event, index, total, scrollYProgress }) => {
    // Show image based on scroll range
    const rangeStart = index / total;
    const rangeEnd = (index + 1) / total;
    
    // We use a transform here to toggle visibility/opacity smoothly or just switch
    // Simple switch logic: opacity 1 if within range
    const opacity = useTransform(scrollYProgress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [0, 1, 1, 0]);
    // Since ranges overlap slightly in useTransform, we might need cleaner steps for a hard switch or smooth fade
    // Let's try a simpler approach: Opacity is 1 if current scroll is in this index's slot
    
    // Actually, simple fade in/out stack is better
    // index 0: 0 to 0.33
    // index 1: 0.33 to 0.66
    // index 2: 0.66 to 1.0
    
    // Modifying ranges slightly to ensure overlap or clean cut
    const fadeIn = useTransform(scrollYProgress, [rangeStart, rangeStart + 0.05], [0, 1]);
    const fadeOut = useTransform(scrollYProgress, [rangeEnd - 0.05, rangeEnd], [1, 0]);
    
    // Combine logic is tricky with hooks. Let's simplify: 
    // Just stack them absolute, and control opacity.
    // The first one should be visible initially.
    
    return (
        <motion.img 
            src={event.image} 
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
            style={{ 
                opacity: index === 0 ? useTransform(scrollYProgress, [0, 0.3, 0.35], [1, 1, 0]) : 
                         index === total - 1 ? useTransform(scrollYProgress, [0.65, 0.7, 1], [0, 1, 1]) :
                         useTransform(scrollYProgress, [0.3, 0.35, 0.65, 0.7], [0, 1, 1, 0])
            }} 
        />
    );
}

const DynamicContent = ({ scrollYProgress, events, field }) => {
    // We need to render different text based on scroll position.
    // Since we can't conditionally render text inside a single motion value easily for complex strings,
    // we render all of them absolutely positioned or use a state-based approach triggered by onchange.
    // However, typical sticky scroll approach is to map opacity of different text blocks.
    
    // Let's retry: Render 3 different text blocks in the same position and fade them in/out.
    // But wrapping that in a precise "DynamicContent" component is cleaner if it handles the map logic.
    
    return (
        <span className="relative inline-block w-full"> 
            {events.map((event, index) => {
                 const total = events.length;
                 // Logic for opacity: visible only during its slot
                 // Slot 0: 0 - 0.33
                 // Slot 1: 0.33 - 0.66
                 // Slot 2: 0.66 - 1.0
                 
                 let inputRange = [0, 0]; 
                 let outputRange = [0, 0];
                 
                 if (index === 0) {
                     inputRange = [0, 0.3, 0.35];
                     outputRange = [1, 1, 0];
                 } else if (index === total - 1) {
                     inputRange = [0.65, 0.7, 1];
                     outputRange = [0, 1, 1];
                 } else {
                     inputRange = [0.3, 0.35, 0.65, 0.7];
                     outputRange = [0, 1, 1, 0];
                 }
                 
                 return (
                    <motion.span 
                        key={index}
                        className={`absolute top-0 left-0 w-full ${index === 0 ? 'relative' : ''}`} // First one relative to give height
                        style={{ opacity: useTransform(scrollYProgress, inputRange, outputRange) }}
                    >
                        {event[field]}
                    </motion.span>
                 )
            })}
        </span>
    );
};

export default PreviousEvents;
