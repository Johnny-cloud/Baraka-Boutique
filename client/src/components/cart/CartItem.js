// This code returns a row on the cart section
import { useContext, useEffect, useState } from "react"
import AppContext from "../context/AppContext"

const CartItem = ({cartItem, updateTotal}) => {
    const {cart, setCart} = useContext(AppContext)
    const [quantity, setQuantity] = useState(cartItem.quantity)

    const deleteItem = () => {
        setCart(cart.filter(item => item._id !== cartItem._id))
    }

    const increaseQuantity = () => {
      setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if(quantity <= 1){
          setQuantity(1)
      } else {
          setQuantity(quantity - 1)
      }

    }

    useEffect(() => {
      updateTotal()
      setCart([...cart]) // update the cart since the quantity of the item is changed
    }, [quantity])
    

    if(cartItem){
      // Give the cartItem object the quantity attribute dynamically since it does not have one
      cartItem.quantity = quantity
      return (
          <tr className="flex-row-center">
            <div className="description-and-price flex-row-center">
              <td><img src={cartItem.image} alt="" /></td>
              <td className='description'>{cartItem.description.slice(0, 20)}</td>
              <td className="price">{cartItem.price}</td>
            </div>
            <div className="edit-item flex-row-center">
              <td className="edit-quantity flex-row-center"><div className="cart-btn reduce-btn" onClick={decreaseQuantity}>-</div>{cartItem.quantity}<div className="cart-btn increase-btn" onClick={increaseQuantity}>+</div></td>
              <td><div onClick={deleteItem} className='delete-btn'>REMOVE <i class="bi bi-trash-fill"></i></div></td>
            </div>
            
          </tr>
      )

    }

}
export default CartItem