import React from 'react';
import './Card.css';

const Card = ({ image, heading, description }) => {
    return (
        <div className="card">
            <div className="card-image">
                <div className="image-centered">
                    <img src={image} alt="Card" />
                </div>
                <p className="card-heading">{heading}</p>
            </div>
            <p><q>{description}</q></p>
        </div>
    );
};

export default Card;
