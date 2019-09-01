import React from 'react';

import './text.css';

const mapVariantToTag = (variant, text) => {
    switch (variant) {
        case 'text':
            return (
                <p>
                    {text}
                </p>
            )
        case 'wrapped':
            return (
                <p className='wrapped-text'>
                    {text}
                </p>
            )
    }
}

const Text = ({variant = 'text', text}) => {
    return mapVariantToTag(variant, text);
}

export default Text;