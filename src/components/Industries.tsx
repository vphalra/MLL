import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Factory, Leaf, Shirt, FlaskConical, HardHat } from 'lucide-react';

const industries = [
  {
    title: 'Manufacturing',
    description: 'Streamline your production with our skilled manufacturing workforce.',
    icon: Factory,
  },
  {
    title: 'Agriculture',
    description: 'Support your agricultural operations with experienced farm workers.',
    icon: Leaf,
  },
  {
    title: 'Textile',
    description: 'Enhance your textile production with our specialized labor solutions.',
    icon: Shirt,
  },
  {
    title: 'Chemical',
    description: 'Ensure safety and efficiency in your chemical processing facilities.',
    icon: FlaskConical,
  },
  {
    title: 'Construction',
    description: 'Build your projects with our reliable construction workforce.',
    icon: HardHat,
  },
];

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === industries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? industries.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="pt-50 pb-50 bg-[#2C2A28]" id="industries">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Industries We Serve</h2>
        <p className="text-white text-center mb-12">Providing specialized labor services across multiple sectors with expertise and professionalism.</p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="Previous industry"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="Next industry"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          {/* Industry Cards Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="flex flex-col items-center p-8 bg-white/5 rounded-xl backdrop-blur-sm">
                    <div className="mb-6 p-4 rounded-full bg-white/5">
                      {React.createElement(industry.icon, {
                        className: 'h-12 w-12 text-white',
                      })}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 text-center max-w-md">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries; 