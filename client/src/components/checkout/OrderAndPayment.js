import React from 'react'
import Order from './Order'
import PaymentMethod from './PaymentMethod'

const OrderAndPayment = () => {
  return (
    <div className='order-and-payment'>
        <Order />
        <PaymentMethod />
        <button className='place-order-btn'>Place order</button>
    </div>
  )
}

export default OrderAndPayment