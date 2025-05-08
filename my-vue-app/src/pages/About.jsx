import React from 'react';
import imgo from '../assets/about3.jpg'
const About = () => {
  return (
    <section className="bg-[#980404] text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Parrots Academy</h2>
          <p className="text-lg md:text-xl">
            Empowering students with the language skills they need to succeed, Parrots Academy is dedicated to helping you unlock your full potential in English.
          </p>
        </div>

        {/* Two-column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section: Timeline */}
          <div className="lg:w-1/2 text-lg space-y-6">
            <h3 className="text-3xl font-semibold mb-4">Our Journey</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-6 h-6 bg-white text-[#980404] font-bold rounded-full mr-4 text-center">1</span>
                <p>
                  <strong>April 25, 2024:</strong> Parrots Academy opened its doors to the community with a mission to provide high-quality English education.
                </p>
              </div>
              <div className="flex items-center">
                <span className="w-6 h-6 bg-white text-[#980404] font-bold rounded-full mr-4 text-center">2</span>
                <p>
                  <strong>2024:</strong> In just one year, we successfully taught over 400 students, helping them gain confidence in English.
                </p>
              </div>
              <div className="flex items-center">
                <span className="w-6 h-6 bg-white text-[#980404] font-bold rounded-full mr-4 text-center">3</span>
                <p>
                  <strong>Present Day:</strong> Our reputation in Kulaura continues to grow, as we remain committed to providing exceptional education.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/2">
            <img 
              src={imgo} // Replace with real image
              alt="Parrots Academy"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold mb-4">Why Choose Parrots Academy?</h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            At Parrots Academy, we provide personalized learning experiences that cater to each student's needs. Whether you're learning English for academic purposes, career advancement, or personal growth, our dedicated instructors help you achieve your goals with engaging lessons and supportive guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
