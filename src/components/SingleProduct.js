import {React, useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleProduct = () => {
  const { productCode } = useParams(); // <-- access `productCode` param
  const [item, setItem] = useState({});
  //const token = "ace1a6fd-a483-3de5-9df7-6c9b3acaa93b";

  useEffect(() => {
    // reference `productCode` in request
    fetch(
      `https://fakestoreapi.com/products/${productCode}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [productCode]); // <-- add `productCode` as dependency

  console.log(item);
    
  return (
    <>
  {/* {item.map((product) => (
    <div className='col-lg-4'>
    <img src={product.image} alt={product.image}/>
  </div>
  <div className='col-8'>
    <div className='text-infomation'>
      <div className='title'></div>
      <div className='dec'></div>
      <div className='price'></div>
      <Link to={'/'}>ADD TO CART</Link>
    </div>
  </div>
))}
     */}

    </>
  )
}

export default SingleProduct