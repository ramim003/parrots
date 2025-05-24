import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Added for routing

const Course = [
  {
    title: 'IELTS Preparation Course',
    description: `This intensive course is tailored for students aiming for high band scores in the IELTS exam. You’ll get a comprehensive breakdown of all four modules—Listening, Reading, Writing, and Speaking—with weekly mock tests and detailed performance feedback. Our expert instructors focus on strategy, time management, and real test simulations.`,
    learn: [
      'Time-saving techniques for each section',
      'Band 7+ essay and speaking strategies',
      'Weekly full mock exams and result analysis',
      '1-on-1 speaking practice and writing corrections',
    ],
    price: '$150',
  },
  {
    title: 'Spoken English Mastery',
    description: `Whether you're a beginner or intermediate speaker, this course is designed to transform your English speaking skills through real-life conversation, accent training, and fluency practice. Learn to speak confidently in social, academic, and professional settings.`,
    learn: [
      'Daily conversational drills with native-style speaking',
      'Pronunciation and intonation practice',
      'Group discussions and public speaking skills',
      'Real-world roleplays and communication tasks',
    ],
    price: '$120',
  },
  {
    title: 'Grammar & Writing Skills',
    description: `This foundational writing and grammar course helps you build strong writing mechanics for school, work, or personal growth. From constructing sentences to composing professional emails and essays, you’ll gain confidence and clarity in your writing.`,
    learn: [
      'Tense, voice, and clause mastery',
      'Academic and business writing formats',
      'Common grammar mistakes and how to avoid them',
      'Proofreading and self-editing techniques',
    ],
    price: '$130',
  },
  {
    title: 'Life Skills & Communication',
    description: `Success today demands more than good grades. This course empowers you with the personal, social, and leadership skills needed to thrive in interviews, workplace meetings, and beyond. We focus on building your soft skills and emotional intelligence.`,
    learn: [
      'Effective interpersonal communication',
      'Emotional intelligence and team collaboration',
      'Public speaking and interview skills',
      'Confidence-building activities and roleplays',
    ],
    price: '$100',
  },
  {
    title: 'Academic English Mentorship',
    description: `Designed for advanced students and university aspirants, this mentorship program focuses on high-level academic English. From research reports to argumentative essays, critical reading to oral presentations—our course builds the skills you need for academic excellence.`,
    learn: [
      'Critical thinking and analytical reading',
      'Research methodology and citation styles',
      'Essay and report writing techniques',
      'Presentation delivery with visual aids',
    ],
    price: '$180',
  },
];

const Courses = () => {
  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto font-poppins">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#980404]">
        Explore Our Premier English Courses
      </h2>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-8 px-2">
          {Course.map((course, index) => (
            <div
              key={index}
              className="min-w-[340px] max-w-sm bg-gray-50 border border-[#980404] rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#980404] mb-3">{course.title}</h3>
              <p className="text-gray-700 text-sm flex-grow mb-4">{course.description}</p>
              <ul className="text-sm text-gray-600 list-disc pl-5 mb-4 space-y-1">
                {course.learn.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <p className="text-lg font-bold text-[#980404] mb-4">{course.price}</p>
              <Link to="/BuyCourse">
                <button className="bg-[#980404] text-white py-2 rounded-md hover:bg-red-700 transition w-full">
                  Enroll Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-[#980404] mb-4">Need Help Choosing a Course?</h3>
        <p className="text-gray-700 mb-6">
          Our advisors are here to help! Whether you're looking to improve your speaking, boost your IELTS score, or
          advance in academic writing—we’ll guide you to the right path.
        </p>

       <Link to="/contact">
  <button
    className="bg-[#980404] text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
   
  >
   Talk with us 
  </button>
</Link>

      </div>

      {/* Contact / Directions section */}
      <section className="mt-20 bg-[#980404] text-white rounded-lg p-6 max-w-4xl mx-auto">
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
