import React from 'react';
import faculty1 from '../../assets/faculty.jpg';
import faculty2 from '../../assets/faculty.jpg';
import faculty3 from '../../assets/faculty.jpg';
import faculty4 from '../../assets/faculty.jpg';
import faculty5 from '../../assets/faculty.jpg';

const facultyMembers = [
  {
    name: 'Mr. Asif Rahman',
    role: 'IELTS Specialist',
    img: faculty1,
  },
  {
    name: 'Ms. Tania Akter',
    role: 'Spoken English Trainer',
    img: faculty2,
  },
  {
    name: 'Mr. Imran Hossain',
    role: 'Grammar & Writing Expert',
    img: faculty3,
  },
  {
    name: 'Ms. Maria Sultana',
    role: 'Life Skills Coach',
    img: faculty4,
  },
  {
    name: 'Mr. Foysal Mahmud',
    role: 'Academic English Mentor',
    img: faculty5,
  },
];

const FacultyMain = () => {
  return (
    <section className="bg-white py-16 px-6 font-poppins max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#980404]">
        Meet Our Faculty
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {facultyMembers.map((f, index) => (
          <div
            key={index}
            className="bg-white border border-[#980404] rounded-xl p-6 text-center w-full max-w-xs shadow hover:shadow-lg transition"
          >
            <img
              src={f.img}
              alt={f.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-[#980404]"
            />
            <h3 className="text-xl font-semibold text-[#980404]">{f.name}</h3>
            <p className="text-gray-700 text-sm mt-1">{f.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultyMain;
