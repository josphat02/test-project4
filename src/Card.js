// Card.js
import React from 'react';
import './Card.css'; // Import a CSS file for styling the card

const Card = ({ title, description, imageUrl ,link,buttonLabel, onButtonClick}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">More</a>
        <button className="card-button" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
