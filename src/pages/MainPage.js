import React from 'react'
import Leftmenu from './LeftNav';
import Product from './ProductsPage';

export const MainPage = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-12'>
                    <Leftmenu />
                </div>
                <div className='col-lg-9 col-12'>
                    <Product />
                </div>
            </div>
        </div>
    </div>
  )
}
export default MainPage;