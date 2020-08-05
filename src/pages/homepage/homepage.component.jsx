import React from 'react';
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss';

const HomePage = () => (
    // The Home Page has a container holding all of the menu items
    // The menu item is a container itself, which holds the CONTENT of the item
    // The contect container 
    <div className="homepage">
       <Directory />
    </div>
);

export default HomePage;