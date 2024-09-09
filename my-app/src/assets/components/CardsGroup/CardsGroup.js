import React from 'react';
import Marquee from 'react-fast-marquee';
import Card from '../Cards/Card';
import cardImage from "../../images/card-image.jpg";
import './CardsGroup.css'; 

const cardData = [
    {
        image: cardImage,
        heading: 'Card 1 Title',
        description: 'This is a description for card 1.',
    },
    {
        image: cardImage,
        heading: 'Card 2 Title',
        description: 'This is a description for card 2.',
    },
    {
        image: cardImage,
        heading: 'Card 3 Title',
        description: 'This is a description for card 3.',
    },
    {
        image: cardImage,
        heading: 'Card 3 Title',
        description: 'This is a description for card 3.',
    },
    {
        image: cardImage,
        heading: 'Card 3 Title',
        description: 'This is a description for card 3.',
    }
];

const CardsGroup = () => {
    return (
        <div className="cards-group">
            <Marquee
                gradient={true} 
                speed={50} 
                pauseOnHover 
            >
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        heading={card.heading}
                        description={card.description}
                    />
                ))}

            </Marquee>
        </div>
    );
};

export default CardsGroup;
