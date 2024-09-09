import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from '../Button/Button';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Handle screen resizing
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsSidebarOpen(false);
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none"><path fill="#09241D" fill-rule="evenodd" d="m15 22.838.234.593 9.773 25.667h2.984l10.668-24.755c.796-1.924 1.417-3.57 1.865-4.936.447-1.367.77-2.506.97-3.418.149-.911.248-1.645.298-2.202l3.208.228V10.9H31.273v2.279c1.492 0 2.462.405 2.91 1.215.398.759.447 1.797.149 3.113-.299 1.266-.746 2.633-1.343 4.1l-5.744 13.366c-.398.86-.771 1.772-1.12 2.734a38.66 38.66 0 0 0-1.118 2.885h-.075c-.249-.76-.522-1.57-.82-2.43a30.784 30.784 0 0 1-.896-2.506L18.83 23.431l-.213-.593H15z" clip-rule="evenodd" /></svg>
                </div>

                {/* Desktop links */}
                <ul className="navbar-links">
                    <li><a href="#section1">For Individuals</a></li>
                    <li><a href="#section2">For Therapists</a></li>
                </ul>

                <Button className={"navbar-button"}>Start Tracking</Button>

                {isMobile && (
                    <div className="mobile-menu-icon" onClick={toggleSidebar}>
                        {isSidebarOpen ? '✕' : '☰'}
                    </div>
                )}
            </nav>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <ul className="sidebar-links">
                    <li><a href="#section1" onClick={toggleSidebar}>For Individuals</a></li>
                    <li><a href="#section2" onClick={toggleSidebar}>For Therapists</a></li>
                </ul>

                <Button onClick={toggleSidebar}>Start Tracking</Button>
            </div>

            {/* Overlay when sidebar is open */}
            {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
        </>
    );
};

export default Navbar;
