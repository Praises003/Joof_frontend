import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdminReviewScreen = () => {
  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchAllReviews = async () => {
      const { data } = await axios.get('https://joof-backend.onrender.com/api/reviews');
      setAllReviews(data);
    };

    const fetchReviews = async () => {
      const { data } = await axios.get('https://joof-backend.onrender.com/api/reviews/approved');
      setReviews(data);
    };

    fetchReviews();
    fetchAllReviews();
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('https://joof-backend.onrender.com/api/reviews', { author, text });
    setAllReviews([...allReviews, data]);
    setAuthor('');
    setText('');
  };

  const approveReview = async (id) => {
    const { data } = await axios.put(`hhttps://joof-backend.onrender.com/api/reviews/${id}`);
    setAllReviews(allReviews.map(review => review._id === id ? data : review));
    setReviews([...reviews, data]);
  };

  const deleteReview = async (id) => {
    await axios.delete(`https://joof-backend.onrender.com/api/reviews/${id}`);
    setAllReviews(allReviews.filter(review => review._id !== id));
    setReviews(reviews.filter(review => review._id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h1>
      <ul>
        {allReviews.map(review => (
          <li key={review._id} className="mb-4 p-4 bg-gray-100 rounded">
            <p className="font-bold text-lg">Name: {review.author}</p>
            <p className="font-medium text-lg">{review.text}</p>
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
      </ul>
    </div>
  );
};

export default AdminReviewScreen;
