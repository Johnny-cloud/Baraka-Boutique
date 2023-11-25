import React from 'react'
import './stocks.css'
import AdminNav from '../admin_nav/AdminNav'

const Stocks = () => {
  return (
    <div className='dashboard'>
        <AdminNav />
        
        <div className='dashboard-contents'>
            <h2>Stocks Dashboard</h2>
        </div>
        
    </div>
  )
}

export default Stocks