import React from 'react'

const SingleOrder = ({order}) => {

  let color;
  
  if(order.status === 'pending'){
    color = 'orange'

  } else if(order.status === 'declined'){
    color = 'red'

  }  else{
    color = 'green'
  }

  return (
    <tr>
        <td>{order.description}</td>
        <td>{order.quantity}</td>
        <td>{order.price}</td>
        <td>{order.createdAt.split("T")[0]}</td>
        <td style={{color}}>{order.status}</td>
    </tr>
  )
}

export default SingleOrder