import {useContext} from 'react'
import Order from './Order'
import PaymentMethod from './PaymentMethod'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const OrderAndPayment = () => {
  let {currentCustomer, cart, setCart} = useContext(AppContext)
  const navigate = useNavigate()

  const placeOder = async () => {

    try{
      cart.forEach(item => createOrder(item))
      setCart([])
      alert("Your oder was placed successfully!")
      navigate('/customer-orders')

    } catch(err){
      console.log(err);
    }

  }

  const createOrder = async (item) => {
    const response = await fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...item, customer_id: currentCustomer._id})
    })

    if(response.ok){
     console.log('Order created........') 
    }
  }

  return (
    <div className='order-and-payment'>
        <Order />
        <PaymentMethod />
        <button className='place-order-btn' onClick={placeOder}>Place order</button>
    </div>
  )
}

export default OrderAndPayment