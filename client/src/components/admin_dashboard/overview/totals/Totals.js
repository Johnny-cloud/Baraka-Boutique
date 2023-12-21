import "./totals.css"

const Totals = () => {
  return (
    <div className='totals'>
        <div className='totals-container'>
            <div className='total green'>
                <div className="icon"><i class="bi bi-bag"></i></div>
                <div>
                    <h6>TOTAL SALES</h6>
                    <p className='figures'>10000</p>
                    <p className="up-rating"><i class="bi bi-arrow-up"></i>4.2%</p>
                </div>
            </div>
            <div className='total purple'>
                <div className="icon"><i class="bi bi-receipt-cutoff"></i></div>
                <div>
                    <h6>TOTAL EXPENSES</h6>
                    <p className='figures'>$28000</p>
                    <p className="up-rating"><i class="bi bi-arrow-up"></i>12.0%</p>
                </div>
            </div>
            <div className='total orange'>
                <div className="icon"><i class="bi bi-person"></i></div>
                <div>
                    <h6>TOTAL VISITORS</h6>
                    <p className='figures'>5000</p>
                    <p className="down-rating"><i class="bi bi-arrow-down"></i>6.7%</p>
                </div>
            </div>
            <div className='total blue'>
                <div className="icon"><i class="bi bi-cart3"></i></div>
                <div>
                    <h6>TOTAL ORDERS</h6>
                    <p className='figures'>15000</p>
                    <p className="up-rating"><i class="bi bi-arrow-up"></i>5.8%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Totals