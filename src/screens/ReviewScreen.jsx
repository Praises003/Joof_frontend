import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ReviewScreen = () => {
  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const addReview = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('https://joof-backend.onrender.com/api/reviews', { author, text });
    setAllReviews([...allReviews, data]);
    setAuthor('');
    setText('');
  };


  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h1>
      <form className="mb-6" onSubmit={addReview}>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Review Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Add Review
        </button>
      </form>
      {/* <h2 className="text-xl font-semibold mb-4">Approved Reviews</h2>
      <ul className="mb-6">
        {reviews.map(review => (
          <li key={review._id} className="mb-4 p-4 bg-gray-100 rounded">
            <p className="font-bold">{review.author}</p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul> */}
      {/* <h2 className="text-xl font-semibold mb-4">All Reviews</h2> */}
      {/* <ul>
        {allReviews.map(review => (
          <li key={review._id} className="mb-4 p-4 bg-gray-100 rounded">
            <p className="font-bold">{review.author}</p>
            <p>{review.text}</p>
            {!review.isApproved && (
              <button
                onClick={() => approveReview(review._id)}
                className="mr-2 py-1 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              >
                Approve
              </button>
            )}
            <button
              onClick={() => deleteReview(review._id)}
              className="py-1 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ReviewScreen;
