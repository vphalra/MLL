import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className='hero-section h-screen flex items-center justify-center'>
      <div className='hero-content text-center text-white max-w-3xl mx-auto px-4'>
        <h1 className='text-5xl md:text-6xl font-bold mb-6'>
          Professional Labor Services
          <span className='block mt-2'>for Your Industry</span>
        </h1>
        <p className='text-xl mb-8 opacity-90'>MLL Service Inc. provides skilled labor solutions across manufacturing, agriculture, textile, chemical, and construction industries.</p>
        <div className='flex flex-wrap justify-center gap-4'>
          <button className='bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all'>Request Services</button>
          <button className='border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 