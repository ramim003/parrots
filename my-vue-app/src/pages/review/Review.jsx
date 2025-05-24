import React, { useState } from 'react';

const reviews = [
  {
    name: 'What Nusrat Jahan says',
    review:
      'Parrots Academy helped me speak English confidently in public. The teachers are very friendly and helpful!',
  },
  {
    name: 'What Rakib Hasan says?',
    review:
      'I improved my IELTS score in just 2 months. Their strategy and mock tests are truly effective.I improved my IELTS score in just 2 months. Their strategy and mock tests are truly effective.',
  },
  {
    name: 'What Farzana Akter says?',
    review:
      'I was very shy to speak before. Now I can speak in meetings and classrooms thanks to Parrots Academy.I improved my IELTS score in just 2 months. Their strategy and mock tests are truly effective.',
  },
  {
    name: 'What Mahin Rahman says',
    review:
      'The life skills sessions taught me how to think clearly and express my ideas fluently. Highly recommended!I improved my IELTS score in just 2 months. Their strategy and mock tests are truly effective.',
  },
  {
    name: 'What Samiul Alam says',
    review:
      'The Spoken English course was more than just grammar. It gave me real-life communication power.I improved my IELTS score in just 2 months. Their strategy and mock tests are truly effective.',
  },
  {
    name: 'What Tanjina Tabassum says',
    review:
      'They treat you like family. I loved the group activities and speaking clubs!I improved my IELTS score in just 2 months. Their strategy and mock tests are truly effective.',
  },
];

const ReviewCard = ({ name, review }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-pointerI improved my IELTS score in just 2 months. Their strategy and mock tests are truly effective."
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-[#980404]">{name}</h4>
        <span
          className={`text-xl transform transition-transform ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </div>
      <p className="text-gray-700 text-sm mt-2 transition-all duration-300">
        {open ? review : `${review.slice(0, 60)}...`}
      </p>
    </div>
  );
};

const Review = () => {
  return (
    <section className="bg-white py-16 px-6 font-poppins max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#980404]">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[500px] overflow-y-auto pr-2">
        {reviews.map((r, i) => (
          <ReviewCard key={i} name={r.name} review={r.review} />
        ))}
      </div>

      <p className="text-center mt-10 text-sm italic text-gray-500">
        You’ll feel the difference from day one at Parrots Academy.
      </p>
    </section>
  );
};

export default Review;
