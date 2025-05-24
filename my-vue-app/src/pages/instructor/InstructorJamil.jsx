import React from 'react';

const InstructorJamil = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 font-poppins">
      <h2 className="text-4xl font-bold text-center text-[#980404] mb-10">
        Meet Your Instructor
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 border border-[#980404]">
        {/* Instructor Image */}
        <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-[#980404]">
          <img
            src="/images/instructor.jpg" // 🔁 Replace with actual image path
            alt="Instructor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Instructor Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-[#980404] mb-2">
            Ramim Ahmed
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>IELTS Score:</strong> 8.5 (Listening 9, Speaking 8, Writing 7.5, Reading 8)
          </p>
          <p className="text-gray-700 mb-4">
            Ramim is an experienced English instructor with over 6 years of experience training students for IELTS,
            Spoken English, and academic writing. His sessions are engaging, structured, and goal-focused. He has helped
            1000+ students achieve their desired scores and become confident English speakers.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-[#980404] text-white px-3 py-1 rounded-full text-sm">IELTS Specialist</span>
            <span className="bg-[#980404] text-white px-3 py-1 rounded-full text-sm">Academic Writing</span>
            <span className="bg-[#980404] text-white px-3 py-1 rounded-full text-sm">Public Speaking</span>
            <span className="bg-[#980404] text-white px-3 py-1 rounded-full text-sm">Spoken Fluency</span>
            <span className="bg-[#980404] text-white px-3 py-1 rounded-full text-sm">Soft Skills Coach</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorJamil;
