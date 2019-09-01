import React from 'react';

import './button.css';

const Button = ({variant, children, onClick}) => {
    return (
        <div onClick={onClick} className={`button ${variant || ''}`}>
            {children}
        </div>
    );
};

export default Button;