import React from 'react'
import './dashboard_overview.css'
import { Link } from 'react-router-dom'
import StocksImage from './images/stocks.webp'
import AnalyticsImage from './images/analytics.jpg'
import SalesImage from './images/sales.webp'
import OrdersImage from './images/orders.jpg'

const DashboardOverview = () => {
  return (
    <div className='dashboard-overview'>
         <Link className='overview' to={'/admin-dashboard/analytics'}>
            <h2 style={{backgroundImage: `url(${AnalyticsImage})`}}>
                Analytics
            </h2>
        </Link>

        <Link className='overview' to={'/admin-dashboard/orders'}>
            <h2 style={{backgroundImage: `url(${OrdersImage})`}}>
                Orders
            </h2>
        </Link>

        <Link className='overview' to={'/admin-dashboard/sales'}>
            <h2 style={{backgroundImage: `url(${SalesImage})`}}>
                Sales
            </h2>
        </Link>

        <Link className='overview' to={'/admin-dashboard/stocks'}>
            <h2 style={{backgroundImage: `url(${StocksImage})`}}>
                Stocks
            </h2>
        </Link>
    </div>
  )
}

export default DashboardOverview