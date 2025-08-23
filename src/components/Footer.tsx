import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import mllLogo from '../assets/MLL-2.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4 md:mb-6">
              <img src={mllLogo} alt="MLL Services Inc." className="h-20 w-auto invert" />
              <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed mt-2">
                Your Partner in Staffing Success.
              </p>
            </div>
            
          </div>

          {/* Quick Links */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-gray-900 font-light text-base md:text-lg mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollToIndustries: true }}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-gray-900 font-light text-base md:text-lg mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-900 mt-1" />
                <span className="text-gray-600 text-xs md:text-sm font-light">mllservicesinc@outlook.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-900 mt-1" />
                <span className="text-gray-600 text-xs md:text-sm font-light">admin.office@mllservices.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gray-900 mt-1" />
                <span className="text-gray-600 text-xs md:text-sm font-light">
                  16 Linwood Street<br />
                  Lowell, MA 01851
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-gray-900 mt-1" />
                <span className="text-gray-600 text-xs md:text-sm font-light">978-954-4781</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs md:text-sm font-light">
            © {new Date().getFullYear()} MLL Services Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-300"
  >
    <Icon className="h-4 w-4 md:h-5 md:w-5 text-gray-600 hover:text-gray-900 transition-colors duration-300" />
  </a>
);

export default Footer;