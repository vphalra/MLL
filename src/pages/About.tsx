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
    <div className="min-h-screen bg-[#2C2A28] flex flex-col items-center py-16 px-2">
      <h1 className="text-4xl font-bold text-white text-center mb-2">About MLL Service Inc.</h1>
      <div className="w-full flex flex-col items-center">
        <p className="text-gray-200 text-center mb-12 max-w-2xl">
          Our mission is to serve and provide our clients with permanent efficiency by taking a deep dive into the nature of our client's industry. We identify where production is lacking, recruit the right resources, and provide the necessary attention required to maximize our clients' return on their investment.
        </p>
      </div>
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left: Larger Image */}
        <div className="flex justify-center">
          <img
            src={mllphoto}
            alt="MLL Service Inc."
            className="rounded-2xl object-cover w-full h-96 shadow-lg"
          />
        </div>
        {/* Right: Features Only */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">Excellence in Labor Solutions</h2>
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-[#23211f] p-6 flex flex-col shadow-lg">
                <div className="flex items-center mb-3">
                  {React.createElement(feature.icon, { className: 'h-6 w-6 text-white mr-3' })}
                  <span className="text-white font-semibold text-lg">{feature.title}</span>
                </div>
                <div className="text-gray-200 text-sm">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;