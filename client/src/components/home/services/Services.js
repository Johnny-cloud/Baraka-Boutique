import './services.css'

const Services = () => {
  return (
    <div className='services'>
        <div className='services-container'>
            <div className='service'>
                <h1><i class="bi bi-truck"></i></h1>
                <p>Affordable delivery</p>
            </div>
            <div className='service'>
                <h1><i class="bi bi-currency-dollar"></i></h1>
                <p>Money back guarantee</p>
            </div>
            <div className='service'>
                <h1><i class="bi bi-gift"></i></h1>
                <p>Extra 20% off gift vouchers</p>
            </div>
        </div>
    </div>
  )
}

export default Services