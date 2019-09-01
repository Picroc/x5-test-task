import React from 'react';
import './row.css';

const Row = ({variant, children, onClick}) => {
    return (
        <div onClick={onClick} className={`row ${variant || ''}`}>
            {children}
        </div>
    );
};

export default Row;