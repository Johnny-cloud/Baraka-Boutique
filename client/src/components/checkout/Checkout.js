import './checkout.css'
import TopLanding from '../top_landing/TopLanding'
import CartSummary from './cart_summary/CartSummary'
import BillingDetails from './billing_details/BillingDetails'

const Checkout = () => {

    return(
        <div className='checkout'>
            <TopLanding title={'Chekout'} />

            <div className='main-content flex-row-center'>
                <CartSummary />
                
                <div>
                    <BillingDetails />
                </div>
                
            </div>
        </div>
)
}

export default Checkout