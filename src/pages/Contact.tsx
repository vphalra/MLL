// Removed React import
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const industries = [
  'Manufacturing',
  'Agriculture',
  'Textile',
  'Chemical',
  'Construction',
];

const Contact = () => {
  return (
    <>
      {/* Background overlay that extends behind nav bar */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-[#2C2A28]/80 via-[#23211f]/60 to-[#181715]/80 backdrop-blur-sm -z-20"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-12 pb-28 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">Contact Us</h1>
        <p className="text-gray-200 text-center text-sm md:text-base mb-8 md:mb-12 max-w-2xl">
          Get in touch with our team for any inquiries or support. We're here to help you find the perfect labor solution for your business.
        </p>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Left: Office Info and Map */}
          <div className="space-y-6 md:space-y-8">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 shadow-lg">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Our Office</h2>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white mt-1" />
                  <span className="text-gray-200 text-xs md:text-sm font-light">
                    16 Linwood Street<br />
                    Lowell, MA 01851
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  <span className="text-gray-200 text-xs md:text-sm font-light">mllservicesinc@outlook.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  <span className="text-gray-200 text-xs md:text-sm font-light">admin.office@mllservices.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  <span className="text-gray-200 text-xs md:text-sm font-light">978-954-4781</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 shadow-lg">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Location</h2>
              <div className="overflow-hidden rounded-xl">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=16+Linwood+Street,+Lowell,+MA+01851&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 shadow-lg">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Send Us a Message</h2>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-200 text-xs md:text-sm mb-1">Full Name *</label>
                  <input type="text" className="w-full rounded-lg bg-[#181715] text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-gray-200 text-xs md:text-sm mb-1">Business Name *</label>
                  <input type="text" className="w-full rounded-lg bg-[#181715] text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white" placeholder="Company Inc." required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-200 text-xs md:text-sm mb-1">Email *</label>
                  <input type="email" className="w-full rounded-lg bg-[#181715] text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="block text-gray-200 text-xs md:text-sm mb-1">Phone *</label>
                  <input type="tel" className="w-full rounded-lg bg-[#181715] text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white" placeholder="(555) 123-4567" required />
                </div>
              </div>
              <div>
                <label className="block text-gray-200 text-xs md:text-sm mb-1">Industry *</label>
                <select className="w-full rounded-lg bg-[#181715] text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white" required>
                  <option value="">Select an industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-200 text-xs md:text-sm mb-1">Message *</label>
                <textarea className="w-full rounded-lg bg-[#181715] text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white" rows={4} placeholder="Please describe how we can help you..." required />
              </div>
              <button type="submit" className="w-full bg-white text-black font-semibold py-2 md:py-3 rounded-lg transition-colors duration-300 hover:bg-gray-200 flex items-center justify-center space-x-2">
                <span>Send Message</span> <Send className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;