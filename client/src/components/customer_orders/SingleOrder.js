import React from 'react'

const SingleOrder = ({order}) => {
  return (
    <tr>
        <td>{order.description}</td>
        <td>{order.quantity}</td>
        <td>{order.price}</td>
        <td>{order.createdAt.split("T")[0]}</td>
    </tr>
  )
}

export default SingleOrder