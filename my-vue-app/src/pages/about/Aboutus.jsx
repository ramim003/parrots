import React from 'react';
import founderImg from '../../assets/banner-img-1.png';
import classImg from '../../assets/banner-img-1.png';
import futureImg from '../../assets/banner-img-1.png';

const Aboutus = () => {
  return (
    <section className="bg-white py-20 px-6 font-poppins max-w-7xl mx-auto text-gray-800 space-y-16">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-[#980404] mb-4">About Parrots Academy</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn about our journey, mission, and future plans that are shaping the way English is taught in Bangladesh.
        </p>
      </div>

      {/* History Section */}
      <div className="md:flex items-center gap-10">
        <img src={founderImg} alt="Founder" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div className="mt-6 md:mt-0">
          <h3 className="text-3xl font-bold text-[#980404] mb-3">Our Journey</h3>
          <p className="text-lg mb-4">
            Parrots Academy was founded in 2018 with the vision to remove fear from English speaking. It started with a small batch of students in Kulaura and quickly grew due to excellent results and word of mouth.
          </p>
          <p className="text-lg">
            Our founder, Ramim Ahmed, believed that with the right environment and real practice, anyone can become fluent in English. His approach focused on confidence-building, clear grammar understanding, and daily use of language.
          </p>
        </div>
      </div>

      {/* Current Section */}
      <div className="md:flex items-center gap-10 md:flex-row-reverse">
        <img src={classImg} alt="Current Class" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div className="mt-6 md:mt-0">
          <h3 className="text-3xl font-bold text-[#980404] mb-3">Where We Are Now</h3>
          <p className="text-lg mb-4">
            Today, Parrots Academy has trained over 1000+ students in IELTS, Spoken English, and Academic Writing. We provide 1-to-1 guidance, 36+ class programs, and free revision & language club support.
          </p>
          <p className="text-lg">
            With both online and offline classes, our students come from all parts of the country. We are proud to be one of the most trusted English training academies in Sylhet division.
          </p>
        </div>
      </div>

      {/* Future Section */}
      <div className="md:flex items-center gap-10">
        <img src={futureImg} alt="Future Vision" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div className="mt-6 md:mt-0">
          <h3 className="text-3xl font-bold text-[#980404] mb-3">Our Vision for the Future</h3>
          <p className="text-lg mb-4">
            We aim to expand Parrots Academy nationwide with modern teaching tools, AI support, mobile apps, and interactive online platforms. Our goal is to reach 10,000+ learners every year with affordable, effective English education.
          </p>
          <p className="text-lg">
            We believe language is power — and we want to give that power to every student in Bangladesh.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-20">
        <h4 className="text-2xl font-bold text-[#980404] mb-2">Join Our Mission!</h4>
        <p className="text-lg text-gray-700 mb-6">
          Be a part of the Parrots Academy family and take your English skills to the next level.
        </p>
        <a
          href="/BuyCourse"
          className="inline-block bg-[#980404] hover:bg-red-700 text-white text-base font-semibold px-6 py-3 rounded-lg transition"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
};

export default Aboutus;
