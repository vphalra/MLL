import { Shield, Award, Search, UserCheck } from 'lucide-react';

const Process = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Working with MLL
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              The impact of the right talent on your business is limitless.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional team working together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industry Insiders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            We're the insiders you've been looking for.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Simply put, we're experts in the industries we serve. We speak your language, 
            understand your needs, and know exactly what the right fit for an open job looks like.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We keep our finger on the pulse of the future of talent in your industry—giving you the freedom to 
            enjoy less disruptions, more strategic insights, and more efficiency in your daily operations.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We know what really matters in your business as a trusted partner of large and small organizations 
            around the world. Let us solve your toughest workforce challenges, so you don't have to.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6">
              SOLUTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              A seamless extension of your team, making a big impact.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Attracting Talent */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Search className="w-8 h-8 text-gray-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Attracting Talent</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We search far and wide for the best talent, so you get exactly who you need.
              </p>
              <a href="#" className="text-gray-900 font-semibold hover:underline flex items-center">
                Our approach →
              </a>
            </div>

            {/* Screening and Hiring */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <UserCheck className="w-8 h-8 text-gray-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Screening and Hiring</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Leave the details of the vetting process to us. We're experts at it.
              </p>
              <a href="#" className="text-gray-900 font-semibold hover:underline flex items-center">
                How we do it →
              </a>
            </div>

            {/* Safety */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-gray-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Safety</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We keep our people safe and your business protected with comprehensive safety programs.
              </p>
              <a href="#" className="text-gray-900 font-semibold hover:underline flex items-center">
                Learn more →
              </a>
            </div>

            {/* Benefits and Perks */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-gray-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Benefits and Perks</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We believe in taking care of our people with competitive benefits and meaningful perks.
              </p>
              <a href="#" className="text-gray-900 font-semibold hover:underline flex items-center">
                See benefits →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            We break down barriers every day to help people connect with meaningful work.
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            At the same time, we're solving workforce challenges for thriving companies everywhere.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-green-100 p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-lg text-gray-600">years of experience</div>
              <div className="text-lg text-gray-600">as the industry founder</div>
            </div>
            <div className="bg-green-500 p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500K+</div>
              <div className="text-lg text-white">people directly employed</div>
              <div className="text-lg text-white">by us around the world</div>
            </div>
            <div className="bg-gray-200 p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-lg text-gray-600">of the Fortune 100</div>
              <div className="text-lg text-gray-600">partner with us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to move your organization forward?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We believe in limitless opportunities for your business. Let's discuss how we can help you achieve your workforce goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                FIND A JOB
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Related Resources
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Explore our insights, case studies, and industry expertise to help you make informed workforce decisions.
              </p>
              <a href="#" className="text-green-400 font-semibold hover:underline flex items-center">
                View all resources →
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">Industry Insights</h3>
                <p className="text-gray-300 text-sm mb-4">Stay ahead with our latest workforce trends and analysis.</p>
                <a href="#" className="text-green-400 text-sm hover:underline">Read more →</a>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">Success Stories</h3>
                <p className="text-gray-300 text-sm mb-4">See how we've helped organizations like yours succeed.</p>
                <a href="#" className="text-green-400 text-sm hover:underline">View cases →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;