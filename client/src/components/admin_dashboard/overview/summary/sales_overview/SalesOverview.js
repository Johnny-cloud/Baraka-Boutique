import React from 'react'
import SaleCircle from './sale_circle/SaleCircle'
import "./sales_overview.css"

const SalesOverview = () => {
  return (
    <div className='sales-overview'>
        <h6>SALES OVERVIEW</h6>
        <SaleCircle />
        <div className='sales-summaries'>
            <div className='sales-summary'>
                <div className='icon blue'><i class="bi bi-currency-dollar"></i></div>
                <div>
                    <p>Revenue</p>
                    <h6>$33987</h6>
                </div>
            </div>
            <div className='sales-summary'>
                <div className='icon orange'><i class="bi bi-percent"></i></div>
                <div>
                    <p>Conversion</p>
                    <h6>80%</h6>
                </div>
            </div>
            <div className='sales-summary'>
                <div className='icon green'><i class="bi bi-cash-stack"></i></div>
                <div>
                    <p>Gross</p>
                    <h6>$9.8M</h6>
                </div>
            </div>
            <div className='sales-summary'>
                <div className='icon purple'><i class="bi bi-people"></i></div>
                <div>
                    <p>Customers</p>
                    <h6>+1500</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SalesOverview