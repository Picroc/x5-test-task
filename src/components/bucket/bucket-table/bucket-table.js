import React from 'react';
import { connect } from 'react-redux';
import TableContainer from '../../../ui-kit/table-container/table-container';
import BucketCell from './bucket-cell/bucket-cell';
import Row from '../../../ui-kit/row/row';
import { checkBucketItem } from '../../../model/actions';

const BucketTable = ({ data = [], onBucketItemClick }) => {
    return (
        <React.Fragment>
            <TableContainer variant='inner'>
                <p style={{ textAlign: 'center' }}>
                    Bucket
                </p>
            </TableContainer>
            <TableContainer >
                {data.map(el => {
                    return (
                        <Row key={el.id} onClick={() => onBucketItemClick(el.id)}>
                            {BucketCell({ ...el })}
                        </Row>
                    )
                })}
            </TableContainer>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        data: state.bucket
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBucketItemClick: id => {
            dispatch(checkBucketItem(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketTable);