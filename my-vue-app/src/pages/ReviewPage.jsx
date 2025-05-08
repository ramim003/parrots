import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulated review data
    const fetchedReviews = [
      {
        id: 1,
        name: "Amina Khatun",
        course: "IELTS",
        review: "Parrots Academy changed the way I think about English. The instructors are very supportive, and my band score improved in just 2 months!",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 2,
        name: "Hasib Ahmed",
        course: "Spoken English",
        review: "This was the best course I ever joined. The real-time practice and friendly environment helped me gain fluency.",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
      },
      {
        id: 3,
        name: "Meherun Nisa",
        course: "Academic English",
        review: "I’ve passed my university English test with flying colors thanks to Parrots. Highly recommended!",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        id: 4,
        name: "Sajib Mia",
        course: "Duolingo English",
        review: "They gave clear feedback and daily motivation. I felt confident during the actual test!",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
      },
    ];

    setReviews(fetchedReviews);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Intro Section */}
      <div className="text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          What Our Students Say
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          With hundreds of successful learners across Bangladesh, Parrots Academy is proud of its student community. Here are some real stories from students who transformed their English with us.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reviews.map((student, index) => (
          <div
            key={student.id}
            className="bg-[#111] border border-gray-800 rounded-xl p-6 shadow-lg transform transition duration-500 hover:-translate-y-1 hover:shadow-red-900 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={student.image}
                alt={student.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#980404]"
              />
              <div>
                <h2 className="text-xl font-semibold">{student.name}</h2>
                <p className="text-sm text-[#980404]">{student.course}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{student.review}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Join Them Today</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Whether you're preparing for IELTS, Duolingo, or simply want to become fluent, Parrots Academy is here to guide you with dedication and care.
        </p>
        <Link to="/Join">
  <button className="bg-[#980404] hover:bg-white hover:text-black px-7 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#980404]">
    Join Now
  </button>
</Link>
      </div>
    </div>
  );
};

export default ReviewPage;
