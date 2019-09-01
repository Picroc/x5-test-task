import React from 'react';
import { connect } from 'react-redux';
import { ArtCell, DescriptionCell } from './product-cells/product-cells';
import TableContainer from '../../../ui-kit/table-container/table-container';
import Row from '../../../ui-kit/row/row';
import { addToBucket, resolveProducts, focusControl } from '../../../model/actions';
import { DataLoader } from '../../../service/dataLoader';

class ProductTable extends React.Component {

    componentDidMount() {
        DataLoader().getProducts()
            .then(result => {
                this.props.onResolveProducts(result);
            })
    }

    render() {
        const {data = [], selected, onProductItemClick, onSelectUp} = this.props;
        return (
            <React.Fragment>
                <TableContainer variant='inner'>
                    <Row variant='row-header'>
                        {ArtCell('Арт.')}
                        {DescriptionCell('Наименование')}
                    </Row>
                </TableContainer>
                <TableContainer>
                    {data.map((el, index) => {
                        return (
                            <Row onClick={() => { if(data.length - 1 === selected && data.length - 1 !== 0)
                                    onSelectUp(); return onProductItemClick(el) }} key={el.id} variant={index === selected ? 'row-focused' : ''}>
                                {ArtCell(el.artNo)}
                                {DescriptionCell(el.name)}
                            </Row>
                        )
                    })}
                </TableContainer>
            </React.Fragment>
        );
    };
}

const mapStateToProps = state => {
    return {
        data: state.products,
        selected: state.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onProductItemClick: item => {
            dispatch(addToBucket(item));
        },
        onResolveProducts: products => {
            dispatch(resolveProducts(products));
        },
        onSelectUp: () => {
            dispatch(focusControl('up'));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);