import React from 'react';

import './custom-button.styles.scss';

// By passing and using otherProps, this ensures that the input type and other attributes that
// are passed will be applied for the button, so they'll have the same attributes other than classname
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button 
        className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} 
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;