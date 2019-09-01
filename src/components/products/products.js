import React from 'react';

import './products.css';

const Products = (props) => {
    return (
        <div className='products'>
            {props.children}
        </div>
    );
};

export default Products;