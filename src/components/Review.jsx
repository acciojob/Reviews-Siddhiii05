import React, { useState } from "react";

const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  // Current review
  const { id, name, job, image, text } = reviews[index];

  // Next review
  const nextReview = () => {
    if (index >= reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  // Previous review
  const prevReview = () => {
    if (index <= 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  // Random review
  const randomReview = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * reviews.length);
    } while (randomIndex === index);

    setIndex(randomIndex);
  };

  return (
    <div className="review">
      <img
        src={image}
        alt={name}
        className="person-img"
      />

      <h4 className="author" id={`author-${id}`}>
        {name}
      </h4>

      <p className="job">{job}</p>

      <p className="info">{text}</p>

      <button className="prev-btn" onClick={prevReview}>
        Previous
      </button>

      <button className="next-btn" onClick={nextReview}>
        Next
      </button>

      <button className="random-btn" onClick={randomReview}>
        surprise me
      </button>
    </div>
  );
};

export default Review;