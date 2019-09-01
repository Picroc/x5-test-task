import React from 'react';
import './table-container.css';

const TableContainer = (props) => {
    return (
        <div className={`table-container ${props.variant || '' }`}>
            {props.children}
        </div>
    )
};

export default TableContainer;