import React from 'react';
import instructorImg from '../../assets/facultyv 2.jpg'; // 🔁 Update the path as needed

const InstructorHujur = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 font-poppins">
      <h2 className="text-4xl font-bold text-center text-[#980404] mb-10">
        Meet Your Instructor
      </h2>

      <div className="bg-white shadow-md rounded-lg p-8 leading-relaxed text-gray-800">
        <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
          {/* Instructor Image */}
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-md">
            <img
              src={instructorImg}
              alt="Instructor Ramim Ahmed"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Basic Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#980404] mb-1">Ramim Ahmed</h3>
            <p className="text-sm text-gray-600 mb-1">Lead English Instructor, Parrots Academy</p>
            <p className="text-sm text-gray-700">
              <strong>IELTS Score:</strong> 8.5 (Listening: 9, Reading: 8, Writing: 7.5, Speaking: 8)
            </p>
          </div>
        </div>

        {/* Full Bio */}
        <div>
          <p className="mb-4">
            With over <strong>6 years of teaching experience</strong>, Ramim Ahmed is one of the most respected and result-driven English instructors in the region. He has worked with students from various educational backgrounds and helped over <strong>1,000 learners</strong> transform their English skills through customized coaching.
          </p>

          <p className="mb-4">
            His teaching approach is built on <strong>clarity, simplicity, and practicality</strong>. Ramim believes that English should not just be learned—it should be lived. His classes go beyond textbooks, integrating real-life communication, problem-solving, and confidence-building activities.
          </p>

          <p className="mb-4">
            Whether you're preparing for the <strong>IELTS exam</strong>, enhancing your <strong>spoken fluency</strong>, or improving your <strong>academic writing</strong>, Ramim ensures that each lesson is interactive, personalized, and impactful.
          </p>

          <p className="mb-4">
            Apart from his core training in language education, Ramim also guides youth in personal development. He conducts workshops on <strong>public speaking, soft skills, and confidence</strong> to help learners grow beyond language skills.
          </p>

          <p className="mb-4">
            As a mentor, Ramim is patient, approachable, and highly committed to every student’s success. His motto is simple:
            <span className="italic"> “If my students grow, I grow with them.”</span>
          </p>
        </div>

        {/* Highlighted Skills */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-[#980404] mb-3">Core Expertise</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>IELTS Strategies & Exam Preparation</li>
            <li>Academic Writing & Grammar Accuracy</li>
            <li>Fluency Training & Spoken Practice</li>
            <li>Soft Skills & Communication Coaching</li>
            <li>Motivational Mentoring for Career Growth</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InstructorHujur;
