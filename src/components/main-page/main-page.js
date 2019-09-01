import React from 'react';

import './main-page.css';
import Products from '../products/products';
import ProductTable from '../products/product-table/product-table';
import ButtonMenu from '../products/button-menu/button-menu';
import ProductControlButtons from '../products/button-menu/control-buttons/control-buttons';
import Bucket from '../bucket/bucket';
import BucketTable from '../bucket/bucket-table/bucket-table';
import BucketControlButtons from '../bucket/button-menu/control-buttons/control-buttons';

const MainPage = () => {
    return (
        <div className='main-page-grid'>
            <Products>
                <ProductTable />
                <ButtonMenu>
                    <ProductControlButtons />
                </ButtonMenu>
            </Products>
            <Bucket>
                <BucketTable />
                <ButtonMenu>
                    <BucketControlButtons />
                </ButtonMenu>
            </Bucket>
        </div>
    );
};

export default MainPage;