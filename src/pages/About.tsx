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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About MLL Service Inc.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Excellence in labor solutions through strategic industry expertise.
            </p>
          </div>
          <div className="relative">
            <img
              src={mllphoto}
              alt="MLL Service Inc. - Excellence in Labor Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Our mission is to serve and provide our clients with permanent efficiency by taking a deep dive into the nature of our client's industry.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We identify where production is lacking, recruit the right resources, and provide the necessary attention required to maximize our clients' return on their investment.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Through strategic partnerships and industry expertise, we deliver solutions that create lasting impact and sustainable growth for businesses across various sectors.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures that every client receives tailored solutions that address their unique challenges and drive measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
                {React.createElement(feature.icon, { className: 'h-12 w-12 text-gray-700 mx-auto mb-4' })}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;