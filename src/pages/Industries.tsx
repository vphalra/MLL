import React from 'react';
import { Building2, Users, Cog, GraduationCap, Phone, Calculator, Wrench, Globe, Cpu, Wifi, Truck } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Administrative & Office',
    description: 'Get connected to innovative solutions and highly skilled office professionals who will keep your organization running smoothly.'
  },
  {
    icon: Calculator,
    title: 'Accounting & Finance',
    description: 'Companies of all sizes, from every industry, have counted on Kelly for the finance and accounting talent they need—and you can too.'
  },
  {
    icon: Phone,
    title: 'Contact Center',
    description: 'We help contact center leaders like you overcome your most pressing challenges, from staffing to workforce management.'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'As the largest provider of education talent in the U.S., a great day at school is on the agenda for your staff and students.'
  },
  {
    icon: Wrench,
    title: 'Engineering',
    description: "It's time for a new plan. Connect with us for engineering talent and solutions that will transform your organization."
  },
  {
    icon: Globe,
    title: 'Government',
    description: 'No matter how complex your government requirements are, our specialized talent is ready to go to work for you.'
  },
  {
    icon: Cog,
    title: 'Manufacturing',
    description: 'Get the latest technical skills and well-qualified fit for your manufacturing and production teams.'
  },
  {
    icon: Users,
    title: 'Science & Clinical',
    description: "Science never stops evolving—and neither should you. We've got the experts and solutions you need to keep up."
  },
  {
    icon: Cpu,
    title: 'Semiconductor',
    description: 'Unlock the growth potential of your semiconductor business with a skilled, sustainable workforce.'
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Still putting off that system upgrade? Your business deserves the best talent and solutions in IT. Start now.'
  },
  {
    icon: Wifi,
    title: 'Telecom',
    description: "The world is wireless now—don't get tangled up in clunky, old digital strategies. Let's connect."
  },
  {
    icon: Truck,
    title: 'Warehouse & Distribution',
    description: 'From forklift drivers to pick-and-pack workers, we know all about the hardworking talent that keeps our world in motion.'
  }
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            <div className="flex flex-col justify-center py-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Industries
              </h1>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Modern office buildings and business district"
                className="w-full h-full min-h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div key={industry.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {React.createElement(industry.icon, { 
                      className: 'h-8 w-8 text-green-600' 
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800 text-white p-12 rounded-lg">
              <div className="mb-6">
                <span className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded mb-4">
                  SOLUTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Connect with the right talent, at the right time.
                </h2>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Temporary Staffing
                </h3>
                <p className="text-gray-600 mb-4">
                  Get top talent—when you need it—from the #1 temporary staffing agency in the U.S.
                </p>
                <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Request staff →
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Direct Hire
                </h3>
                <p className="text-gray-600 mb-4">
                  Reduce recruiting time and costs while you secure a long-term fit for your organization.
                </p>
                <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  How we do it →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Process Outsourcing
              </h3>
              <p className="text-gray-600 mb-6">
                Get project management and talent retention practices in one solution.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Skilled Professional Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Secure quality talent and a consistent workflow through the duration of a project.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                How it works →
              </a>
            </div>
            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Find the perfect fit.
              </h3>
              <p className="text-gray-600 mb-6">
                We're experts at connecting you with the right talent solutions. Contact us to explore options that fit your unique needs.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition-colors">
                REQUEST CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;