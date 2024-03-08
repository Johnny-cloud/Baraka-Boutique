import './cart_item.css'

const CartItem = ({item}) => {
  return (
    <div className='cart-item flex-row-center'>
        <div>
            <img src={item.image} alt=''/>
            <span>{item.description.slice(0, 15)}</span>
        </div>
        <div className='flex-row-center'>
            <div>Ksh.{item.price}</div>
            <div>Qty: {item.quantity}</div>
            <div>Total: Ksh.{item.price * item.quantity}</div>
        </div>
        
    </div>
  )
}

export default CartItem