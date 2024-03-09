import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SingleProduct from '../components/SingleProduct';


const ProductCart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const {id} = useParams({});
  // const [singleP, setSingleP] = useState({});
    const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
       // console.log(data);
        setProducts(data);
      });
  }, []);

  

  return (
    <>
      
      {product.map((product) => (
        <div className='col-lg-4 col-sm-6 col-xs-12 my-3' key={product.id}>
           
           <div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
        <Link to={`/productItem/${product.id}`} onClick={handleShow}> <img src={product.image} alt={product.title}/> 
            <span className='viewBtn'>View Product</span>
        </Link>
		</div>
		<div className="product-details">
			<span className="product-catagory">{product.category}</span>
			<h4><Link to={`/productItem/${product.id}`} >{product.title}</Link></h4>
			<p>{product.description}</p>
			<div className="product-bottom-details">
				<div className="product-price">${product.price}</div>
				<div className="product-links">
					<Link to={'/'}><i className="fa fa-heart"></i></Link>
					<Link to={product.url}><i className="fa fa-shopping-cart"></i></Link>
				</div>
			</div>
		</div>
	</div>
               
           </div>

      ))}

{/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <div className='row'>
              <SingleProduct />
              {/* <div className='col-lg-4'>
                <img src='' alt=''/>
              </div>
              <div className='col-lg-8'>
                <div className='extraInfo'>
                  <div className='productTitle'></div>
                  <div className='productDes'>lorem lorem</div>
                  <div className='productPrice'>$344</div>
                  <Button variant="secondary" >
            Add to cart
          </Button> 
                </div>
              </div>*/}
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default ProductCart