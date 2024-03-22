import {useContext, useEffect, useState} from 'react'
import AppContext from '../context/AppContext'
import TopLanding from '../top_landing/TopLanding'
import CartItem from './cart_item/CartItem'
import './cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, setCart} = useContext(AppContext)
    const [cartTotal, setCartTotal] = useState(0)

    const updateCartTotal = () => {
        setCartTotal(cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0))
    }


    useEffect(() => {
        updateCartTotal()
    }, [cart.length])

  return (
    <div className='cart'>
        <TopLanding title={'cart'} />
        <div className='main-content flex-row-center'>
            <div className='cart-items products-display flex-row-center'>
                {
                    cart.map(item => <CartItem item={item} updateCartTotal={updateCartTotal} cart={cart} setCart={setCart} />)
                }
                <Link to={'/shop'}>Continue shopping <i class="bi bi-bag-heart"></i></Link>
            </div>
            <div className='cart-totals'>
                <h5>CART TOTALS</h5>
                <div className='flex-row-center'>
                    <div>Totals</div> 
                    <div><b>$ {cartTotal}</b></div>
                </div>
                <Link to={'/checkout'}>Proceed To Checkout <i class="bi bi-bag-check"></i></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Cart