import './cart_item.css'

const CartItem = ({item}) => {
  return (
    <div className='cart-item flex-row-center'>
        <div className='image-description'>
            <img src={item.image} alt=''/>
            <span>{item.name}</span>
        </div>
        <div className='flex-row-center'>
            <div>${item.price}</div>
            <div>Qty: {item.quantity}</div>
            <div>Tot: <b>Ksh.{item.price * item.quantity}</b></div>
        </div>
        
    </div>
  )
}

export default CartItem