// This code returns a table row based on the status of the order
const SingleOrder = ({order}) => {

  const handleCompleteClick = () => {
    alert("Only the main admin can complete the order")
  }

  const handleDeclineClick = () => {
    alert("Only the main admin can decline the order")
  }
  
    if(order.status === "pending"){
      return (
        <tr>
          <td>{order.description}</td>
          <td>{order.quantity}</td>
          <td>{order.price}</td>
          <td style={{color: "orange"}}>{order.status}</td>
          <td><button className='complete-btn' onClick={handleCompleteClick}>Complete</button></td>
          <td><button className='decline-btn' onClick={handleDeclineClick}>Decline</button></td>
      </tr>
    )
  } else if(order.status === "completed") {
      return(
        <tr>
          <td>{order.description}</td>
          <td>{order.quantity}</td>
          <td>{order.price}</td>
          <td style={{color: "green"}}>{order.status}</td>
      </tr>
    )
  } else{
      return(
        <tr>
          <td>{order.description}</td>
          <td>{order.quantity}</td>
          <td>{order.price}</td>
          <td style={{color: "red"}}>{order.status}</td>
      </tr>
    )
  }

}
export default SingleOrder