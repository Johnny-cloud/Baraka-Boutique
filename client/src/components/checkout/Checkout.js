import {useContext} from 'react'
import AppContext from '../context/AppContext'
import CheckoutLogin from './CheckoutLogin'
import BillingDetails from './BillingDetails'
import OrderAndPayment from './OrderAndPayment'
import './checkout.css'

const Checkout = () => {
    const {currentCustomer} = useContext(AppContext)
    

    if(!currentCustomer){
       return(
        <div>
            <CheckoutLogin />
        </div>
       )

    } else{
        return(
            <div className='checkout-container'>
                <BillingDetails />
                <OrderAndPayment />
            </div>
        )
    }

    
    
    
}

export default Checkout