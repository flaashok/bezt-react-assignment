import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Appstate } from '../App'

const Nav = () => {
    const useApp = useContext(Appstate);
      

  return (
    <div className='container-fluid navSection'>
        <div className='row'>
            <div className='col-lg-4 d-flex align-items-center justify-content-start'>
                <ul className='leftNav'>
                    <li><Link to="/">Women</Link></li>
                    <li><Link to="/">Men</Link></li>
                    <li><Link to="/">Denim</Link></li>
                    <li><Link to="/">Tread</Link></li>
                    <li><Link to="/">About</Link></li>
                </ul>
            </div>
            <div className='col-lg-4'><div className='logoBar'>EVERLANE</div></div>
            <div className='col-lg-4 d-flex align-items-center justify-content-end'>
            {/* <div className='searchBar'>
                    <input type='text' placeholder='search'/>
                </div> */}
            <ul className='menuCart'>
            <li><Link to="/"><i class="fa-solid fa-magnifying-glass"></i> Search</Link></li>
                    <li><Link to="/">Log In</Link></li>
                    <li><Link to="/">Sign In</Link></li>
                    <li><Link to="" onClick={() => useApp.setOpen(true)}><i class="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
        </div>
        </div>
    </div>
  )
}

export default Nav