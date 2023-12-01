import React from 'react'
import {Bar} from 'react-chartjs-2'

const Right = () => {
  return (
    <div className='right'>
        <div className='left-container stats-container'>
            <div className='stats-small'>
                <h6><i class="bi bi-box"></i> ORDERS</h6>
                <h4>15809</h4>
                <p className='up'>3%<i class="bi bi-arrow-up"></i></p>
            </div>

            <div className='stats-small'>
                <h6><i class="bi bi-cart"></i> ITEMS SOLD</h6>
                <h4>15507</h4>
                <p className='up'>4.8%<i class="bi bi-arrow-up"></i></p>
            </div>

            <div className='stats-small'>
                <h6><i class="bi bi-cash-stack"></i> REFUNDS</h6>
                <h4>ksh.10000</h4>
                <p className='down'>0.6%<i class="bi bi-arrow-down"></i></p>
            </div>

            <div className='stats-small'>
                <h6><i class="bi bi-receipt-cutoff"></i> GROSS SALE</h6>
                <h4>Ksh.50000</h4>
                <p className='up'>12.8%<i class="bi bi-arrow-up"></i></p>
            </div>

            <div className='stats-small'>
                <h6><i class="bi bi-truck"></i> SHIPPING</h6>
                <h4>Ksh.20000</h4>
                <p className='down'>4%<i class="bi bi-arrow-down"></i></p>
            </div>

            <div className='stats-small'>
                <h6><i class="bi bi-arrow-left-right"></i> PROCESSING</h6>
                <h4>100</h4>
                <p className='up'>10%<i class="bi bi-arrow-up"></i></p>
            </div>
        </div>

        <div className='chart-container right-container'>
                    <h4>Weekly sales</h4>
                    <Bar 
                        data={{
                            labels: ["sun", "mon", "tue", "wed", "thur", "fri", "sat"],
                            datasets: [
                                {
                                    label: 'Shoes',
                                    data: [1500, 2000, 2100, 2050, 2150, 2200, 2000],
                                    tension: 0,
                                    borderColor: "purple",
                                    borderWidth: 3,
                                    pointStyle: "line",
                                    pointBorderWidth: 0,
                                    pointBackgroundColor: "purple",
                                    backgroundColor: "purple",
                                    fill: true
                                    
                                },
                                {
                                    label: 'Clothes',
                                    data: [1600, 2100, 2200, 2100, 2300, 2500, 2100],
                                    tension: 0.0,
                                    borderColor: "green",
                                    borderWidth: 3,
                                    pointStyle: "line",
                                    backgroundColor: "green",
                                    fill: true
                                    
                                },
                                {
                                    label: 'Watches',
                                    data: [1300, 1500, 1600, 1500, 1400, 1800, 1500],
                                    tension: 0,
                                    borderColor: "orange",
                                    borderWidth: 3,
                                    pointStyle: "line",
                                    backgroundColor: "orange",
                                    fill: true,
                                    
                                },

                            ],
                            

                        }}

                        options={{

                            scales:{
                                x: {
                                    grid: {
                                        display: false
                                    }
                                },
                                y: {
                                    grid: {
                                        display: true
                                    }
                                }
                            },

                            
                        }}
                    />
                
            </div>
    </div>
  )
}

export default Right