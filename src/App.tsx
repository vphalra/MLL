import { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
// Removing unused imports
import Hero from './components/Hero'
import Industries from './components/Industries'
import Footer from './components/Footer'
import IndustriesCarousel from './components/IndustriesCarousel'
import manufacturingVideo from './assets/manufacturing.mp4'
import Contact from './pages/Contact'
import Process from './pages/Process'
import About from './pages/About'
import { Menu, X, Clock, DollarSign, Briefcase, TrendingUp } from 'lucide-react'

// Benefits data for home page
const timeBenefits = [
  'Payroll Management',
  'Talent Acquisition',
  'Turnover Rate Replacement'
];

const moneySavings = [
  'Workers\' Compensation Insurance',
  'Taxes',
  'Employee Benefits'
];

const serviceTypes = [
  'Temporary Staffing',
  'Seasonal Work',
  'Project-Based',
  'Homework Solutions'
];

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
            // Improved smooth scrolling with better options
            industriesRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
            
            // If we also need to show a specific industry
            if (state.scrollToIndustry && typeof state.industryIndex === 'number') {
              console.log("Selecting industry:", state.industryIndex);
              // Increased timeout to ensure scrolling completes before clicking
              setTimeout(() => {
                const buttons = document.querySelectorAll('#industries-section .flex.justify-center.mt-8.space-x-2 button');
                console.log("Found industry buttons:", buttons.length);
                if (buttons && buttons[state.industryIndex]) {
                  console.log("Clicking button for industry:", state.industryIndex);
                  // Add smooth transition for button click
                  (buttons[state.industryIndex] as HTMLButtonElement).style.transition = 'all 0.3s ease';
                  (buttons[state.industryIndex] as HTMLButtonElement).click();
                }
              }, 1000); // Increased from 800ms to 1000ms for smoother experience
            }
          } else {
            console.log("Industries ref not found");
          }
        }, 300);
      }
    }
  }, [location, initialRender]);

  // Removing unused function

  return (
    <>
      <Hero />
      <div ref={industriesRef} id="industries-section">
        <Industries />
      </div>
      
      {/* Temporary Staffing Section */}
      <div className="bg-[#2C2A28] lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen lg:h-screen">
            {/* Left: Image */}
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
                alt="We Make Staffing Simple."
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Right: Content */}
            <div className="text-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 lg:py-0 -mt-2 lg:mt-0">
              <div className="max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                  Temporary Staffing
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 leading-relaxed opacity-90">
                  Whether you need temporary workers for seasonal demands, special projects, or extended absences, we have the people you've been looking for — pre-screened, trained, and ready to get to work. Discover why we were named the #1 temporary staffing agency in the U.S. by Forbes.
                </p>
                <button className="bg-white text-[#2C2A28] font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
                  STAFFING SOLUTIONS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* On-site Workforce Management Section */}
      <div className="bg-white lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen lg:h-screen">
            {/* Left: Content */}
            <div className="text-[#2C2A28] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 lg:py-0 order-2 lg:order-1 -mt-2 lg:mt-0">
              <div className="max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                  On-site Workforce Management
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 leading-relaxed opacity-90">
                  Looking to minimize daily challenges related to recruiting, onboarding, retention, and scheduling? As an on-site workforce partner, Kelly helps organizations offload hiring and team management tasks associated with a high-volume, temporary workforce.
                </p>
                <button className="bg-green-600 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm md:text-base">
                  ON-SITE SOLUTIONS
                </button>
              </div>
            </div>
            
            {/* Right: Image */}
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

      {/* Industries We Serve Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2A28] mb-4 md:mb-8">
              Fluent in your fields and industries.
            </h2>
          </div>
          
          <IndustriesCarousel />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#2C2A28] py-12 md:py-16">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 font-sans">
            Ready to find the perfect workforce solution?
          </h2>
          <button className="bg-white text-[#2C2A28] font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-base md:text-lg font-sans">
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
          {/* Fixed Navigation Bar with Glass Blur Effect */}
          <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 py-2 my-2 mx-2 sm:mx-4 rounded-lg'>            
            <div className='w-full flex justify-between items-center px-3 sm:px-5 md:px-8 lg:px-12'>              
              <Link to="/" className='flex items-center space-x-1 sm:space-x-2 group'>                
                <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center shadow-md group-hover:bg-white/20 transition-all duration-300">                  
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">                    
                    <path d="M8 8L32 32" stroke="white" strokeWidth="2"/>                    
                    <path d="M8 8H32V32H8V8Z" stroke="white" strokeWidth="2"/>                  
                  </svg>                
                </div>                
                <span className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white truncate group-hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-300'>MLL Service Inc.</span>              
              </Link>              
              
              {/* Mobile menu button */}
              <button                 
                className="md:hidden text-white p-2 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md hover:bg-white/20 transition-all duration-300"                 
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (                  
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />                
                ) : (                  
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />                
                )}
              </button>

              {/* Desktop Navigation */}
              <ul className='hidden md:flex md:flex-wrap list-none space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-6 xl:space-x-8 items-center justify-end'>
                <li className='px-1 sm:px-1.5 md:px-2 py-2'>
                  <Link to="/about" className="group text-white text-xs sm:text-sm lg:text-base transition-all duration-300 ease-in-out hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:scale-110 transform inline-block whitespace-nowrap">
                    About
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                  </Link>
                </li>
                <li className='px-1 sm:px-1.5 md:px-2 py-2'>
                  <Link
                    to="/"
                    state={{ scrollToIndustries: true }}
                    className="group text-white text-xs sm:text-sm lg:text-base transition-all duration-300 ease-in-out hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:scale-110 transform inline-block whitespace-nowrap"
                  >
                    Industries
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                  </Link>
                </li>
                <li className='px-1 sm:px-1.5 md:px-2 py-2'>
                  <Link to="/process" className="group text-white text-xs sm:text-sm lg:text-base transition-all duration-300 ease-in-out hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:scale-110 transform inline-block whitespace-nowrap">
                    Working with MLL
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                  </Link>
                </li>
                <li className='px-1 sm:px-1.5 md:px-2 py-2'>
                  <Link to="/contact" className="group text-white text-xs sm:text-sm lg:text-base transition-all duration-300 ease-in-out hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:scale-110 transform inline-block whitespace-nowrap">
                    Contact
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden bg-black/20 backdrop-blur-md py-4 sm:py-6 px-4 sm:px-6 rounded-lg mx-2 sm:mx-4 my-2 shadow-lg border border-white/10 transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} fixed top-16 sm:top-20 left-0 right-0 z-40`}
          >
            <ul className='flex flex-col space-y-4'>
              <li className="border-b border-white/10 pb-3">
                <Link 
                  to="/about" 
                  className="text-white text-lg font-medium flex items-center hover:text-white/70 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="border-b border-white/10 pb-3">
                <Link
                  to="/"
                  state={{ scrollToIndustries: true }}
                  className="text-white text-lg font-medium flex items-center hover:text-white/70 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Industries
                </Link>
              </li>
              <li className="border-b border-white/10 pb-3">
                <Link 
                  to="/process" 
                  className="text-white text-lg font-medium flex items-center hover:text-white/70 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Working with MLL
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white text-lg font-medium flex items-center hover:text-white/70 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Add padding to account for fixed navbar */}
          <div className="pt-20">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/process" element={<Process />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
