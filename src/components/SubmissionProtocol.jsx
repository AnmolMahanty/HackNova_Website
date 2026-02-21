import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, AlertCircle, CheckCircle2, Terminal, ExternalLink, Timer, Users, BarChart3, RefreshCw } from "lucide-react";

// --- CONFIGURATION ---
const SUBMISSION_DEADLINE = "2026-02-28T23:59:59";
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxMX-3H-ee4NUpRbAdLojB49Sq3Kx72zlbgPkMTPTMhEEk4Pxdtb8L6iRv9AvVUPrXK/exec"; // Replace with your deployed script URL

// Track configuration with colors
const TRACK_CONFIG = [
  { name: "EDTECH", key: "EDTECH", color: "text-[#FFC800]", border: "border-[#FFC800]/30" },
  { name: "AI / ML", key: "AI_ML", color: "text-[#FF003C]", border: "border-[#FF003C]/30" },
  { name: "WEB / APP DEV", key: "WEB_APP_DEV", color: "text-[#00FF64]", border: "border-[#00FF64]/30" },
  { name: "CYBERTECH", key: "CYBERTECH", color: "text-[#B400FF]", border: "border-[#B400FF]/30" },
  { name: "OPEN INNOVATION", key: "OPEN_INNOVATION", color: "text-[#00F0FF]", border: "border-[#00F0FF]/30" },
];

const SubmissionProtocol = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [trackStats, setTrackStats] = useState(TRACK_CONFIG.map(track => ({ ...track, count: 0 })));
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);

  // Fetch submission counts from Google Apps Script
  const fetchSubmissionCounts = async () => {
    try {
      setError(null);
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Update track stats with fetched data
      const updatedStats = TRACK_CONFIG.map(track => ({
        ...track,
        count: data[track.key] || 0
      }));
      
      setTrackStats(updatedStats);
      setLastUpdated(new Date());
      setLoading(false);
    } catch (error) {
      console.error('Error fetching submission counts:', error);
      setError('Failed to load submission data');
      setLoading(false);
      
      // Fallback to default data if fetch fails
      setTrackStats(TRACK_CONFIG.map(track => ({ ...track, count: 0 })));
    }
  };

  // Calculate countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(SUBMISSION_DEADLINE) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fetch data on component mount and set up periodic updates
  useEffect(() => {
    fetchSubmissionCounts();
    
    // Update every 5 minutes
    const interval = setInterval(fetchSubmissionCounts, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Get total submissions
  const totalSubmissions = trackStats.reduce((sum, track) => sum + track.count, 0);

  // Format last updated time
  const formatLastUpdated = () => {
    if (!lastUpdated) return "Loading...";
    
    const now = new Date();
    const diff = Math.floor((now - lastUpdated) / 1000 / 60); // minutes ago
    
    if (diff < 1) return "Just now";
    if (diff < 60) return `${diff}m ago`;
    
    const hours = Math.floor(diff / 60);
    if (hours < 24) return `${hours}h ago`;
    
    return lastUpdated.toLocaleDateString();
  };

  return (
    <section className="py-24 px-6 relative bg-black/40 overflow-hidden min-h-screen flex flex-col items-center scanlines">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,216,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,216,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-6xl w-full relative z-10 pt-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Send className="text-neon-blue w-6 h-6 flicker" />
            <h2
              data-text="SUBMISSION PROTOCOL"
              className="glitch-text text-3xl md:text-5xl font-orbitron text-gray-200 tracking-wide uppercase"
            >
              SUBMISSION <span className="text-neon-blue">PROTOCOL</span>
            </h2>
          </motion.div>
          <p className="text-gray-500 font-mono text-xs md:text-sm max-w-2xl mx-auto uppercase">
            "Transmission of project data to the central node."
          </p>
        </div>

        {/* --- Countdown Timer Section --- */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/60 border border-cyber-red/20 rounded-xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-cyber-red/40 transition-all flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyber-red/10 rounded-full border border-cyber-red/30">
                <Timer className="w-8 h-8 text-cyber-red flicker" />
              </div>
              <div>
                <h3 className="text-lg font-orbitron text-white tracking-widest uppercase">Uplink Deadline</h3>
                <p className="text-gray-500 font-mono text-xs uppercase">Terminal countdown in progress...</p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-8">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HRS", value: timeLeft.hours },
                { label: "MIN", value: timeLeft.minutes },
                { label: "SEC", value: timeLeft.seconds },
              ].map((unit, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-2xl md:text-4xl font-orbitron text-white font-bold tracking-tighter tabular-nums">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono text-cyber-red tracking-widest uppercase">{unit.label}</span>
                </div>
              ))}
            </div>

            {/* Scanning line animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
              <div className="w-full h-1 bg-cyber-red absolute top-0 animate-[scan_3s_linear_infinite]" />
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
           {/* Track Statistics Selection - Left Column (spanning 2) */}
           <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-black/60 border border-white/10 rounded-xl p-6 backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <BarChart3 size={18} className="text-neon-blue" />
                <h3 className="text-sm font-orbitron text-white uppercase tracking-widest">Track Reports</h3>
              </div>
              <button 
                onClick={fetchSubmissionCounts}
                disabled={loading}
                className="text-neon-blue hover:text-white transition-colors disabled:opacity-50"
                title="Refresh data"
              >
                <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-xs font-mono">{error}</p>
              </div>
            )}
            
            <div className="space-y-4">
              {loading && !trackStats.length ? (
                // Loading skeleton
                Array(5).fill(0).map((_, i) => (
                  <div key={i} className="p-3 border border-white/10 bg-white/5 rounded-lg flex justify-between items-center animate-pulse">
                    <div className="flex items-center gap-3">
                       <div className="w-4 h-4 bg-gray-600 rounded"></div>
                       <div className="w-20 h-3 bg-gray-600 rounded"></div>
                    </div>
                    <div className="w-8 h-4 bg-gray-600 rounded"></div>
                  </div>
                ))
              ) : (
                trackStats.map((track, i) => (
                  <div key={i} className={`p-3 border ${track.border} bg-white/5 rounded-lg flex justify-between items-center group transition-all hover:bg-white/10`}>
                    <div className="flex items-center gap-3">
                       <Users size={14} className={track.color} />
                       <span className="text-xs font-mono text-gray-300">{track.name}</span>
                    </div>
                    <span className={`text-sm font-orbitron ${track.color} font-bold tabular-nums`}>
                      {track.count}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
                  Last Sync: {formatLastUpdated()}
                </span>
                <div className={`w-2 h-2 rounded-full ${error ? 'bg-red-500' : 'bg-neon-blue animate-pulse'}`} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-neon-purple/60 uppercase tracking-widest">
                  Total Submissions: {totalSubmissions}
                </span>
                <span className="text-[9px] font-mono text-gray-500 uppercase">
                  Auto-refresh: 5min
                </span>
              </div>
            </div>
          </motion.div>

          {/* Submission Panel - Right Column (spanning 3) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 bg-black/60 border border-neon-blue/20 rounded-xl p-8 backdrop-blur-md relative group hover:border-neon-blue/40 transition-all shadow-[0_0_50px_rgba(0,180,216,0.1)] flex flex-col justify-between"
          >
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <Terminal size={18} className="text-neon-blue" />
                  <h3 className="text-sm font-orbitron text-white tracking-wider uppercase">System_Check</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Project PPT in PDF format",
                    "GitHub Repository Link (Public)",
                    "Live Demo URL (if applicable)",
                    "Team ID & Member Details"
                  ].map((req, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 size={16} className="text-neon-blue mt-1 shrink-0" />
                      <span className="text-gray-400 font-mono text-sm uppercase">{req}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-neon-blue/5 border border-neon-blue/20 rounded-lg">
                  <div className="flex gap-3">
                    <AlertCircle size={18} className="text-neon-blue shrink-0" />
                    <p className="text-[10px] font-mono text-neon-blue/80 leading-relaxed uppercase">
                      Ensure all links are accessible. Private repositories = immediate disqualification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://forms.gle/tvxjk8LiWJ43bRVe8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue font-orbitron text-sm tracking-[0.2em] uppercase hover:bg-neon-blue/20 hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all flex items-center justify-center gap-3 group"
                >
                  INITIALIZE SUBMISSION <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-blue/50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-blue/50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-blue/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-blue/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionProtocol;

