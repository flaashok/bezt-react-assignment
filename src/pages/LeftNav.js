import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 leftMenuSection'>
                <div className='firstmenuItem'>
                    <ul>
                    <li><Link to="/">Men's All</Link></li>
                    <li><Link to="/">New Arrivals</Link></li>
                    <li><Link to="/">The Summer Shop</Link></li>
                    </ul>
                    
                </div>
                <div className='dividar'>

                </div>
                <div className='menuItem'>
                    <ul>
                        <li><Link to="/" className='active'>T-Shirts</Link></li>
                        <li><Link to="/">Shirts</Link></li>
                        <li><Link to="/">Paints</Link></li>
                        <li><Link to="/">Shorts</Link></li>
                        <li><Link to="/">Denim</Link></li>
                        <li><Link to="/">Sweaters & Sweatshirts</Link></li>
                        <li><Link to="/">Jackets</Link></li>
                        <li><Link to="/">Underware</Link></li>
                        <li><Link to="/">Shoes</Link></li>
                        <li><Link to="/">Backpacks & Bags</Link></li>
                        <li><Link to="/">Accessories</Link></li>
                        <li><Link to="/">Sales</Link></li>
                        <li><Link to="/">Finals Sales</Link></li>
                    </ul>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default LeftNav