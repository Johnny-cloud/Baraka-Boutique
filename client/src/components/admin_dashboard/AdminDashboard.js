import React from 'react'
import './admin_dashboard.css'
import AdminNav from './admin_nav/AdminNav'
import DashboardOverview from './dashboard_overview/DashboardOverview'

const AdminDashboard = () => {
  return (
    <div className='dashboard'>
        <AdminNav />

        <div className='dashboard-contents'>
            <h2>AdminDashboard</h2>
            <DashboardOverview />
        </div>
    </div>
  )
}

export default AdminDashboard