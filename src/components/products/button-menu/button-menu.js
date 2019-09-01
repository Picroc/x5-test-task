import React from 'react';

import './button-menu.css';

const ButtonMenu = (props) => {
    return (
        <div className='button-menu'>
            {props.children}
        </div>
    )
};

export default ButtonMenu;