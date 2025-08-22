import { Link } from 'react-router-dom';

const Industries = () => {
  return (
    <section className="py-16 md:pt-24 md:pb-24 bg-white" id="industries">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional team collaboration and partnership" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Bringing expertise together with real partnership.
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                We believe the impact of the right job on your life is limitless. And for employers, the effect of the right talent on your business, at the right time, is just as big.
              </p>
              
              <p className="text-lg leading-relaxed">
                That's how we excel: by connecting people with great work that improves their lives, while also driving the success of the companies they choose. We bring it all together like no one else can.
              </p>
            </div>
            
            <div className="pt-4">
              <Link 
                to="/process" 
                className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 group"
              >
                Working with MLL Services Inc
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