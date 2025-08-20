import React from 'react';
import { ShieldCheck, Users, Target } from 'lucide-react';
import mllphoto from '../assets/staffing_image.jpg';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: ShieldCheck,
    title: 'Tailored Consultations',
    description: 'Private consultation with our team to identify your business needs.'
  },
  {
    icon: Users,
    title: 'Strategic Recruitment',
    description: 'We identify and recruit the right people for the required roles.'
  },
  {
    icon: Target,
    title: 'Standard of Excellence',
    description: 'We commit to delivering top-tier, tailored staffing solutions to enhance your business.'
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
              Who are we?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              MLL Services Inc. is proud to set the standard for excellence in temporary workforce management.
            </p>
          </div>
          <div className="relative">
            <img
              src={mllphoto}
              alt="MLL Services Inc. - Excellence in Labor Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            To deliver swift, precise staffing solutions that meet the evolving needs of businesses. Prioritizing your productivity and success.
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
          {/* Professional Divider Design Element */}
          <div className="mt-16">
            <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
            <div className="w-11/12 mx-auto h-px bg-gray-300 mt-1"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch With Us Now
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to elevate your staffing solutions? Contact us today to discuss how we can support your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;