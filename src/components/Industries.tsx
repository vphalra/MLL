import { useState } from 'react';
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
    <section className="py-16 md:pt-24 md:pb-24 bg-[#2C2A28]" id="industries">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 md:mb-12">Industries We Serve</h2>
        
        <p className="text-white text-center mb-8 md:mb-12 max-w-2xl mx-auto">Providing specialized labor services across multiple sectors with expertise and professionalism.</p>
        
        <div className="relative max-w-4xl mx-auto px-10">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-400 transition-colors"
            aria-label="Previous industry"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-400 transition-colors"
            aria-label="Next industry"
          >
            <ChevronRight size={32} />
          </button>
          
          {/* Industry Cards */}
          <div className="overflow-hidden">
            <div className="flex transition-all duration-500 ease-in-out">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div 
                    key={index}
                    className={`w-full flex-shrink-0 transition-all duration-500 transform ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-20 scale-95'}`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    <div className="bg-gray-500/20 backdrop-blur-md rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-white/10">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6 mx-auto">
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white text-center mb-4">{industry.title}</h3>
                      <p className="text-gray-300 text-center">{industry.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
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