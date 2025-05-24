import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: 'How to Speak English Confidently in Public - Blog 1',
    description:
      'Struggling with public speaking? This blog gives you simple techniques to overcome fear and speak English naturally in public settings.',
    path: '/BlogOne',
  },
  {
    title: 'Top 5 Tips to Crack IELTS Speaking - Blog 2',
    description:
      'Your IELTS speaking score depends on fluency, grammar, and confidence. Learn 5 game-changing tips to impress your examiner.',
    path: '/BlogTwo',
  },
  {
    title: 'Why Spoken English is a Life Skill - Blog 3',
    description:
      'Speaking English isn’t just for exams — it opens doors to career, education, and life opportunities. Here’s why it’s a must-learn skill.',
    path: '/BlogThree',
  },
  {
    title: 'Mistakes to Avoid in English Writing - Blog 4',
    description:
      'From sentence structure to vocabulary, we break down the most common mistakes students make and how to fix them.',
    path: '/BlogFour',
  },
  {
    title: 'Best Daily Habits for Learning English Fast - Blog 5',
    description:
      'Learning English doesn’t need to be hard. With these daily habits, you’ll improve fluency faster and more naturally.',
    path: '/BlogFive',
  },
  {
    title: 'How Our Students Improved in 30 Days - Blog 6',
    description:
      'Real stories from Parrots Academy learners who made huge progress in just one month — and how you can too.',
    path: '/BlogSix',
  },
];

const Blog = () => {
  return (
    <section className="bg-white py-20 px-6 font-poppins max-w-7xl mx-auto">
      {/* Title and Intro */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#980404] mb-4">Parrots Academy Blog</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Discover expert strategies, real student experiences, and powerful techniques to improve your English skills faster and smarter.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md p-6 transition hover:shadow-xl border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-[#980404] mb-3">{blog.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
            <Link
              to={blog.path}
              className="inline-block text-sm font-semibold text-white bg-[#980404] px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Conclusion & Button */}
      <div className="mt-20 text-center">
        <h4 className="text-2xl font-bold text-[#980404] mb-2">Keep Learning with Us</h4>
        <p className="text-gray-600 mb-6">
          We publish weekly tips, stories, and strategies. Follow the journey and unlock your English potential.
        </p>
        <Link
          to="/all-blogs"
          className="inline-block text-white bg-[#980404] hover:bg-red-700 transition px-6 py-3 rounded-md font-medium"
        >
          See More Blog Posts
        </Link>
      </div>
    </section>
  );
};

export default Blog;
