import React, { useState, useEffect } from 'react';

interface Industry {
  id: number;
  name: string;
  category: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: 1,
    name: 'Agriculture',
    category: 'Agriculture & Farming Workforce',
    image: 'https://imgur.com/c0obVt4.jpg'
  },
  {
    id: 2,
    name: 'Construction',
    category: 'Construction Workforce',
    image: 'https://imgur.com/pUEnMx4.jpg'
  },
  {
    id: 3,
    name: 'Landscaping',
    category: 'Professional Landscapers',
    image: 'https://imgur.com/mvhVUpj.jpg'
  },
  {
    id: 4,
    name: 'Labor Workforce',
    category: 'General Labor Workforce',
    image: 'https://imgur.com/Tac0Rs6.jpg'
  },
  {
    id: 5,
    name: 'Manufacturing',
    category: 'Industrial & Production',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600'
  },
  {
    id: 6,
    name: 'Retail',
    category: 'Customer Service & Sales',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600'
  }
];

const IndustriesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, industries.length - itemsPerView);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };



  const totalDots = maxIndex + 1;

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-200"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
          }}
        >
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="flex-shrink-0 px-1 md:px-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="relative group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white">
                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{industry.name}</h3>
                    <p className="text-xs md:text-sm opacity-90">{industry.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 md:mt-8 space-x-1.5 md:space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-[#2C2A28] scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustriesCarousel;