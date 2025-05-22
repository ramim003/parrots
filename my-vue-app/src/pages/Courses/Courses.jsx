import React from 'react';

const Courses = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and modern websites using React, Tailwind CSS, and more.',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile apps with React Native and Flutter.',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing intuitive and user-friendly interfaces for websites and apps.',
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Improving your site’s visibility and search ranking with proven SEO techniques.',
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Running effective online campaigns to grow your brand awareness and sales.',
  },
];

const Service = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-700">Our Services</h2>
      
      <div className="grid gap-8 md:grid-cols-2">
        {services.map(({ id, title, description }) => (
          <div key={id} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-900">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
