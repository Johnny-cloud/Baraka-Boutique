import React from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'

const Totals = () => {
  return (
    <div className='totals'>
        <div style={{
        background: "linear-gradient(328deg, rgba(168,223,182,1) 0%, rgba(217,174,255,0.9836309523809523) 100%)",
    }}>
            <h6>Total sales</h6>
            <h5>ksh. 2000000</h5>
            <div className='line'>
                <Line 

                    data={{
                        labels: ["jan", "feb", "march", "april", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
                        datasets: [
                            {
                                data: [400, 250, 500, 350, 600, 450, 500, 400, 250, 500, 350, 450],
                                borderColor: "orange",
                                label: "total sales",
                                backgroundColor: "rgb"
                                
                            }
                        ]
                    }}
                    options={{
                        animations: {
                            tension: {
                                duration: 1500,
                                easing: 'linear',
                                from: 0.6,
                                to: 0,
                                loop: true
                            }
                        },
                        
                    }}
                />
            </div>
           
        </div>

        <div style={{
            background: "linear-gradient(328deg, rgba(223,204,168,1) 0%, rgba(255,174,218,0.9836309523809523) 100%)"
        }}>
            <h6>Total profits</h6>
            <h5>ksh. 1500000</h5>
            <Bar 
                    data={{
                        labels: ["jan", "feb", "march", "april", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
                        datasets: [
                            {
                                data: [100000, 105000, 100000, 85000, 105000, 90000, 80000, 100000, 90000, 100000, 105000, 100000],
                                borderColor: "green",
                                label: "Total profits",
                                backgroundColor: "green"
                                
                            }
                        ]
                    }}
                    options={{
                        animations: {
                            tension: {
                                duration: 1500,
                                easing: 'linear',
                                from: 0.6,
                                to: 0,
                                loop: true
                            }
                        },
                        
                    }}
                />
        </div>

        <div style={{
            background: "linear-gradient(328deg, rgba(169,168,223,1) 0%, rgba(174,255,186,0.9836309523809523) 100%)"
        }}>
            <h6>Total orders</h6>
            <h5>ksh. 600000</h5>
            <Line 
                    data={{
                        labels: ["jan", "feb", "march", "april", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
                        datasets: [
                            {
                                data: [400, 250, 500, 350, 600, 450, 500, 400, 250, 500, 350, 450],
                                borderColor: "brown",
                                label: "Total orders",
                                backgroundColor: "rgb"
                                
                            }
                        ]
                    }}
                    options={{
                        animations: {
                            tension: {
                                duration: 2000,
                                easing: 'linear',
                                from: 0.5,
                                to: 0,
                                loop: true
                            }
                        },
                        
                    }}
                />
        </div>

        <div style={{
            background: "linear-gradient(328deg, rgba(167,165,244,1) 0%, rgba(255,250,174,0.9836309523809523) 100%)"
        }}>
            <h6>Consolidated</h6>
            <h5>ksh. 1200000</h5>
            <Line 
                    data={{
                        labels: ["jan", "feb", "march", "april", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
                        datasets: [
                            {
                                data: [400, 250, 500, 350, 600, 450, 500, 400, 250, 500, 350, 450],
                                borderColor: "blue",
                                label: "Consolidated",
                                
                                
                            }
                        ]
                    }}
                    options={{
                        animations: {
                            tension: {
                                duration: 1000,
                                easing: 'linear',
                                from: 0.6,
                                to: 0,
                                loop: true
                            }
                        },
                        
                    }}
                />
        </div>
    </div>
  )
}

export default Totals