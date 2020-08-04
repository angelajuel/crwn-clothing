import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    // The Home Page has a container holding all of the menu items
    // The menu item is a container itself, which holds the CONTENT of the item
    // The contect container 
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SNEAKERS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">WOMENS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MENS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;