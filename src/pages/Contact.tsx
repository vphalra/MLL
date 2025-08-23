import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const industries = [
  'Manufacturing',
  'Agriculture',
  'Textile',
  'Chemical',
  'Construction',
];

interface FormData {
  from_name: string;
  from_email: string;
  contact_number: string;
  business_name: string;
  industry: string;
  message: string;
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    contact_number: '',
    business_name: '',
    industry: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_34sxo1k', // Service ID
        'template_mm9lylj', // Template ID
        formData,
        'v5QHXGAqX9vg33BCr' // Public Key
      );
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        from_name: '',
        from_email: '',
        contact_number: '',
        business_name: '',
        industry: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
             Contact Us
           </h1>
           <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-2"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">{errorMessage}</p>
                </div>
              )}

              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2">Full name*</label>
                <input 
                  type="text" 
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2">Email address*</label>
                <input 
                  type="email" 
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2">Contact number</label>
                <input 
                  type="tel" 
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleInputChange}
                  placeholder="Enter your contact number" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2">Business Name</label>
                <input 
                  type="text" 
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleInputChange}
                  placeholder="Enter your business name" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2">Industry</label>
                <select 
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                >
                  <option value="">Select an industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-900 text-sm font-semibold mb-2">Message*</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..." 
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 resize-none"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`font-medium px-8 py-3 rounded-md transition-colors duration-300 flex items-center space-x-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gray-800 hover:bg-gray-900'
                } text-white`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Right Side - Map and Contact Info */}
          <div className="space-y-8">
            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
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
             <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
               <div>
                 <h3 className="text-lg font-bold text-gray-900 mb-4">Contact us at:</h3>
                 <div className="space-y-2">
                   <div className="flex items-center space-x-3">
                     <Mail className="h-5 w-5 text-gray-600" />
                     <span className="text-gray-900">mllservicesinc@outlook.com</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <Mail className="h-5 w-5 text-gray-600" />
                     <span className="text-gray-900">admin.office@mllservices.com</span>
                   </div>
                 </div>
               </div>
              
              <div className="text-gray-900 text-base">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span>978-954-4781</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-gray-600 mt-1" />
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

        {/* Section Divider */}
        <div className="my-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* New Metrics Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose MLL Services Inc?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-md p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 to-gray-600"></div>
              <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction Rate</p>
            </div>
            <div className="relative bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-md p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 to-gray-600"></div>
              <div className="text-4xl font-bold text-gray-800 mb-2">10+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="relative bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-md p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 to-gray-600"></div>
              <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
              <p className="text-gray-600">Clients Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;