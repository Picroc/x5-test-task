import React from 'react';

import './product-cells.css';

const ArtCell = (text) => {
    return (
        <div className='product-cell' style={{ width: '10vw', flexShrink: 0 }}>
            <p style={{ paddingLeft: '5px' }}>
                {text}
            </p>
        </div>
    )
}

const DescriptionCell = (text) => {
    return (
        <div className='product-cell product-description' style={{ flexGrow: '2' }}>
            <p style={{ paddingLeft: '5px' }}>
                {text}
            </p>
        </div>
    )
}

export {ArtCell, DescriptionCell};