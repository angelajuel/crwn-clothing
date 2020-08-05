import React from 'react';

import './menu-item.styles.scss';

// title and imageUrl represent the props so we won't have to call props.title etc
// we have to pass the image url by using javascript template string
//   it allows us to dynamically style our components
const MenuItem = ({id, title, image, size}) => (
    <div className={`${size} menu-item`}>
        <div 
            className="background-image"
            style={{
                backgroundImage: `url(${image})`
            }} 
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;