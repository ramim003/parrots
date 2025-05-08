import React, { useState } from 'react';

// Import local images
import johnImg from '../assets/faculty.jpg';
import janeImg from '../assets/facultyv 2.jpg';
import aliImg from '../assets/faculty.jpg';

const reviewsData = [
  {
    name: 'John Doe',
    course: 'Spoken English',
    rating: 5,
    review: 'Parrots Academy changed my life! The teachers are exceptional, and I gained the confidence I needed to speak English fluently.',
    image: johnImg,
  },
  {
    name: 'Jane Smith',
    course: 'IELTS Preparation',
    rating: 4,
    review: 'I improved my IELTS score dramatically after attending classes here. The atmosphere is supportive, and the resources are top-notch!',
    image: janeImg,
  },
  {
    name: 'Ali Ahmed',
    course: 'Life Skills',
    rating: 5,
    review: 'The Life Skills course was invaluable for my personal development. I now feel more confident in both my professional and personal life.',
    image: aliImg,
  },
];

const Review = () => {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="bg-[#980404] text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-lg md:text-xl">Hear directly from our students about their experiences at Parrots Academy.</p>
        </div>

        {/* Review Slider */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-3xl">
            <div className="flex justify-center items-center space-x-6">
              {/* Left Arrow */}
              <button
                onClick={() => setActiveReview((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1))}
                className="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
              >
                &#8249;
              </button>

              {/* Review Content */}
              <div className="flex flex-col items-center text-center p-6 bg-white text-black rounded-xl shadow-xl">
                <img
                  src={reviewsData[activeReview].image}
                  alt={reviewsData[activeReview].name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{reviewsData[activeReview].name}</h3>
                <p className="italic mb-4">{reviewsData[activeReview].course}</p>
                <div className="flex mb-4">
                  {/* Rating Stars */}
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < reviewsData[activeReview].rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg">{reviewsData[activeReview].review}</p>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => setActiveReview((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1))}
                className="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
