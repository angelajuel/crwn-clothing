import React from 'react';

import './form-input.styles.scss'

// otherProps are all of the attributes passed in from the input in SignInAndSignUp
const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? (
            <label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label> 
            ) : null
        }
    </div>
)

export default FormInput;