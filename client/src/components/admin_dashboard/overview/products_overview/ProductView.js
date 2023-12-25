import React from 'react'

const ProductView = ({product}) => {
  return (
    <div className='product-view'>
        <div><span><img src={product.image} alt=''/></span>{product.description.slice(0, 14)}</div>
        <div>#{product._id.slice(0, 6)}</div>
        <div>{product.price}</div>
        <div className='green'>Available</div>
        <div>3,400</div>
        <div>$70,000</div>
    </div>
  )
}

export default ProductView