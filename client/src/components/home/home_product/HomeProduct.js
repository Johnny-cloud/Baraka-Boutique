// This code dictates how products are displayed on the homepage
import {useContext} from 'react'
import './home_product.css'
import AppContext from '../../context/AppContext'
import { Link, } from 'react-router-dom'

const HomeProduct = ({product}) => {
    const {setSelectedProduct, cart, setCart} = useContext(AppContext)
    const handleClick = () => {
        setSelectedProduct(product)
    }

    const addItemToCart = () => {
        let itemInCart = cart.find(item => item.name === product.name) // Check if item is already in cart
        
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
            <div className='details-container'>
                <p>{product.name.toUpperCase()}</p>
                <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                <p className='price'><b>${product.price}</b> <Link to={'/cart'}><button onClick={addItemToCart}>ADD TO CART <i class="bi bi-basket"></i></button></Link></p>
               
            </div>
        </div>

    )
}
export default HomeProduct