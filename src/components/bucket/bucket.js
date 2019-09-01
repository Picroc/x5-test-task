import React from 'react';

import './bucket.css';

const Bucket = (props) => {
    return (
        <div className='bucket'>
            {props.children}
        </div>
    );
};

export default Bucket;