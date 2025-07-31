// Removed React import
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Removed unused variables and function

  return (
    <footer className="relative overflow-hidden bg-black/80">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="4" fill="#2563eb"/>
                  <path d="M8 8L32 32" stroke="white" strokeWidth="2"/>
                  <path d="M8 8H32V32H8V8Z" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-lg md:text-xl font-light tracking-tight text-white">MLL Service Inc.</span>
            </div>
            <p className="text-gray-200 text-xs md:text-sm font-light leading-relaxed mb-4 md:mb-6">
              Providing professional labor solutions across multiple industries with expertise and dedication.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Instagram} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-white font-light text-base md:text-lg mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-200 hover:text-white transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollToIndustries: true }}
                  className="text-gray-200 hover:text-white transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-white font-light text-base md:text-lg mb-4 md:mb-6">Industries</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  to="/"
                  state={{ scrollToIndustry: true, industryIndex: 0 }}
                  className="text-gray-200 hover:text-white transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollToIndustry: true, industryIndex: 1 }}
                  className="text-gray-200 hover:text-white transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  Agriculture
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollToIndustry: true, industryIndex: 2 }}
                  className="text-gray-200 hover:text-white transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  Textile
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollToIndustry: true, industryIndex: 3 }}
                  className="text-gray-200 hover:text-white transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  Chemical
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollToIndustry: true, industryIndex: 4 }}
                  className="text-gray-200 hover:text-white transition-colors duration-300 text-xs md:text-sm font-light"
                >
                  Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-white font-light text-base md:text-lg mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-white mt-1" />
                <span className="text-gray-200 text-xs md:text-sm font-light">mllservicesinc@outlook.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" />
                <span className="text-gray-200 text-xs md:text-sm font-light">(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white mt-1" />
                <span className="text-gray-200 text-xs md:text-sm font-light">
                  16 Linwood Street<br />
                  Lowell, MA 01851
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-white/10">
          <div className="text-center text-gray-400 text-xs md:text-sm font-light">
            © {new Date().getFullYear()} MLL Service Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    className="bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors duration-300"
  >
    <Icon className="h-4 w-4 md:h-5 md:w-5 text-gray-300 hover:text-white transition-colors duration-300" />
  </a>
);

export default Footer;