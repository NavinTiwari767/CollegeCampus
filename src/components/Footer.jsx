import React from 'react';
import { Mail, Phone, MapPin, Youtube, Linkedin, Instagram, Github } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom'; // React Router import करें

const Footer = () => {
  const navigate = useNavigate(); // Navigation के लिए

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a1a] to-[#050510] border-t border-purple-500/10">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white">College Campus</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building exceptional digital experiences that drive growth and innovation for businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all">
                <Youtube size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#web-development" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#ui-ux-design" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services#digital-marketing" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services#brand-strategy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link to="/services#seo-optimization" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services#app-development" className="text-gray-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all mr-0 group-hover:mr-2" />
                  App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Email</p>
                  <a href="mailto:campuscollege3@gmail.com" className="hover:text-purple-400 transition-colors">
                    campuscollege3@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Phone</p>
                  <a href="tel:7673864080" className="hover:text-purple-400 transition-colors">
                    7673864080
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Address</p>
                  <p className="hover:text-purple-400 transition-colors">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-purple-500/10">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and offers</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-purple-500/5 border border-purple-500/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/40 text-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} College Campus. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-purple-400 transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-500 hover:text-purple-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;