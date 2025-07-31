import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className='hero-section min-h-[90vh] md:h-screen flex items-center justify-center px-4 py-16 md:py-0'>
      <div className='hero-content text-center text-white max-w-3xl mx-auto'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6'>
          Professional Labor Services
          <span className='block mt-2'>for Your Industry</span>
        </h1>
        <p className='text-lg sm:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto'>
          Temporary Agency Committed to serve and provide efficiency Permanently.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6'>
          <Link to="/contact" className='bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto text-center'>
            Request Services
          </Link>
          <Link to="/about" className='border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all w-full sm:w-auto text-center'>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;