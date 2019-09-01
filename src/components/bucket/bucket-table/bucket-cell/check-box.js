import React from 'react';

import './checkbox.css';

const Checkbox = (props) => {
    const visibility = props.checked ? 'visible' : 'hidden';
    return (
        <div className='checkbox'>
            <i className='material-icons' style={{visibility: visibility}}>
                done
            </i>
        </div>
    );
};

export default Checkbox;