import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-20 px-6 font-poppins max-w-6xl mx-auto text-gray-800">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center mb-4 text-[#980404]">
        About Parrots Academy
      </h2>
      <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
        Transforming learners into confident English speakers and writers through practical lessons, personal guidance, and a powerful learning environment.
      </p>

      {/* Content Blocks */}
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-[#980404] mb-3">Who We Are</h3>
          <p className="text-lg">
            Parrots Academy is a trusted English language institution committed to practical and goal-based learning. We serve learners of all ages aiming to improve Spoken English, ace IELTS, and write confidently.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#980404] mb-3">Why Choose Our Courses?</h3>
          <p className="text-lg">
            Our courses are designed not just to teach — but to transform. With expert instructors, personalized feedback, and real-life practice, we ensure that students don’t just learn English — they live it.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#980404] mb-3">Our Mission</h3>
          <p className="text-lg">
            To empower Bangladeshi learners with confidence in English speaking and writing — for career, study, and global communication. We aim to remove fear and build fluency, one student at a time.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#980404] mb-3">Our Success in Numbers</h3>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>🎯 Over 1000 students improved their English in just 3 months</li>
            <li>⭐ 95% learner satisfaction and referral rate</li>
            <li>📚 5+ professional English learning programs</li>
            <li>💬 1-to-1 guidance, weekly review, and free Language Club</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h4 className="text-2xl font-bold text-[#980404] mb-2">Start Your Journey Today!</h4>
        <p className="text-lg text-gray-700 mb-6">
          Join Parrots Academy and become a confident speaker, writer, and global communicator. It’s your time to shine.
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

export default About;
