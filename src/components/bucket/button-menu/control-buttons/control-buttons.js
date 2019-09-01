import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../../ui-kit/button/button';
import { selectControl, removeFromBucket } from '../../../../model/actions';

const BucketControlButtons = ({bucket, onSelectAll, onSelectNone, onRemoveSelected}) => {
    const checkedItems = bucket.filter(item => item.checked);
    const noItems = !Boolean(bucket.length);
    console.log('In bucket: ', bucket, '\nNoItems: ', noItems);
    return (
        <React.Fragment>
            <Button
                onClick={() => {
                    if(noItems || checkedItems.length === bucket.length) return;
                    return onSelectAll();
                }}
                variant={noItems || checkedItems.length === bucket.length ? 'disabled' : ''}
            >
                <p>Select All</p>
            </Button>
            <Button
                onClick={() => {
                    if(noItems || checkedItems.length === 0) return;
                    return onSelectNone();
                }}
                variant={noItems || checkedItems.length === 0 ? 'disabled' : ''}
            >
                <p>Select none</p>
            </Button>
            <Button
                onClick={() => {
                    if(noItems || !checkedItems.length) return;
                    return onRemoveSelected(checkedItems);
                }}
                variant={noItems || !checkedItems.length ? 'disabled' : ''}
            >
                <p>Remove selected</p>
            </Button>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        bucket: state.bucket
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectAll: () => {
            dispatch(selectControl('all'));
        },
        onSelectNone: () => {
            dispatch(selectControl('none'));
        },
        onRemoveSelected: items => {
            dispatch(removeFromBucket(items));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketControlButtons);