import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Format from './components/Format'
import Tracks from './components/Tracks'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import Registration from './components/Registration'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="bg-grid"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Format />
        <Tracks />
        <Timeline />
        <Prizes />
        <Registration />
      </main>
      <Footer />
    </div>
  )
}

export default App
