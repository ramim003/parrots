import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'IELTS Preparation Course',
    description: `Comprehensive IELTS preparation covering listening, reading, writing, and speaking skills. 
    Our expert instructors provide personalized feedback and strategies to boost your score. 
    Join now to unlock your potential and achieve your desired band score.`,
    price: '$150',
  },
  {
    title: 'Spoken English Mastery',
    description: `Improve your spoken English fluency and confidence with practical conversation practice, 
    pronunciation training, and grammar essentials. This course is designed for all levels to communicate effectively.`,
    price: '$120',
  },
  {
    title: 'Grammar & Writing Skills',
    description: `Master English grammar and writing with detailed lessons and writing assignments. 
    Learn to write clear, compelling essays, emails, and reports that impress.`,
    price: '$130',
  },
  {
    title: 'Life Skills & Communication',
    description: `Develop essential life skills including interpersonal communication, public speaking, 
    and leadership techniques to thrive personally and professionally.`,
    price: '$100',
  },
  {
    title: 'Academic English Mentorship',
    description: `Focus on advanced academic English skills, research writing, critical analysis, and presentation 
    skills to excel in your academic career.`,
    price: '$180',
  },
];

const Courses = () => {
  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto font-poppins">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#980404]">
        Our Courses
      </h2>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-8 px-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-xs bg-gray-50 border border-[#980404] rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#980404] mb-3">
                {course.title}
              </h3>
              <p className="text-gray-700 text-sm flex-grow mb-4 whitespace-pre-line">
                {course.description}
              </p>
              <p className="text-lg font-bold text-[#980404] mb-4">{course.price}</p>
              <Link to="/BuyCourse">
                <button className="bg-[#980404] text-white py-2 w-full rounded-md hover:bg-red-700 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Contact / Directions section */}
      <section className="mt-16 bg-[#980404] text-white rounded-lg p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Contact & Directions</h3>
        <p className="mb-2">Have questions or want to enroll? Reach out to us anytime!</p>
        <p className="mb-2">
          <strong>Phone:</strong> +880 1234 567890
        </p>
        <p className="mb-2">
          <strong>Email:</strong> info@parrotsacademy.com
        </p>
        <p className="mb-4">
          <strong>Location:</strong> Moulvibazar, Kulaura, Uchlapara
        </p>

        <div className="w-full h-64 rounded-lg overflow-hidden border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1234567890123!2d91.824123456789!3d24.5487654321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752f123456789ab%3A0xc123456789abcd!2sUchlapara%2C%20Kulaura%2C%20Moulvibazar!5e0!3m2!1sen!2sbd!4v168xxxxxxx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Parrots Academy Location"
          ></iframe>
        </div>
      </section>
    </section>
  );
};

export default Courses;
