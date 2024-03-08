import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ProductCart = () => {

    const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  
  return (
    <>
      
      {product.map((product) => (
        <div className='col-lg-4 col-sm-6 col-xs-12' key={product.id}>
           
           <div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
        <img src={product.image} alt={product.title}/> 
		</div>
		<div class="product-details">
			<span class="product-catagory">{product.category}</span>
			<h4><a href="">{product.title}</a></h4>
			<p>{product.description}</p>
			<div class="product-bottom-details">
				<div class="product-price">${product.price}</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<Link to={product.url}><i class="fa fa-shopping-cart"></i></Link>
				</div>
			</div>
		</div>
	</div>
                
                
                
                {/* <div className='productWrap'>
                <Link to={product.url}>
                    <div className='productPics'><img src={product.image} alt={product.title} width="120"/> </div>
                    </Link>
                    <div className='productExtra'>
                        <div className='productTitle'>{product.title}</div>
                        <div className='productPrice'>${product.price}</div>
                    </div>
                    <div className='catgoery'>
                        {product.category}
                    </div>
                    <div className='addtoCart'>
                        <Link to="/">Add to Cart</Link>
                    </div>
               </div> */}
               
           </div>
      ))}
    </>
  );

//   return (
//     
//   )
}

export default ProductCart