import './billing_details.css'

const BillingDetails = () => {
  return (
    <div className='billing-details'>
        <form>
            <h5>BILLING DETAILS</h5>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
            </div>
            <div>
                <label htmlFor='country'>Country</label>
                <input type='text' id='country' />
            </div>
            <div>
                <label htmlFor='first-name'>First Name</label>
                <input type='text' id='first-name' />
            </div>
            <div>
                <label htmlFor='last-name'>Last Name</label>
                <input type='text' id='last-name' />
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' />
            </div>
            <div>
                <label htmlFor='code'>Code</label>
                <input type='text' id='code' />
            </div>
        </form>

        <form>
            <h4>CARD DETAILS</h4>
            <div>
                <label htmlFor='card-number'>Card Number</label>
                <input type='text' id='card-number'/>
            </div>
            <div>
                <label htmlFor='expiration'>Expiration Date</label>
                <input type='text' id='expiration'/>
            </div>
            <div>
                <label htmlFor='card-name'>Name on card</label>
                <input type='text' id='card-name'/>
            </div>
        </form>

        <button>PAY NOW</button>
    </div>
  )
}

export default BillingDetails