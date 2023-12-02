// This code returns the bottom part of the overview section
import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import './bottom.css'

const Bottom = () => {
      return (
        <div className='bottom'>
        <div className='left-container'>
            <h4>Orders summary</h4>
            <div className='chart'>
                <Pie 
                    data={{
                            labels: ["Completed", "Pending", "Declined"],
                        datasets:[
                                {
                                    data: [50000, 20000, 5000],
                                backgroundColor: [
                                    'rgba(8,180,53, 0.7)',
                                'rgba(136,180,8, 0.7)',
                                'rgba(180,31,8, 0.7)',]
                            }
                        ]
                    }}
                />
            </div>

        </div>
        <div className='right-container'>
            <h4>Visitors</h4>
            <Bar 
                data={{
                        labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                            {   
                                label: " ",
                            data: [1000, 1500, 1200, 1300, 1800],
                            barThickness: 20,
                            borderWidth: 2,
                            borderRadius: 10,
                            borderColor: "orange",
                            backgroundColor: "orange"
                        }
                    ]
                }}
            />

        </div>

    </div>
  )
}
export default Bottom