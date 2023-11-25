import React from 'react'
import { PolarArea } from 'react-chartjs-2'

const AdditionalStats = () => {
  return (
    <div className='additional-stats'>
        <h5>Additional stats</h5>

        <PolarArea 
            data={{
                labels: ["New deals", "Proposals", "Closed deals"],
                datasets: [
                    {
                        data: [3000, 1500, 2000]
                    }
                ]
            }}
        />
        
    </div>
  )
}

export default AdditionalStats