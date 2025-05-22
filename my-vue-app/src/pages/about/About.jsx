import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-red-600">About Us</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Welcome to <span className="font-semibold text-black">MySite</span>, your trusted partner in creating modern web experiences.
        <br /><br />
        We are a passionate team of developers and designers dedicated to delivering high-quality digital solutions. Whether it’s a personal project, business site, or educational platform, we’re here to make it happen.
        <br /><br />
        Our mission is to empower individuals and businesses with tools that are both beautiful and functional. With expertise in React, Tailwind CSS, and modern web technologies, we ensure each project is responsive, user-friendly, and fast.
      </p>
    </div>
  );
};

export default About;
