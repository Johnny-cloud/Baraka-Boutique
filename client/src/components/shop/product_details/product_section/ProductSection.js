import { useState, useContext } from 'react'
import AppContext from '../../../context/AppContext'
import './product_section.css'
import { Link } from 'react-router-dom'

const ProductSection = ({product}) => {

    const {cart, setCart } = useContext(AppContext)
    const [qty, setQty] = useState(1)
    product.quantity = qty

    const decreaseQty = () => {
        if(qty < 2){
            setQty(1)
        } else(
            setQty(qty - 1)
        )
    }

    const increaseQty = () => {
        setQty(qty + 1)
    }

    const addItemToCart = () => {
        const itemIsInCart = cart.find(item => item.name === product.name)
        if(itemIsInCart){
            alert("Item already in cart")
        } else{
            setCart([...cart, product])
        }
    }
   
  return (
    <div className='product-section flex-row-center'>
        <div className='image-container'><img src={product.image} alt=''/></div>
        <div className='details-section'>
            <h4>{product.name.toUpperCase()}</h4>
            <p className='price'><b>${product.price}</b></p>
            <p>Available: <span className='green'>In stock</span></p>
            <div className='description'>
                <p>Made with the best fabrics from the best available sources in town.</p>
                <p>
                    <ul>
                        <li><i class="bi bi-check2-square"></i> High quality</li>
                        <li><i class="bi bi-check2-square"></i> Durable</li>
                        <li><i class="bi bi-check2-square"></i> Fitting</li>
                        <li><i class="bi bi-check2-square"></i> Best material</li>
                        <li><i class="bi bi-check2-square"></i> Logo print</li>
                    </ul>
                </p>
            </div>
            <div className='qty-cart flex-row-center'>
                <div className='qty flex-row-center'>
                    <button onClick={decreaseQty} className='qty-btn'>-</button>
                    <span>{qty}</span>
                    <button onClick={increaseQty} className='qty-btn'>+</button>
                </div>
                <div><Link to={'/cart'}><button onClick={addItemToCart} className='add-to-cart-btn'>ADD TO CART</button></Link></div>
            </div>
        </div>
    </div>
  )
}

export default ProductSection