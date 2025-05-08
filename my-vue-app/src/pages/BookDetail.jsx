// BookDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/booksData.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedBook = data.find((book) => book.bookId === parseInt(bookId));
        setBook(selectedBook);
      })
      .catch((error) => console.error("Error fetching book details:", error));
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="py-16 px-8 md:px-32">
      <div className="flex gap-12">
        {/* Empty Image Box */}
        <div
          className="w-full md:w-[40%] h-[500px] bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${book.image})` }}
        ></div>

        {/* Book Details */}
        <div className="w-[50%]">
          <h1 className="text-3xl font-bold mb-2">{book.bookName}</h1>
          <h2 className="text-md text-gray-600 mb-4">By : {book.author}</h2>

          <p className="text-md font-semibold mb-6">{book.category}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Review :</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{book.review}</p>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-6">
            {book.tags?.map((tag, index) => (
              <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Info */}
          <div className="text-sm space-y-2 mb-10">
            <p><strong>Number of Pages:</strong> {book.numberOfPages}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>Year of Publishing:</strong> {book.yearOfPublishing}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100">
              Read
            </button>
            <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
