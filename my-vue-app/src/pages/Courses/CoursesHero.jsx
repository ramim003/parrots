import React from 'react';
import ieltsImg from '../../assets/ielts.jpg';
import spokenEnglishImg from '../../assets/spokjen.jpg';
import esolImg from '../../assets/elos.png';
import lifeSkillsImg from '../../assets/lyfkills.jpg';
import academicEnglishImg from '../../assets/english.png';

const courses = [
  {
    title: 'IELTS Preparation',
    description:
      'Get ready to ace the IELTS exam with comprehensive lessons, practice tests, and expert guidance.',
    image: ieltsImg,
  },
  {
    title: 'Spoken English',
    description:
      'Boost your speaking confidence and fluency through interactive sessions and practical exercises.',
    image: spokenEnglishImg,
  },
  {
    title: 'ESOL',
    description:
      'Improve your English skills for everyday life and work with our ESOL course designed for all levels.',
    image: esolImg,
  },
  {
    title: 'Life Skills',
    description:
      'Learn essential life skills including communication, critical thinking, and problem-solving.',
    image: lifeSkillsImg,
  },
  {
    title: 'Academic English',
    description:
      'Master academic writing, reading, and listening skills for higher education success.',
    image: academicEnglishImg,
  },
];

const CoursesHero = () => {
  return (
    <section className="py-20 bg-white font-poppins px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-14 text-[#980404]">
        Our Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => (
          <div
            key={course.title}
            className="rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 group bg-white"
          >
            <img
              src={course.image}
              alt={course.title}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-[#980404] group-hover:underline mb-2 transition">
                {course.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesHero;
