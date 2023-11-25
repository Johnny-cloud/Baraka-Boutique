import React from 'react'

const SingleOrder = ({order}) => {
  return (
    <tr>
        <td>{order.description}</td>
        <td>{order.quantity}</td>
        <td>{order.price}</td>
        <td>{order.status}</td>
        <td><button className='complete-btn'>Complete</button></td>
        <td><button className='decline-btn'>Decline</button></td>
    </tr>
  )
}

export default SingleOrder