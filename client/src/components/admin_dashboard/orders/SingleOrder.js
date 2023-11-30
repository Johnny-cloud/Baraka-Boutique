import React from 'react'

const SingleOrder = ({order}) => {

  if(order.status === "pending"){
    return (
      <tr>
          <td>{order.description}</td>
          <td>{order.quantity}</td>
          <td>{order.price}</td>
          <td style={{color: "orange"}}>{order.status}</td>
          <td><button className='complete-btn'>Complete</button></td>
          <td><button className='decline-btn'>Decline</button></td>
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