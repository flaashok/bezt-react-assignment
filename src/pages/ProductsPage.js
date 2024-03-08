import React from 'react'
import ProductCart from './ProductCart'

const ProductsPage = () => {
  return (
    <>
        <div className='productPage'>
        <div className='pageTitle'>
            Organic Cotton T-Shirts
        </div>
    </div>
    <div className='container'>
        <div className='row'>
            <ProductCart />
        </div>
    </div>
    </>
    

  )
}

export default ProductsPage