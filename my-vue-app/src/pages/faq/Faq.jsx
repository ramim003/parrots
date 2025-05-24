import React, { useState } from 'react';

const faqs = [
  {
    question: 'What courses do you offer?',
    answer:
      'We offer IELTS preparation, Spoken English mastery, Grammar & Writing skills, Life Skills & Communication, and Academic English mentorship.',
  },
  {
    question: 'How can I enroll in a course?',
    answer:
      'You can enroll by clicking the "Buy Now" button on the course page or contacting us directly via phone or email.',
  },
  {
    question: 'Are classes available online?',
    answer:
      'Yes, we offer both online and offline classes to suit your convenience and learning style.',
  },
  {
    question: 'What is the duration of each course?',
    answer:
      'Each course typically lasts 3 months, with 3 classes per week and additional revision sessions.',
  },
  {
    question: 'Do you provide any certification?',
    answer:
      'Yes, after successful completion of the course, students receive a certificate from Parrots Academy.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 font-poppins">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#980404]">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="card bg-base-100 shadow-md rounded-lg">
            <button
              onClick={() => toggleFaq(index)}
              className="card-body cursor-pointer flex justify-between items-center p-6 text-[#980404] font-semibold text-lg focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-6 pt-0 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
