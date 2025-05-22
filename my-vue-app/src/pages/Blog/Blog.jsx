import React from 'react';

const blogPosts = [
  {
    title: 'How to Improve Your English Speaking',
    summary: 'Discover simple techniques and daily habits that will help you speak English fluently.',
    date: 'May 15, 2025',
    link: '#',
  },
  {
    title: 'IELTS Tips from Our Top Scorers',
    summary: 'Read advice directly from Parrots Academy students who achieved Band 8+ in IELTS.',
    date: 'May 10, 2025',
    link: '#',
  },
  {
    title: 'Life Skills Every Teen Should Learn',
    summary: 'We teach more than just English. Learn about key skills that prepare students for real life.',
    date: 'May 5, 2025',
    link: '#',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4 md:px-10 font-poppins">
      <h1 className="text-3xl font-bold text-center text-[#980404] mb-10">Parrots Academy Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-xs text-gray-400 mb-2">{post.date}</p>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{post.summary}</p>
            <a
              href={post.link}
              className="text-[#980404] text-sm font-medium hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
