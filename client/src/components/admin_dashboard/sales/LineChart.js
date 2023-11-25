import React from 'react'
import {Line, Radar} from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div className='line-chart' 
    style={{
        background: "linear-gradient(90deg, rgba(238,231,229,1) 0%, rgba(241,255,200,1) 93%)"

    }}
    >
                <h5>Revenue Overview</h5>
                <div className='month-revenues'>
                    <div>
                        <h6>This month</h6>
                        <p>Ksh.600000</p>
                    </div>
                    <div>
                        <h6>Last Month</h6>
                        <p>ksh.700000</p>
                    </div>
                    <div>
                        <h6>Average</h6>
                        <p>ksh.650000</p>
                    </div>
                </div>
                <Line 
                    data={{
                        labels: ["jan", "feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [
                            {
                                data: [600000, 620000, 650000, 700000, 680000, 670000, 650000, 655000, 670000, 680000, 660000,700000],
                                label: "Clothings",
                                borderColor : "rgb(108,209,133)",
                                
                            },
                            {
                                data: [601000, 600000, 620000, 650000, 680000, 670000, 655000, 670000, 670000, 660000, 680000,660000],
                                label: "Shoes",
                                borderColor: "brown",
                            },
                            {
                                data: [630000, 620000, 640000, 660000, 680000, 650000, 640000, 655000, 660000, 680000, 670000,690000],
                                label: "Watches",
                                borderColor: "red",
                            }

                        ]
                    }}
                    options= {{
                        plugins: {
                            legend: {
                                labels: {
                                    // This more specific font property overrides the global property
                                    font: {
                                        size: 15,

                                    }, 
                                    
                                }
                            }
                        },


                    }}
                   
               

                    
                />
            </div>
            
      
  )
}

export default LineChart