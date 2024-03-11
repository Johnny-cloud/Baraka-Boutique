// This code dictates how products are displayed on the homepage
import {useContext} from 'react'
import './home_product.css'
import AppContext from '../../context/AppContext'
import { Rating } from 'react-simple-star-rating'
import { Link, } from 'react-router-dom'

const HomeProduct = ({product}) => {
    const {setSelectedProduct, cart, setCart} = useContext(AppContext)
    const handleClick = () => {
        setSelectedProduct(product)
    }

    const addItemToCart = () => {
        let itemInCart = cart.find(item => item.description === product.description) // Check if item is already in cart
        
        if(itemInCart){
            alert("ITEM ALREADY IN CART!")
        } else {
            product.quantity = 1
            setCart([...cart, product])
        }
    }
    
    return (
        <div className='home-product'>
            <Link onClick={handleClick} to={'/product-details'} className='home-product-image-container'>
                <img src={product.image} alt='img' />
            </Link>
            <div className='home-product-details-container'>
                <p>{product.description.substring(0, 20)}...</p>
                <p><Rating size={20} initialValue={product.rating} allowFraction /></p>
                <p><h5>Ksh. {product.price}</h5></p>
                <p><Link to={'/cart'}><button onClick={addItemToCart}>ADD TO CART</button></Link></p>
            </div>
        </div>

    )
}
export default HomeProduct