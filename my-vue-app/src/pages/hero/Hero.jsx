import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-6 bg-white font-poppins items-center align-middle ">
      {/* Text content */}
      <div className=" text-center md:text-left lg:ml-[20px] ">
        <h1
          className="text-3xl sm:text-2xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight"
          style={{ color: '#980404' }}
        >
          Empower Your Future  with Quality Education
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 text-black opacity-80 leading-relaxed">
          Join thousands of learners mastering new skills every day.
        </p>
        <div className="flex justify-center md:justify-start space-x-6">
          <button className="bg-[#980404] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7a0303] transition">
            Get Started
          </button>
          <button className="border-2 border-[#980404] text-[#980404] px-8 py-3 rounded-lg font-semibold hover:bg-[#980404] hover:text-white transition">
            Browse Courses
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
          alt="Education illustration"
          className="w-full max-w-sm sm:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
