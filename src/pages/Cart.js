import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
    
  return (
    <>
        <div className="cart">
            <div className='cartTitle'>Your Cart <Link to="" className='closeDraw'><i class="fa-solid fa-xmark"></i></Link></div>

            <div className='cartBox'>
                <div className='cartPics'>
                    <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' width="100"/>
                </div>
                <div className='cartExtraInfo'>
                    <div className='itemTitle'>xyz</div>
                    <div className='itemInfo'>sdfg fghj fghj</div>
                    <div className='itemPrice'>$139</div>
                </div>
            </div>
            <div className='cartBox'>
                <div className='cartPics'>
                    <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' width="100"/>
                </div>
                <div className='cartExtraInfo'>
                    <div className='itemTitle'>xyz</div>
                    <div className='itemInfo'>sdfg fghj fghj</div>
                    <div className='itemPrice'>$139</div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Cart;