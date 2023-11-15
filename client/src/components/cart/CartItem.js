import { useContext } from "react"
import AppContext from "../context/AppContext"

const CartItem = ({cartItem}) => {

    const {cart, setCart} = useContext(AppContext)

    const deleteItem = () => {
      setCart(cart.filter(item => item._id !== cartItem._id))

    }

  return (
    <tr>
        <td className='td-description'>{cartItem.description}</td>
        <td>{cartItem.price}</td>
        <td>{cartItem.quantity}</td>
        <td><button onClick={deleteItem} className='delete-btn'><i class="bi bi-trash-fill"></i></button></td>
    </tr>
  )
}

export default CartItem