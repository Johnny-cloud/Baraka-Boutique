import {useContext} from 'react'
import Order from './Order'
import PaymentMethod from './PaymentMethod'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const OrderAndPayment = () => {
  let {currentCustomer, cart, setCart, setCurrentCustomer} = useContext(AppContext)
  const navigate = useNavigate()

  const placeOder = async () => {
    const response = await fetch(`/customers/${currentCustomer._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...currentCustomer,
        orders: [...currentCustomer.orders, ...cart]
      })
    })

    if(response.ok){
      setCart([])
      const customer = await response.json()
      setCurrentCustomer(customer)
      alert("Your oder was placed successfully!")
      navigate('/customer-orders')

    } else{
      console.log(response)
      alert("Unsuccessful")
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