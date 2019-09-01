import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../../ui-kit/button/button';
import { focusControl, addToBucket } from '../../../../model/actions';

const ProductControlButtons = ({selected, products, onSelectDown, onSelectUp, onAddToBucket}) => {
    return (
        <React.Fragment>
            <Button
                onClick={() => {if(selected === 0) return; return onSelectUp();}}
                variant={selected === 0 ? 'disabled' : ''}
            >
                <i className="material-icons">
                    keyboard_arrow_up
                </i>
            </Button>
            <Button
                onClick={() => {if(!products.length || selected === products.length - 1) return; return onSelectDown();}}
                variant={!products.length || selected === products.length - 1 ? 'disabled' : ''}
            >
                <i className="material-icons">
                    keyboard_arrow_down
                </i>
            </Button>
            <Button
                onClick={() => {
                    if(!products.length) return;
                    if(products.length - 1 === selected && products.length - 1 !== 0)
                        onSelectUp();
                    return onAddToBucket(products[selected])}}
                variant={!products.length ? 'disabled' : ''}
            >
                <p>Add</p>
            </Button>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        selected: state.selected,
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectUp: () => {
            dispatch(focusControl('up'));
        },
        onSelectDown: () => {
            dispatch(focusControl('down'));
        },
        onAddToBucket: item => {
            dispatch(addToBucket(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductControlButtons);