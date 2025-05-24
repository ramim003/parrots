import React from 'react';
import { Link } from 'react-router-dom';
import faculty1 from '../../assets/facultyv 2.jpg';
import faculty2 from '../../assets/facultyv 2.jpg';
import faculty3 from '../../assets/facultyv 2.jpg';
import faculty4 from '../../assets/facultyv 2.jpg';
import faculty5 from '../../assets/facultyv 2.jpg';

const facultyMembers = [
  {
    name: 'SM Nasir',
    role: 'Managing Director',
    bio: 'Guiding students to top IELTS bands.',
    img: faculty1,
    path: '/InstructorNasir',
  },
  {
    name: 'Kabid uz Zaman Ramim',
    role: 'Lead Instructor',
    bio: 'Empowering learners to speak with confidence.',
    img: faculty2,
    path: '/InstructorRamim',
  },
  {
    name: 'Sayed Istiak Ahmed Sohan',
    role: 'Instructor',
    bio: 'Precision in grammar, excellence in writing.',
    img: faculty3,
    path: '/InstructorIstiak',
  },
  {
    name: 'Jannatul Ferdous Nuha',
    role: 'Instructor',
    bio: 'Shaping confident and capable minds.',
    img: faculty4,
    path: '/InstructorNuha',
  },
  {
    name: 'Jamil Ahmed',
    role: 'Academic English Mentor',
    bio: 'Building strong foundations for academic success.',
    img: faculty5,
    path: '/InstructorJamil',
  },
  {
    name: 'Poli Begum',
    role: 'Academic English Mentor',
    bio: 'Building strong foundations for academic success.',
    img: faculty5,
    path: '/InstructorPoli',
  },
  {
    name: 'Joli Begum',
    role: 'Academic English Mentor',
    bio: 'Building strong foundations for academic success.',
    img: faculty5,
    path: '/InstructorJoli',
  },
  {
    name: 'Hujur',
    role: 'Academic English Mentor',
    bio: 'Building strong foundations for academic success.',
    img: faculty5,
    path: '/InstructorHujur',
  },
];

const FacultyMain = () => {
  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto font-poppins text-gray-800">
      {/* Intro Text */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-[#980404] mb-4">Meet Our Dedicated Faculty</h2>
       
      </div>

      {/* Faculty Cards - Horizontal Scroll */}
      <div
        className="flex overflow-x-auto space-x-8 scrollbar-hide no-scrollbar-y -mx-6 px-6"
        style={{ overflowY: 'hidden' }}
      >
        {facultyMembers.map((f, idx) => (
          <div
            key={idx}
            className="
              flex-shrink-0 bg-gray-100 border border-[#980404] rounded-lg shadow-md p-6 flex flex-col
              w-72 sm:w-80 md:w-96
              hover:scale-105 transition-transform duration-300
            "
          >
            <div className="flex items-center">
              <img
                src={f.img}
                alt={f.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-[#980404] object-cover"
              />
              <div className="ml-4 sm:ml-6 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#980404]">{f.name}</h3>
                <p className="text-gray-700 font-medium mt-1">{f.role}</p>
                <p className="mt-3 italic text-gray-600 text-sm sm:text-base">{f.bio}</p>
              </div>
            </div>

            {/* Know More Button */}
            <div className="mt-6 self-start">
              <Link
                to={f.path}
                className="
                  inline-block bg-[#980404] text-white px-4 py-2 rounded-md
                  hover:bg-red-700 transition-colors duration-300
                  font-semibold
                "
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>

  
    </section>
  );
};

export default FacultyMain;
