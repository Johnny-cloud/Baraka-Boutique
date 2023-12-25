import { useState } from "react"
import "./order.css"

const Order = ({order}) => {
    let status = "blue"

    if(order.status === "pending"){
      status = "orange"
    } else if(order.status === "declined"){
        status = "red"
    }   else if(order.status === "completed"){
        status = "green"
    }

  return (
    <div className='recent-order'>
        <div style={{color: "purple", textDecoration: "underline"}}>#{(order._id).slice(0, 10)}</div>
        <div>Credit Card</div>
        <div style={{color: status}}>{order.status}</div>
        <div>Ksh. {order.price}</div>
        <div><i class="bi bi-eye"></i> view</div>
    </div>
  )
}

export default Order