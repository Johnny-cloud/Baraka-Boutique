import React from 'react'
import AdditionalStats from './AdditionalStats'
import SalesRevenue from './SalesRevenue'

const OtherStats = () => {
  return (
    <div className='other-stats'>
        <h4>Other Stats</h4>
        <div className='other-stats-container'>
            <AdditionalStats />
            <SalesRevenue />
        </div>
        
    </div>
  )
}

export default OtherStats