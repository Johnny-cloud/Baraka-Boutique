import './cart_sumary.css'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import CartItem from './cart_item/CartItem'

const CartSummary = () => {
    const {cart} = useContext(AppContext)
  return (
    <div className='cart-summary'>
        <h5>CART SUMMARY</h5>
        {
            cart.map(item => <CartItem item={item}/>)
        }
    </div>
  )
}

export default CartSummary