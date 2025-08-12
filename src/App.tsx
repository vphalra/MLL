import { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
// Removing unused imports
import Hero from './components/Hero'
import IndustriesComponent from './components/Industries'
import Footer from './components/Footer'
import IndustriesCarousel from './components/IndustriesCarousel'
import manufacturingVideo from './assets/manufacturing.mp4'
import mllLogo from './assets/newlogo.png'
import Contact from './pages/Contact'
import Process from './pages/Process'
import About from './pages/About'
import Industries from './pages/Industries'
import { Menu, X } from 'lucide-react'

function Home() {
  const location = useLocation();
  const industriesRef = useRef<HTMLDivElement>(null);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    if (location.state) {
      console.log("Navigation state detected:", location.state);
      const state = location.state as any;
      
      if (state.scrollToIndustries || state.scrollToIndustry) {
        console.log("Scrolling to industries section");
        setTimeout(() => {
          if (industriesRef.current) {
            industriesRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
            
            if (state.scrollToIndustry && typeof state.industryIndex === 'number') {
              console.log("Selecting industry:", state.industryIndex);
              setTimeout(() => {
                const buttons = document.querySelectorAll('#industries-section .flex.justify-center.mt-8.space-x-2 button');
                console.log("Found industry buttons:", buttons.length);
                if (buttons && buttons[state.industryIndex]) {
                  console.log("Clicking button for industry:", state.industryIndex);
                  (buttons[state.industryIndex] as HTMLButtonElement).style.transition = 'all 0.3s ease';
                  (buttons[state.industryIndex] as HTMLButtonElement).click();
                }
              }, 1000);
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
        <IndustriesComponent />
      </div>
      
      <div className="bg-gray-800 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen lg:h-screen">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
                alt="Temporary staffing professionals working together"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="text-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 lg:py-0 -mt-2 lg:mt-0">
              <div className="max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight font-dmserif">
                  Temporary Staffing
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 leading-relaxed opacity-90 font-sans">
                  Whether you need temporary workers for seasonal demands, special projects, or extended absences, we have the people you've been looking for — pre-screened, trained, and ready to get to work. Discover why we were named the #1 temporary staffing agency in the U.S. by Forbes.
                </p>
                <button className="bg-white text-gray-800 font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base font-sans">
                  STAFFING SOLUTIONS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen lg:h-screen">
            <div className="text-gray-800 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 lg:py-0 order-2 lg:order-1 -mt-2 lg:mt-0">
              <div className="max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight font-dmserif">
                  On-site Workforce Management
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 leading-relaxed opacity-90 font-sans">
                  Looking to minimize daily challenges related to recruiting, onboarding, retention, and scheduling? As an on-site workforce partner, Kelly helps organizations offload hiring and team management tasks associated with a high-volume, temporary workforce.
                </p>
                <button className="bg-green-600 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm md:text-base font-sans">
                  ON-SITE SOLUTIONS
                </button>
              </div>
            </div>
            
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80"
                alt="On-site workforce management professionals"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-8 font-dmserif">
              Fluent in your fields and industries.
            </h2>
          </div>
          
          <IndustriesCarousel />
        </div>
      </div>

      <div className="bg-gray-800 py-12 md:py-16">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 font-dmserif">
            Ready to find the perfect workforce solution?
          </h2>
          <button className="bg-white text-gray-800 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-base md:text-lg font-sans">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Router>
      <AppContent mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} setMobileMenuOpen={setMobileMenuOpen} />
    </Router>
  )
}

function AppContent({ mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen }: { mobileMenuOpen: boolean, toggleMobileMenu: () => void, setMobileMenuOpen: (open: boolean) => void }) {
  const location = useLocation();
  const showVideoBackground = location.pathname === '/' || location.pathname === '/contact';

  return (
    <div className="relative">
      <div className={`fixed top-0 left-0 w-full h-screen -z-10 ${showVideoBackground ? 'block' : 'hidden'}`}>
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

      <div className="relative z-10 min-h-screen flex flex-col">
        <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300 h-20'>            
          <div className='w-full h-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12'>              
            <Link to="/" className='flex items-center group h-full'>                
              <img src={mllLogo} alt="MLL Service Inc." className="h-[140px] w-auto group-hover:opacity-80 transition-all duration-300 invert" />              
            </Link>              
            <button 
              className="md:hidden text-gray-700 p-2 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-center shadow-sm transition-all duration-300" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />                
              ) : (
                <Menu className="h-6 w-6" />                
              )}
            </button>
            <ul className='hidden md:flex list-none space-x-8 items-center'>
              <li>
                <Link to="/about" className="group text-gray-700 font-medium hover:text-gray-900 transition-all duration-300 relative font-dmserif">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/industries" className="group text-gray-700 font-medium hover:text-gray-900 transition-all duration-300 relative font-dmserif">
                  Industries
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/process" className="group text-gray-700 font-medium hover:text-gray-900 transition-all duration-300 relative font-dmserif">
                  Working with MLL
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="bg-gray-800 text-white px-6 py-2 font-bold uppercase tracking-wide hover:bg-gray-900 transition-all duration-300 shadow-sm hover:shadow-md font-dmserif">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div 
          className={`md:hidden bg-white/95 backdrop-blur-sm py-6 px-6 shadow-lg border border-gray-100 transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} fixed top-24 left-4 right-4 z-40 rounded-lg`}
        >
          <ul className='flex flex-col space-y-4'>
            <li className="border-b border-gray-100 pb-3">
              <Link 
                to="/about" 
                className="text-gray-700 text-lg font-medium flex items-center hover:text-gray-900 transition-colors duration-300 font-dmserif"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="border-b border-gray-100 pb-3">
              <Link
                to="/industries"
                className="text-gray-700 text-lg font-medium flex items-center hover:text-gray-900 transition-colors duration-300 font-dmserif"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
            </li>
            <li className="border-b border-gray-100 pb-3">
              <Link 
                to="/process" 
                className="text-gray-700 text-lg font-medium flex items-center hover:text-gray-900 transition-colors duration-300 font-dmserif"
                onClick={() => setMobileMenuOpen(false)}
              >
                Working with MLL
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="bg-gray-800 text-white px-6 py-3 font-bold uppercase tracking-wide hover:bg-gray-900 transition-all duration-300 shadow-sm text-center block font-dmserif"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        <div className="pt-20">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/process" element={<Process />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App