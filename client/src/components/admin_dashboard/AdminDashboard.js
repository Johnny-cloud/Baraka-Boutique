import React from 'react'
import './admin_dashboard.css'
import AdminNav from './admin_nav/AdminNav'
import Overview from './overview/Overview'


const AdminDashboard = () => {
  return (
    <div className='dashboard'>
        <AdminNav />
        <Overview />
    </div>
  )
}

export default AdminDashboard