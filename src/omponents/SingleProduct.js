import React, { useContext } from 'react'
import { AppContext } from '../productcontex'

const SingleProduct = () => {
    const myName = useContext(AppContext);
  return (
    <div>{myName}</div>
  )
}

export default SingleProduct