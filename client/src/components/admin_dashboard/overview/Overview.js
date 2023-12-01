import React from 'react'
import './overview.css'
import AdminNav from '../admin_nav/AdminNav'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
import Top from './top/Top'
import Middle from './middle/Middle'
import Bottom from './bottom/Bottom'


Chart.register(CategoryScale)
const Overview = () => {
  return (
    <div className='overview'>
        <AdminNav />
        <div className='dashboard-contents'>
            <h3>Overview</h3>
            <Top />
            <Middle />
            <Bottom />
        </div>
    </div>
    
  )
}

export default Overview