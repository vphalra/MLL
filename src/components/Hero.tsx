import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';

  const Hero: React.FC = () => {
    const [animationStage, setAnimationStage] = useState(0);

    useEffect(() => {
      const timeouts = [
        setTimeout(() => setAnimationStage(1), 800),  // Fade in "Effective Staffing"
        setTimeout(() => setAnimationStage(2), 1400), // Slide in "Made Simple" on the same line
        setTimeout(() => setAnimationStage(3), 2000), // Fade in subtitle and buttons
      ];

      return () => timeouts.forEach(clearTimeout); // Cleanup on unmount
    }, []);

    return (
      <div className="hero-section min-h-[90vh] md:h-screen flex items-center justify-center px-4 py-8 md:py-0">
        <div className="hero-content text-center text-white max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold h-12 sm:h-16 md:h-20 flex items-center justify-center font-dmserif">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <span
                className={`inline-block transition-all duration-600 ease-in-out ${
                  animationStage >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-0'
                }`}
                style={{ whiteSpace: 'nowrap' }}
              >
                Effective Staffing
              </span>
              <span
                className={`inline-block transition-all duration-600 ease-in-out ${
                  animationStage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
                style={{ whiteSpace: 'nowrap' }}
              >
                Made Simple
              </span>
            </div>
          </h1>
          
          <p className={`text-base sm:text-lg md:text-xl mt-8 sm:mt-5 md:mt-6 mb-5 sm:mb-6 md:mb-7 max-w-2xl mx-auto transition-all duration-600 ease-in-out ${
            animationStage >= 3 ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          } font-dmserif`}>
            Empowering Your Business with the Right People
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 transition-all duration-600 ease-in-out ${
            animationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link
              to="/contact"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto text-center transform hover:scale-105 font-dmserif"
            >
              Request Services
            </Link>
            <Link
              to="/about"
              className="border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all w-full sm:w-auto text-center transform hover:scale-105 font-dmserif"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;