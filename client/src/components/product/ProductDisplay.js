import './product_display.css'
import {Rating} from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../context/AppContext'

const ProductDisplay = ({product}) => {

    const {setSelectedItem} = useContext(AppContext)

    const handleClick = () => {
        setSelectedItem(product)
    }

  return (
    <Link className='product-display' onClick={handleClick} >
        <div className='product-image-container'>
            <img src={product.image} alt={product.description} />
        </div>

        <div className='products-detail-container'>
            <p className='description'>{`${product.description.substring(0, 70)}...`}</p>
            <p className='rating'><Rating size={'18px'} initialValue={product.rating}/></p>
            <p className='price'><h4>Ksh. {product.price}</h4></p>
        </div>
    </Link>
  )
}

export default ProductDisplay