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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
             Contact Us
           </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Full name*</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-none text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required 
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Email address*</label>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-none text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required 
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Contact number</label>
              <input 
                type="tel" 
                placeholder="Enter your contact number" 
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-none text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Business Name</label>
              <input 
                type="text" 
                placeholder="Enter your business name" 
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-none text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Industry</label>
              <select className="w-full px-4 py-3 bg-gray-200 border-0 rounded-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option value="">Select an industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Message*</label>
              <textarea 
                placeholder="Type your message here..." 
                rows={6}
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-none text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Send message</span>
              <Send className="h-4 w-4" />
            </button>
          </div>

          {/* Right Side - Map and Contact Info */}
          <div className="space-y-8">
            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=16+Linwood+Street,+Lowell,+MA+01851&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Information */}
             <div className="space-y-6">
               <div>
                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact us at:</h3>
                 <div className="space-y-2">
                   <div className="flex items-center space-x-3">
                     <Mail className="h-5 w-5 text-gray-600" />
                     <span className="text-gray-600">mllservicesinc@outlook.com</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <Mail className="h-5 w-5 text-gray-600" />
                     <span className="text-gray-600">admin.office@mllservices.com</span>
                   </div>
                 </div>
               </div>
              
              <div className="text-gray-600 text-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>978-954-4781</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1" />
                  <div>
                    <p>MLL Services Inc</p>
                    <p>P.O Box 760</p>
                    <p>16 Linwood Street</p>
                    <p>Lowell, MA 01851</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;