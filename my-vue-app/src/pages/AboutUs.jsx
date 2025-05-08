import React from "react";
import aboutImg1 from "../assets/aboutus.jpg"; // Replace with your actual image
import aboutImg2 from "../assets/about2.jpg"; // Replace with your actual image
import aboutImg3 from "../assets/about3.jpg"; // Replace with your actual image

const AboutUs = () => {
  const images = [aboutImg1, aboutImg2, aboutImg3];

  return (
    <section className="bg-white text-black px-6 md:px-20 py-16 md:py-28">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#980404] mb-4">
            About Parrots Academy Kulaura
          </h2>
          <p className="text-lg text-gray-700">
            Transforming English learners into confident communicators since our beginning.
          </p>
        </div>

        {/* Section 1: Mission */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={images[0]}
            alt="Our Mission"
            className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold text-[#980404]">Our Mission</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              At Parrots Academy Kulaura, our mission is to unlock the potential of every student through
              world-class English instruction. We believe that language is the bridge to global opportunities,
              and we strive to empower learners with the skills and confidence they need to excel in academic,
              professional, and personal arenas.
            </p>
            <p className="text-gray-700 text-justify">
              With our passionate instructors and modern resources, we ensure that students experience a supportive,
              engaging, and highly interactive learning journey.
            </p>
          </div>
        </div>

        {/* Section 2: Teaching Methods */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold text-[#980404]">Our Teaching Methods</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              Our teaching philosophy centers around practical usage, student interaction, and personalized support.
              Each lesson is designed to maximize student talking time, simulate real-life situations, and eliminate fear
              or hesitation in speaking. From interactive speaking drills to grammar workshops and vocabulary labs, we
              make learning enjoyable and results-driven.
            </p>
            <p className="text-gray-700 text-justify">
              Whether you’re a beginner or preparing for IELTS, our tailored materials, regular feedback, and structured
              curriculum ensure measurable progress at every level.
            </p>
          </div>
          <img
            src={images[1]}
            alt="Teaching Method"
            className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Section 3: Why Choose Us */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={images[2]}
            alt="Why Choose Us"
            className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold text-[#980404]">Why Choose Parrots Academy?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>✅ Experienced and passionate instructors</li>
              <li>✅ Friendly class environment</li>
              <li>✅ Structured syllabus with weekly goals</li>
              <li>✅ Support for IELTS, Spoken English & more</li>
              <li>✅ Access to our Free Language Club</li>
              <li>✅ Lifetime support and mentorship</li>
              <li>✅ Flexible class times (Online & Offline)</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
