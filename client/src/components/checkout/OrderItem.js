
const OrderItem = ({cartItem}) => {

  return (

    <tr>

        <td className='td-description'>{cartItem.description.substring(0, 20) + '...'}</td>

        <td>{cartItem.price}</td>

        <td>{cartItem.quantity}</td>

    </tr>
    
  )
}

export default OrderItem