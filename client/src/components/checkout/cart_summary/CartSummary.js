import './cart_sumary.css'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import CartItem from './cart_item/CartItem'

const CartSummary = () => {
    const {cart} = useContext(AppContext)
    const subTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    const shipping = 20
    const total = subTotal + shipping
  
  return (
    <div>
      <div className='cart-summary'>
        <h5>CART SUMMARY</h5>
        {
            cart.map(item => <CartItem item={item}/>)
        }
        <div className='totals flex-row-center'>
          <div>Subtotal</div>
          <div><b>${subTotal}</b></div>
        </div>
        <div className='totals flex-row-center'>
          <div>Shipping</div>
          <div><b>${shipping}</b></div>
        </div>
        <div className='totals flex-row-center'>
          <div>Total</div>
          <div><b>${total}</b></div>
        </div>
    </div>
    </div>
  )
}

export default CartSummary