import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, ArrowRight, X, Target, Zap, TrendingUp, Image as ImageIcon } from "lucide-react";

const PreviousEvents = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: "01",
      title: "BUILD IT TOUR 2.0",
      description: "A nationwide initiative to foster innovation and hands-on building.",
      date: "SEP 27, 2025",
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
    },
    {
      id: "04",
      title: "CODE WARS",
      description: "Competitive programming battle for the algorithmic elite.",
      date: "DEC 05, 2023",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      details: {
        location: "LAB_BLOCK_A",
        briefing: "Intense algorithmic challenges designed to test logical thinking.",
        objectives: [
           "Identify top coding talent.",
           "Prepare students for competitive programming platforms like ICPC."
        ],
        highlights: [
            "300+ Participants.",
            "Real-time leaderboards."
        ],
        impact: "Significantly improved campus coding culture.",
        visuals: [
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80"
        ]
      }
    },
  ];

  return (
    <section id="legacy" ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col pt-32 md:pt-40 items-center overflow-hidden">
        
        {/* Header - Fixed to top left, fades out? No, keep it. */}
        <div className="absolute top-8 left-6 md:left-20 z-10 pointer-events-none">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-2 uppercase drop-shadow-lg">
                Past <span className="text-neon-blue">Events</span>
            </h2>
            <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-neon-blue"></div>
                <p className="text-gray-400 font-mono text-sm">Archived Mission Logs</p>
            </div>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div style={{ x }} className="flex flex-1 w-full">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onOpen={() => setSelectedEvent(event)} />
          ))}
        </motion.div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"></div>
      </div>

       {/* Detail Modal */}
       <AnimatePresence>
        {selectedEvent && (
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
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
                    <div className="w-full md:w-3/5 p-8 overflow-y-auto custom-scrollbar bg-[#050505] text-left">
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

const EventCard = ({ event, onOpen }) => {
  return (
    <div className="w-screen h-full flex items-center justify-center p-6 md:p-20 shrink-0">
        <div className="group relative w-full max-w-4xl h-[60vh] md:h-full max-h-[600px] flex flex-col md:flex-row bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors shadow-2xl">
            
            {/* Image Section (Half width or full bg?) Let's do Split like before but inside card */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
                 <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${event.image})` }}
                  ></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 
                 <div className="absolute top-4 left-4">
                     <span className="bg-black/60 border border-white/10 text-white text-xs font-mono px-2 py-1 rounded backdrop-blur-md">
                        {event.date}
                     </span>
                 </div>
            </div>

            {/* Content Section */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center bg-[#0a0f1f]">
                 {/* Decorative */}
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <h1 className="text-9xl font-black text-white font-orbitron">{event.id}</h1>
                 </div>

                 <div className="relative z-10">
                     <p className="text-neon-blue font-mono text-xs mb-2 tracking-widest uppercase">
                        // Archive File_{event.id}
                     </p>
                     <h3 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6 leading-none">
                        {event.title}
                     </h3>
                     <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                        {event.description}
                     </p>
                     
                     <div className="flex items-center gap-6">
                        <button 
                            onClick={onOpen}
                            className="bg-neon-blue text-black font-bold font-orbitron px-6 py-3 rounded hover:bg-white transition-colors flex items-center gap-2"
                        >
                            ACCESS DATA <ArrowRight size={18}/>
                        </button>
                        <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
                             <MapPin size={14}/>
                             {event.details.location}
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default PreviousEvents;
