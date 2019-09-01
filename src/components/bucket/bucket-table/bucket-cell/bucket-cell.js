import React from 'react';

import './bucket-cell.css';
import Checkbox from './check-box';

const BucketCell = (data) => {
    console.log('Checked ', data.checked);
    return (
        <div className='bucket-cell'>
            <div className='bucket-cell-content'>
                <span>Арт.: {data.artNo}</span>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
            </div>
            <div className='bucket-cell-checkbox'>
                <Checkbox checked={data.checked} />
            </div>
        </div>
    );
}

export default BucketCell;