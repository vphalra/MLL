import { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
// Removing unused imports
import Hero from './components/Hero'
import Industries from './components/Industries'
import Footer from './components/Footer'
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
      
      {/* Divider Section */}
      <div className="bg-[#2C2A28] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            <div className="mx-8">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="bg-[#2C2A28] py-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Benefits of Our Service</h2>
          <p className="text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            Here are the key benefits when choosing our services, designed to save you both time and money while providing comprehensive staffing solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Time Savings */}
            <div className="bg-[#23211f] rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Time Saved</h3>
              </div>
              <ul className="space-y-3">
                {timeBenefits.map((benefit, index) => (
                  <li key={index} className="text-gray-200 flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Money Savings */}
            <div className="bg-[#23211f] rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Money Saved</h3>
              </div>
              <ul className="space-y-3">
                {moneySavings.map((saving, index) => (
                  <li key={index} className="text-gray-200 flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    {saving}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Types */}
            <div className="bg-[#23211f] rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Our Services</h3>
              </div>
              <ul className="space-y-3">
                {serviceTypes.map((service, index) => (
                  <li key={index} className="text-gray-200 flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Competitive Edge */}
          <div className="bg-[#23211f] rounded-2xl p-8 shadow-lg mt-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-white mr-3" />
              <h3 className="text-2xl font-semibold text-white">Our Competitive Edge</h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Our competitive edge over other agencies is the capability to accommodate our clients with high volume when they need it most and the flexibility to reduce it when needed less, depending on client production quotas.
            </p>
          </div>
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
          <nav className='fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 py-2 my-2 mx-2 sm:mx-4 rounded-lg'>            
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
                    Process
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
                  Process
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
