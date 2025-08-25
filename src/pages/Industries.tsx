import React from 'react';
import { TreePalm, Building2, Users, Cog, GraduationCap, Phone, Calculator, Wrench, Trees, Cpu, Wifi, UserRoundCog  } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    icon: Calculator,
    title: 'Accounting & Finance',
    description: 'Companies of all sizes, from every industry, have counted on us for the finance and accounting talent they need—and you can too.'
  },
  {
    icon: Building2,
    title: 'Construction',
    description: 'Skilled workers for building projects, from general labor to specialized trades, delivering quality and efficiency on-site.'
  },
  {
    icon: Trees,
    title: 'Landscaping',
    description: 'Expert teams for landscape design, maintenance, and installation, transforming outdoor spaces with precision and care.'
  },
  {
    icon: UserRoundCog,
    title: 'General Labor Workforce',
    description: 'Versatile general labor solutions for various industries, supporting day-to-day operations with dedicated, hardworking personnel.'
  },
  {
    icon: TreePalm,
    title: 'Agriculture',
    description: 'Providing reliable labor for farming, harvesting, and agricultural operations to ensure seasonal success and optimal yields.'
  },
  {
    icon: Users,
    title: 'Retail',
    description: 'Providing skilled retail staff for sales, customer service, and store operations to enhance customer experience and drive revenue.'
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
    icon: Users,
    title: 'Science & Clinical',
    description: "Science never stops evolving—and neither should you. We've got the experts and solutions you need to keep up."
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
  }
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Industries
            </h1>
          </div>
          <div className="relative h-full">
            <img
              src="https://i.imgur.com/4SPtWdF.jpg"
              alt="Modern office buildings and business district"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Industries Grid Section */}
      <section className="pt-20 pb-10 md:pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div key={industry.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {React.createElement(industry.icon, {
                      className: 'h-8 w-8 text-gray-800'
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed opacity-90">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Divider */}
      <div className="relative h-16 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-white"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-6xl mx-auto"></div>
      </div>

      {/* Solutions Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800 text-white p-12 rounded-lg relative">
              <div className="mb-6">
                <span className="inline-block bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded mb-4">
                  SOLUTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                  Connect with the right talent, at the right time.
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                  "Teamwork is the ability to work together toward a common vision, the ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results." <br></br><br></br>-Andrew Carnegie
                </p>
              </div>
              <Link to="/contact" className="absolute bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded font-semibold inline-block">
                Get Started Now →
              </Link>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Temporary Staffing
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 leading-relaxed opacity-90">
                  Get top talent—when you need it—from the #1 temporary staffing agency in the U.S.
                </p>
                <Link to="/contact" className="text-gray-800 font-semibold hover:text-gray-900 transition-colors">
                  Request staff →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Direct Hire
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 leading-relaxed opacity-90">
                  Reduce recruiting time and costs while you secure a long-term fit for your organization.
                </p>
                <Link to="/process" className="text-gray-800 font-semibold hover:text-gray-900 transition-colors">
                  How we do it →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Divider */}
      <div className="relative h-16 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-white"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-6xl mx-auto"></div>
      </div>

      {/* Additional Services Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Business Process Outsourcing
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed opacity-90">
                Get project management and talent retention practices in one solution.
              </p>
              <Link to="/contact" className="text-gray-800 font-semibold hover:text-gray-900 transition-colors">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Skilled Professional Solutions
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed opacity-90">
                Secure quality talent and a consistent workflow through the duration of a project.
              </p>
              <Link to="/about" className="text-gray-800 font-semibold hover:text-gray-900 transition-colors">
                How it works →
              </Link>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Find the perfect fit.
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed opacity-90">
                We're experts at connecting you with the right talent solutions. Contact us to explore options that fit your unique needs.
              </p>
              <Link to="/contact" className="bg-gray-800 text-white px-6 py-3 rounded font-semibold hover:bg-gray-900 transition-colors inline-block">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;