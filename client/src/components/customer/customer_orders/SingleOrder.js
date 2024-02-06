
const SingleOrder = ({order}) => {
  let color; // set the color styling for the status attribute

  if(order.status === 'pending'){
      color = 'orange'
  } else if(order.status === 'declined'){
      color = 'red'
  }  else{
      color = 'green'
  }
  
  return (
      <tr>
        <div className='description'>{order.description.slice(0, 40)}</div>
        <td>{order.quantity}</td>
        <td>{order.price}</td>
        <td>{order.createdAt.split("T")[0]}</td>
        <td style={{color}}>{order.status}</td>
    </tr>
  )

}
export default SingleOrder