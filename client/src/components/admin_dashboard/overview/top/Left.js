import React from 'react'

const Left = () => {
  return (
    <div className='left'>
        <div className='greeting'>
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
        
        <div className='stats-container'>
            <div className='stats-large'>
                <h6>EXPECTED EARNINGS</h6>
                <h4>Ksh. 150000</h4>
                <p className='up'>5.5% <i class="bi bi-arrow-up"></i></p>
               
            </div>

            <div className='stats-large'>
                <h6>AVERAGE DAILY SALES</h6>
                <h4>Ksh. 50000</h4>
                <p className='up'>3.9% <i class="bi bi-arrow-up"></i></p>
               
               
            </div>

            <div className='stats-large'>
                <h6>REVENUE THIS MONTH</h6>
                <h4>Ksh. 105920</h4>
                <p className='down'>2.5% <i class="bi bi-arrow-down"></i></p>
               
            </div>

            <div className='stats-large'>
                <h6>NEW CUSTOMERS THIS MONTH</h6>
                <h4>2K</h4>
                <p className='up'>2.8% <i class="bi bi-arrow-up"></i></p>
            </div>
        </div>
    </div>
  )
}

export default Left