import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimationStage(1), 1000),  // Move "Simple" to position
      setTimeout(() => setAnimationStage(2), 1800),  // Animate in "We Make Staffing"
      setTimeout(() => setAnimationStage(3), 2600),  // Animate in the period
      setTimeout(() => setAnimationStage(4), 3200),  // Show subtitle
      setTimeout(() => setAnimationStage(5), 3800),  // Show buttons
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className='hero-section min-h-[90vh] md:h-screen flex items-center justify-center px-4 py-16 md:py-0'>
      <div className='hero-content text-center text-white max-w-3xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-0 relative h-16 sm:h-20 md:h-24'>
          {/* Stage 0: "Simple" centered */}
          <span 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-800 ease-out ${
              animationStage === 0 ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full'
            }`}
          >
            Simple.
          </span>
          
          {/* Stage 1+: Full phrase with individual word animations */}
          <div className={`transition-opacity duration-500 ${
            animationStage >= 1 ? 'opacity-100' : 'opacity-0'
          }`}>
            <span 
              className={`inline-block mr-2 sm:mr-3 md:mr-4 transition-all duration-600 ease-out ${
                animationStage >= 2 ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
              }`}
            >
              We
            </span>
            <span 
              className={`inline-block mr-2 sm:mr-3 md:mr-4 transition-all duration-600 ease-out delay-100 ${
                animationStage >= 2 ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
              }`}
            >
              Make
            </span>
            <span 
              className={`inline-block mr-2 sm:mr-3 md:mr-4 transition-all duration-600 ease-out delay-200 ${
                animationStage >= 2 ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
              }`}
            >
              Staffing
            </span>
            <span 
              className={`inline-block transition-all duration-600 ease-out ${
                animationStage >= 1 ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
              }`}
            >
              Simple.
            </span>
          </div>
        </h1>
        
        <p className={`text-base sm:text-lg md:text-xl mt-6 sm:mt-4 md:mt-2 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto transition-all duration-600 ease-out ${
          animationStage >= 4 ? 'opacity-90 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          Empowering Your Business with the Right People
        </p>
        
        <div className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 transition-all duration-600 ease-out ${
          animationStage >= 5 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <Link to="/contact" className='bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto text-center transform hover:scale-105'>
            Request Services
          </Link>
          <Link to="/about" className='border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all w-full sm:w-auto text-center transform hover:scale-105'>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;