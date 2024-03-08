import './checkout.css'
import TopLanding from '../top_landing/TopLanding'
import CartSummary from './cart_summary/CartSummary'

const Checkout = () => {

    return(
        <div className='checkout'>
            <TopLanding title={'Chekout'} />
            <div className='main-content'>
                <CartSummary />
            </div>
        </div>
)
}

export default Checkout