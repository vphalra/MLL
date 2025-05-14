import React from 'react';
import { ShieldCheck, Users, Target, Award } from 'lucide-react';
import mllphoto from '../assets/mll-photo.avif';

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Rigorous screening and training processes ensure our workforce meets the highest industry standards.'
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    description: 'Our team comprises experienced professionals across various industrial sectors.'
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Tailored labor solutions designed to meet your specific industry requirements.'
  },
  {
    icon: Award,
    title: 'Industry Leadership',
    description: 'Recognized excellence in providing professional labor services since 2008.'
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#2C2A28] flex flex-col items-center py-16 px-2">
      <h1 className="text-4xl font-bold text-white text-center mb-2">About MLL Service Inc.</h1>
      <div className="w-full flex flex-col items-center">
        <p className="text-gray-200 text-center mb-12 max-w-2xl">
          Since 2008, we've been at the forefront of professional labor services, connecting skilled workers with industry-leading companies across multiple sectors.
        </p>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={mllphoto}
            alt="MLL Service Inc."
            className="rounded-2xl object-cover w-full max-w-md shadow-lg"
          />
        </div>
        {/* Right: Text and Features */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Excellence in Labor Solutions</h2>
          <p className="text-gray-200 mb-8">
            At MLL Service Inc., we understand that every industry has unique challenges and requirements. Our commitment to excellence drives us to provide specialized labor solutions that help businesses thrive in today's competitive landscape.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
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