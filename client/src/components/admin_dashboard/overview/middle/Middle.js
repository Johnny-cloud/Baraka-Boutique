import React from 'react'
import {  Line, Radar } from 'react-chartjs-2'
import './middle.css'

const Middle = () => {
  return ( 
    <div className='middle'>

          <div className='chart-table-container'>
            <h4>Growth revenue</h4>
            <div className='chart'>
                <Line 
                    data={{
                        labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [
                            {
                                label: "",
                                data: [500000, 600000, 550000, 620000, 630000],
                                borderColor: "green"
                            }
                        ]
                    }}

                    options={{
                        responsive: true
                    }}
                />
            </div>
          
        </div>

        <div className='chart-container'>
            <h4>Year Sales by category</h4>
            <Radar
                data={{
                    labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Shoes",
                            data: [2000, 3000, 2500, 2800, 3000],
                            
                            borderColor: "orange",
                            
                            
                        },
                        {
                            label: "Clothes",
                            data: [2100, 2600, 2400, 2300, 2500],
                            borderColor: "green",
                            backgroundColor: "rgba(131, 10, 13, 0.3)",
                            fill: true
                            
                        },
                        {
                            label: "Watches",
                            data: [2200, 2400, 2600, 2300, 2200],
                            borderColor: "red",
                            
                        }

                    ]
                }}
            />
        </div>
 
    </div>
  )
}

export default Middle