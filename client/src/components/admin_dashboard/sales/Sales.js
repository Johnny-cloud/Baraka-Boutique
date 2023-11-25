
import './sales.css'
import AdminNav from '../admin_nav/AdminNav'
import { Chart, CategoryScale } from 'chart.js/auto'
import LineChart from './LineChart'
import OtherStats from './OtherStats'

import Totals from './Totals'

Chart.register(CategoryScale)
const Sales = () => {
   
  return (
    <div className='dashboard'>
        <AdminNav />
        
        <div className='dashboard-contents'>
            <h2>Sales Dashboard</h2>
            <Totals />
            <LineChart />
            <OtherStats />   
        </div>
        
    </div>
  )
}

export default Sales