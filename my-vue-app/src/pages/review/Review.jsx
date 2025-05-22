import React from 'react';

const reviews = [
  {
    name: 'Nusrat Jahan',
    review:
      'Parrots Academy helped me speak English confidently in public. The teachers are very friendly and helpful!',
  },
  {
    name: 'Rakib Hasan',
    review:
      'I improved my IELTS score in just 2 months. Their strategy and mock tests are truly effective.',
  },
  {
    name: 'Mahin Rahman',
    review:
      'The life skills sessions taught me how to think clearly and express my ideas fluently. Highly recommended!',
  },
  {
    name: 'Farzana Akter',
    review:
      'I was very shy to speak before. Now I can speak in meetings and classrooms thanks to Parrots Academy.',
  },
  {
    name: 'Samiul Alam',
    review:
      'The Spoken English course was more than just grammar. It gave me real-life communication power.',
  },
  {
    name: 'Tanjina Tabassum',
    review:
      'They treat you like family. I loved the group activities and speaking clubs!',
  },
];

const Review = () => {
  return (
    <section className="bg-white py-16 px-6 font-poppins max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#980404]">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, index) => (
          <div
            key={index}
            className="border border-[#980404] rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <p className="text-gray-800 mb-4 italic">"{r.review}"</p>
            <h4 className="text-[#980404] font-bold text-lg">— {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
