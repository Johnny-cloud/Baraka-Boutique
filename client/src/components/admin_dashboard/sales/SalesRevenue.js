import React from 'react'
import { Line } from 'react-chartjs-2'

const SalesRevenue = () => {
  return (
    <div className='sales-revenue'>
        <h5>Sales Revenue</h5>
        <Line 

            data={{
                labels: ["jan", "feb", "march", "april", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
                datasets: [
                    {
                        data: [400, 250, 500, 350, 600, 450, 500, 400, 250, 500, 350, 450],
                        borderColor: "black",
                        label: "Sales revenue",
                        
                    }
                ]
            }}
            options={{
                animations: {
                    tension: {
                        duration: 2500,
                        easing: 'linear',
                        from: 0.3,
                        to: 0,
                        loop: true
                    }
                },
                
            }}
        />
    </div>
  )
}

export default SalesRevenue