import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/aboutus.jpg'
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/OurServices' },
    { name: 'Reviews', href: '/ReviewPage' },
    { name: 'AboutUs', href: '/AboutUs' },
    { name: 'FacaltyUs ', href: '/FacaltyUs' },
    { name: 'Contact ', href: '/Contact' },
  ];

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 animate-fade-in-down">
  <img
    src={logo}
    alt="Parrots Logo"
    className="h-15 w-20 object-contain"
  />
  
</Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 animate-fade-in"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-4 py-2 rounded font-medium transition duration-300 transform hover:scale-105 ${
                location.pathname === link.href
                  ? 'bg-[#980404] text-white'
                  : 'hover:bg-white hover:text-black'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Emergency button (always visible on desktop) */}
        <div className="hidden md:block">
        <Link
  to="/join"
  className="bg-[#980404] hover:bg-red-800 px-6 py-2 rounded text-white font-semibold transition duration-300 transform hover:scale-105 animate-fade-in"
>
  Join 
</Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block px-4 py-2 rounded transition duration-300 ${
                location.pathname === link.href
                  ? 'bg-[#980404] text-white'
                  : 'hover:bg-white hover:text-black'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
         <Link
  to="/join"
  className="block w-full mt-2 bg-[#980404] hover:bg-red-800 px-6 py-2 rounded text-white font-semibold transition duration-300 text-center"
  onClick={() => setIsOpen(false)}
>
  Join 
</Link>

        </div>
      )}
    </header>
  );
};

export default Navbar;
