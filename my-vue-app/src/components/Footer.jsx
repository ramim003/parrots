import React from 'react';
import { Link } from 'react-router-dom';
import facebookLogo from '../assets/fb.webp'; // Facebook logo image

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-10 pb-6 px-6 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info Section */}
        <div className="flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-3">Parrots Academy Kulaura</h2>
          <p className="text-sm opacity-80 mb-6">
            An educational hub in Kulaura helping students improve their English and life skills.
          </p>

          {/* Facebook logo + text side by side */}
        <a
  href="https://facebook.com/parrotsacademy"
  target="_blank"
  rel="noreferrer"
  className="flex items-center space-x-4 hover:text-[#3b5998] transition-colors duration-300"
>
  <img src={facebookLogo} alt="Facebook" className="w-8 h-8" />  {/* increased from 6 to 8 */}
  <span className="text-lg font-semibold">Get our Facebook</span>  {/* increased from text-sm to text-lg and font-semibold */}
</a>
        </div>

        {/* Navigation Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-gray-300">Our Services</Link></li>
            <li><Link to="/faculty" className="hover:text-gray-300">Faculty</Link></li>
            <li><Link to="/reviews" className="hover:text-gray-300">Reviews</Link></li>
            <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">📍 Kulaura, Sylhet, Bangladesh</p>
          <p className="text-sm mt-1">📞 +880 1700 000000</p>
          <p className="text-sm mt-1">✉️ info@parrotsacademy.com</p>
        </div>

        {/* Developer Credit Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-3">Developer</h3>
          <p className="text-sm">
            Developed with <span className="text-red-500">❤️</span> by <span className="font-semibold">Ramim</span>
          </p>
          <p className="text-xs mt-2 text-gray-400">
            © {new Date().getFullYear()} Parrots Academy Kulaura. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
