import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import FloatingNavbar from './components/FloatingNavbar';


import Hero from './components/Hero';
import Mission from './components/Mission';
import Tracks from './components/Tracks';
import PreviousEvents from './components/PreviousEvents';
import Venue from './components/Venue';
import Protocol from './components/Protocol';
import Organizers from './components/Organizers';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-hack-bg min-h-screen text-white selection:bg-neon-blue selection:text-black">
      {loading ? (
        <Loader onLoadingComplete={() => setLoading(false)} />
      ) : (
        <>
          <FloatingNavbar />
          <Routes>
            <Route path="/" element={
              <>
                
                <Hero />
                <Mission />
                <Tracks />
                <PreviousEvents />
                <Protocol />
                <Organizers />
                <Footer />
              </>
            } />
            <Route path="/venue" element={<Venue />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
