import './on_offer.css'

const OnOffer = () => {
    return (
      <div className='on-offer'>
        <div className='on-offer-contents-container'>
            <div className='on-offer-details-container'>
                <h1>Our Special Offers This Season!</h1>
                <h3>Shop and save upto <span>50%</span></h3>
                <p className='current-price'>Ksh. 500</p>
                <p className='previous-price'>ksh. 1000</p>
            </div>
        </div>
    </div>
  )
}
export default OnOffer