import './cart_item.css'
import { useEffect, useState } from 'react'

const CartItem = ({item, updateCartTotal, cart, setCart}) => {
    const [qty, setQty] = useState(item.quantity)
    item.quantity = qty

    const increaseQty = () => {
        setQty(qty + 1)
        updateCartTotal()
    }

    const decreaseQty = () => {
        if(qty < 2){
            setQty(1)
        } else{
            setQty(qty - 1)
        }
        updateCartTotal()
    }

    const removeItemFromCart = () => {
        setCart(cart.filter(cartItem => cartItem.name !== item.name))
        updateCartTotal()
    }

    useEffect(() => {
        updateCartTotal()
    }, [item.quantity])
    

  return (
    <div className='cart-item flex-row-center'>
        <div className='flex-row-center'>
            <div>
                <span><img src={item.image} alt=''/> {item.name}</span>
            </div>
            <div>${item.price}</div>
        </div>
        <div className='flex-row-center'>
            <div className='qty'>
                <button onClick={decreaseQty}>-</button>
                {item.quantity}
                <button onClick={increaseQty}>+</button>
            </div>
            <div>${qty * item.price}</div>
            <div><button onClick={removeItemFromCart}>Remove <i class="bi bi-trash"></i></button></div>
        </div>
    </div>
  )
}

export default CartItem