import React from "react";
import { Link } from 'react-router-dom';

import heroImage from "../assets/herosection.jpg"; // Use a clear, high-quality image

const Hero = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight transition-all duration-300 hover:scale-105 hover:text-[#980404]">
            Welcome to <span className="text-[#980404] hover:text-white transition-all duration-300">Parrots Academy</span> Kulaura
          </h1>
          <p className="text-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-[1.02]">
            Master your English with expert instructors, proven methods, and a supportive environment.
            Whether you're preparing for <strong className="text-[#980404]">IELTS</strong>,
            enhancing <strong className="text-[#980404]">spoken English</strong>, or dreaming to
            <strong className="text-[#980404]"> study abroad</strong> — we’ve got your back.
          </p>
          <Link to="/Join">
  <button className="bg-[#980404] hover:bg-white hover:text-black px-7 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#980404]">
    Join Now
  </button>
</Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <figure className="w-[320px] md:w-[480px] transition-transform duration-300 hover:scale-105">
            <img
              src={heroImage}
              alt="Students at Parrots Academy"
              className="rounded-xl object-cover shadow-2xl border-4 border-[#980404] transition-all duration-500 hover:shadow-[#980404]/70"
            />
            <figcaption className="text-sm text-gray-400 text-center mt-3">
              Real Classes. Real Results.
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
};

export default Hero;
