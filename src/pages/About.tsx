import React from 'react';
import { ShieldCheck, Users, Target } from 'lucide-react';
import mllphoto from '../assets/mll-photo.avif';

const features = [
  {
    icon: ShieldCheck,
    title: 'Deep Industry Analysis',
    description: 'We take a deep dive into the nature of our client\'s industry, understanding production, operations, and goals to identify where efficiency can be improved.'
  },
  {
    icon: Users,
    title: 'Strategic Resource Recruitment',
    description: 'We recruit the right resources and provide manual attention required to produce potential efficiency permanently.'
  },
  {
    icon: Target,
    title: 'Permanent Efficiency Solutions',
    description: 'Our mission is to serve clients with permanent efficiency through tailored solutions that address specific production challenges.'
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Centered About Section */}
      <div className="flex flex-col items-center py-16 px-4 bg-transparent">
        <h1 className="text-4xl font-bold text-white text-center mb-2">About MLL Service Inc.</h1>
        <div className="w-full flex flex-col items-center">
          <p className="text-gray-200 text-center mb-12 max-w-2xl">
            Our mission is to serve and provide our clients with permanent efficiency by taking a deep dive into the nature of our client's industry. We identify where production is lacking, recruit the right resources, and provide the necessary attention required to maximize our clients' return on their investment.
          </p>
        </div>
      </div>
      
      {/* Excellence in Labor Solutions Section - Home Page Style */}
      <div className="bg-[#2C2A28] lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen lg:h-screen">
            {/* Left: Image */}
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
              <img
                src={mllphoto}
                alt="MLL Service Inc. - Excellence in Labor Solutions"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Right: Content */}
            <div className="text-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 lg:py-0 -mt-2 lg:mt-0">
              <div className="max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                  Excellence in Labor Solutions
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex items-start space-x-3">
                      {React.createElement(feature.icon, { className: 'h-5 w-5 sm:h-6 sm:w-6 text-white mt-1 flex-shrink-0' })}
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1">{feature.title}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;