import React, { useState } from 'react';

const initialReviews = [
  {
    name: 'John Doe',
    rating: 5,
    comment: 'Amazing course! Highly recommended.',
    date: '2025-05-20',
  },
  {
    name: 'Jane Smith',
    rating: 4,
    comment: 'Very helpful instructors and clear materials.',
    date: '2025-05-18',
  },
];

const starsArray = [1, 2, 3, 4, 5];

const ReviewMain = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length || 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.comment.trim()) {
      setReviews([
        ...reviews,
        {
          ...formData,
          rating: Number(formData.rating),
          date: new Date().toISOString().split('T')[0],
        },
      ]);
      setFormData({ name: '', rating: 5, comment: '' });
    } else {
      alert('Please fill in your name and comment');
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-14 font-poppins bg-gray-50 rounded-lg shadow-lg">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-[#980404] mb-14 text-center tracking-wide">
        What Our Students Say
      </h1>

      {/* Summary */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-8 rounded-xl shadow-md mb-12">
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <p className="text-6xl font-bold text-[#980404] leading-none">
            {averageRating.toFixed(1)}
          </p>
          <div className="flex justify-center sm:justify-start mt-1 space-x-1">
            {starsArray.map((star) => (
              <svg
                key={star}
                className={`w-7 h-7 ${
                  star <= Math.round(averageRating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                } transition-colors duration-300`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.963a1 1 0 00-.364-1.118L3.631 9.39c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.962z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 mt-2 font-medium">{reviews.length} Reviews</p>
        </div>
      </div>

      {/* Review submission form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md mb-14"
      >
        <h2 className="text-3xl font-semibold mb-6 text-[#980404] tracking-wide">
          Submit Your Review
        </h2>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block font-semibold mb-2 text-gray-700"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full border-gray-300 focus:border-[#980404] focus:ring-2 focus:ring-[#980404] text-lg"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-6 max-w-xs">
          <label
            htmlFor="rating"
            className="block font-semibold mb-2 text-gray-700"
          >
            Your Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="select select-bordered w-full border-gray-300 focus:border-[#980404] focus:ring-2 focus:ring-[#980404] text-lg"
          >
            {starsArray.map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 && 's'}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <label
            htmlFor="comment"
            className="block font-semibold mb-2 text-gray-700"
          >
            Your Review
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={5}
            className="textarea textarea-bordered w-full border-gray-300 focus:border-[#980404] focus:ring-2 focus:ring-[#980404] text-lg resize-none"
            placeholder="Write your review here..."
            required
          />
        </div>

        <button
          type="submit"
          className="btn bg-[#980404] hover:bg-red-700 text-white font-semibold text-lg shadow-lg transition duration-300 w-full md:w-auto px-10 py-3 rounded-lg"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews list */}
      <div className="space-y-8">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center"
          >
            <div className="flex items-center mb-6 sm:mb-0 sm:mr-8">
              <div className="w-14 h-14 bg-[#980404] text-white rounded-full flex items-center justify-center font-bold text-xl select-none">
                {review.name.charAt(0).toUpperCase()}
              </div>
              <div className="ml-5">
                <p className="font-semibold text-[#980404] text-lg">{review.name}</p>
                <p className="text-gray-400 text-sm tracking-wide">{review.date}</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-3 space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-6 h-6 ${
                      star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                    } transition-colors duration-300`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.963a1 1 0 00-.364-1.118L3.631 9.39c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.962z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Finishing note */}
      <p className="mt-16 text-center text-gray-600 italic text-lg max-w-lg mx-auto">
        Thank you for trusting us. Your feedback motivates us to improve!
      </p>
    </section>
  );
};

export default ReviewMain;
