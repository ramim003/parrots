import React from 'react';

const courses = [
  { title: 'IELTS Preparation', description: 'Boost your band score with expert guidance.' },
  { title: 'Spoken English', description: 'Improve your speaking skills for daily life and career.' },
  { title: 'Life Skills', description: 'Learn essential skills for life and work.' },
  { title: 'ESOL', description: 'English for Speakers of Other Languages.' },
  { title: 'Academic English', description: 'Sharpen your academic writing and comprehension.' },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4 md:px-10 font-poppins">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#980404]">Our Courses</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-sm text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
