import { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Footer from './components/Footer';
import manufacturingVideo from './assets/manufacturing.mp4';
import Contact from './pages/Contact';
import RequestServices from './pages/RequestServices';
import Process from './pages/Process';
import About from './pages/About';

function Home() {
  const location = useLocation();
  const industriesRef = useRef<HTMLDivElement>(null);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    // Check if we need to scroll to industries section
    if (location.state) {
      console.log("Navigation state detected:", location.state);
      const state = location.state as any;
      
      if (state.scrollToIndustries || state.scrollToIndustry) {
        console.log("Scrolling to industries section");
        setTimeout(() => {
          if (industriesRef.current) {
            industriesRef.current.scrollIntoView({ behavior: 'smooth' });
            
            // If we also need to show a specific industry
            if (state.scrollToIndustry && typeof state.industryIndex === 'number') {
              console.log("Selecting industry:", state.industryIndex);
              setTimeout(() => {
                const buttons = document.querySelectorAll('#industries-section .flex.justify-center.mt-8.space-x-2 button');
                console.log("Found industry buttons:", buttons.length);
                if (buttons && buttons[state.industryIndex]) {
                  console.log("Clicking button for industry:", state.industryIndex);
                  (buttons[state.industryIndex] as HTMLButtonElement).click();
                }
              }, 800);
            }
          } else {
            console.log("Industries ref not found");
          }
        }, 300);
      }
    }
  }, [location, initialRender]);

  return (
    <>
      <Hero />
      <div ref={industriesRef} id="industries-section">
        <Industries />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Video Background */}
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={manufacturingVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <nav className='flex justify-between items-center p-4'>
            <Link to="/" className='text-3xl font-bold text-white hover:underline'>MLL Service Inc.</Link>
            <ul className='flex list-none'>
              <li className='p-4'>
                <Link to="/about" className="group text-white transition-all duration-300 ease-in-out hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:scale-110 transform inline-block">
                  About
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </Link>
              </li>
              <li className='p-4'>
                <Link
                  to="/"
                  state={{ scrollToIndustries: true }}
                  className="group text-white transition-all duration-300 ease-in-out hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:scale-110 transform inline-block"
                >
                  Industries
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </Link>
              </li>
              <li className='p-4'>
                <Link to="/process" className="group text-white transition-all duration-300 ease-in-out hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:scale-110 transform inline-block">
                  Process
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </Link>
              </li>
              <li className='p-4'>
                <Link to="/contact" className="group text-white transition-all duration-300 ease-in-out hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:scale-110 transform inline-block">
                  Contact
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </Link>
              </li>
              <li className='p-4'>
                <Link to="/request-services" className="group text-white transition-all duration-300 ease-in-out hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:scale-110 transform inline-block">
                  Request Services
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/request-services" element={<RequestServices />} />
              <Route path="/process" element={<Process />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

/* Add custom styles to index.css */
/* @layer utilities {
  .text-shadow-glow {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.7), 0 0 12px rgba(255, 255, 255, 0.5);
  }
} */

export default App;