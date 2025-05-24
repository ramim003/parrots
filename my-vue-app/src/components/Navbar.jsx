import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 font-poppins">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2"><Link to='/'>
          <img src={logo} alt="Logo" className="h-10 w-10 object-cover rounded-full" /></Link>
          <Link
            to="/"
            className="text-xl font-bold text-[#980404] hidden md:inline"
          >
            Parrots Academy Kulaura
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm text-black font-medium">
         <Link to="/Courses" className="hover:text-[#980404] transition">Our Courses</Link>
          <Link to="/faculty" className="hover:text-[#980404] transition">Faculty</Link>
          <Link to="/reviews" className="hover:text-[#980404] transition">Reviews</Link>
          <Link to="/blog" className="hover:text-[#980404] transition">Blogs</Link>
          <Link to="/aboutus" className="hover:text-[#980404] transition">About Us</Link>
          <Link to="/contact" className="hover:text-[#980404] transition">Contact Us</Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="relative hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-1 border border-gray-300 rounded-l-full text-sm focus:outline-none w-48"
          />
          <button className="bg-[#980404] text-white px-4 py-1 rounded-r-full text-sm hover:bg-black transition">
            Search
          </button>
        </div>

        {/* Mobile Menu Button & Search */}
        <div className="md:hidden flex items-center space-x-2">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-l-full border border-gray-300 text-sm w-40 h-8"
            />
            <button className="bg-[#980404] text-white px-3 py-1 rounded-r-full text-sm hover:bg-black transition">
              Search
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-2xl font-bold ml-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-black text-sm font-medium">
      <Link to="/Courses" className="block">Our Courses</Link>
          <Link to="/faculty" className="block">Faculty</Link>
          <Link to="/reviews" className="block">Reviews</Link>
          <Link to="/blog" className="block">Blog</Link>
            <Link to="/aboutus" className="block">About Us</Link>
          <Link to="/contact" className="block">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
