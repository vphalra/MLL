import { Link } from 'react-router-dom';

const Industries = () => {
  return (
    <section className="pt-8 pb-16 md:pt-24 md:pb-24 bg-white" id="industries">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://imgur.com/ihUWgKl.jpg" 
                alt="Professional team collaboration and partnership" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Talent Matching, Rooted in Care.
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                At MLL Services Inc., our commitment transcends mere talent matching—it's grounded in genuine care for everyone we serve. We prioritize your unique needs, goals, and challenges throughout.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                We emphasize transparent communication, ethical practices, and strategic staffing, while championing diversity, equity, and inclusion for fair opportunities. Your story matters—let's shape it together. 
              </p>
            </div>
            
            <div className="-pt-5">
              <Link 
                to="/process" 
                className="inline-flex items-center text-sm md:text-base font-semibold text-blue-800 hover:text-blue-800 transition-colors duration-300 group"
              >
                Working with MLL Services Inc.
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;