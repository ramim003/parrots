import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 animate-fadeIn">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* About Us */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Parrots Academy started its journey in April 2024. Within just a year, we’ve educated over 400 students across Kulaura and beyond. Our proven success in IELTS, Spoken English, and Academic English makes us a trusted name in language learning.
          </p>
        </div>

        {/* Subscribe Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Subscribe</h2>
          <p className="text-sm text-gray-300 mb-4">
            Get exclusive updates on courses, events, and promotions straight to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-l bg-white text-black focus:outline-none"
            />
            <button className="bg-[#980404] hover:bg-red-700 px-4 py-2 rounded-r transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-gray-400 text-sm border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Parrots Academy — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
