import React from 'react';
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss';

// The Home Page has a container holding all of the menu items
    // The menu item is a container itself, which holds the CONTENT of the item
    // The content container has the title and subtitle
const HomePage = () => (
    <div className="homepage">
       <Directory />
    </div>
);

export default HomePage;