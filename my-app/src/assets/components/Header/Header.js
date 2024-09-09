// Header.js
import React from 'react';
import Button from '../Button/Button';  // Import the reusable Button component
import './Header.css';  // Import the Header's CSS
import image from "../../images/header-image.png"

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <div className="header-content">
                    <p className='header-heading'>Track your mental health to discuss in therapy</p>
                    <p >Improve your mental health by tracking thoughts and moods with daily 2 minute chats. Verba is a mental health AI therapy tool that generates insights to enhance your therapy sessions and help manage anxiety between sessions.</p>
                    <div>
                    <Button>Start Tracking</Button>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <img src={image} alt="Illustration related to the header content" className="header-image" />
            </div>
        </header>
    );
};

export default Header;
