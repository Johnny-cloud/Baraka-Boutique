// This code dictates how products are displayed on the homepage
import {useContext} from 'react'
import './home_product.css'
import AppContext from '../../context/AppContext'
import { Rating } from 'react-simple-star-rating'
import { Link, useNavigate } from 'react-router-dom'

const HomeProduct = ({product}) => {
    const {setSelectedItem, cart, setCart} = useContext(AppContext)
    const navigate = useNavigate()

    const handleClick = () => {
        setSelectedItem(product)
    }

    const addItemToCart = () => {
        let itemInCart = cart.find(item => item.description === product.description) // Check if item is already in cart
        if(itemInCart){
            alert("Item already in cart!")
        } else {
            product.quantity = 1
            setCart([...cart, product])
            navigate('/cart')
            
        }
    }
    
    return (
        <div className='home-product'>
            <Link onClick={handleClick} to={'/selected-display'} className='home-product-image-container'>
                <img src={product.image} alt='img' />
            </Link>
            <div className='home-product-details-container'>
                <p>{product.description.substring(0, 20)}...</p>
                <p><Rating size={20} initialValue={product.rating} allowFraction /></p>
                <p><h5>Ksh. {product.price}</h5></p>
                <p><button onClick={addItemToCart}>ADD TO CART</button></p>
            </div>
        </div>

    )
}
export default HomeProduct