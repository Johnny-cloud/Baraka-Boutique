
const Left = () => {
      return (
        <div className='left'>
        <div className='greeting left-container'>
            <div className='message'>
                <h4>Good Day Admin!</h4>
                <p>Here is what's happening in the store</p>
            </div>
            <div className='info'>
                <div>
                    <h6>TODAY'S VISIT</h6>
                    <h4>15,209</h4>
                </div>
                <div>

                    <h6>TODAY'S TOTAL SALES</h6>
                    <h4>Ksh. 75,300</h4>
                </div>
            </div>
        </div>
        <div className='statistics right-container'>
        <h2>Statistics</h2>
        <div className='stats-container'>

            <div className='stats-large'>
                <h6>EARNINGS <i class="bi bi-currency-exchange"></i></h6>
                <h4>Ksh. 150000</h4>
                <p className='up'>5.5% <i class="bi bi-arrow-up"></i></p>

            </div>
            <div className='stats-large'>
                <h6>SALES <i class="bi bi-coin"></i></h6>
                <h4>Ksh. 50000</h4>
                <p className='up'>3.9% <i class="bi bi-arrow-up"></i></p>

            </div>
            <div className='stats-large'>
                <h6>REVENUE <i class="bi bi-cash-coin"></i></h6>
                <h4>Ksh. 105920</h4>
                <p className='down'>2.5% <i class="bi bi-arrow-down"></i></p>

            </div>
            <div className='stats-large'>
                <h6>CUSTOMERS <i class="bi bi-people"></i></h6>
                <h4>2K</h4>
                <p className='up'>2.8% <i class="bi bi-arrow-up"></i></p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Left