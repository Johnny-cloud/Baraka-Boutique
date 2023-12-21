import "./overview.css"
import Totals from "./totals/Totals"
import AdminNav from "../admin_nav/AdminNav"
import Summary from "./summary/Summary"

const Overview = () => {
  return(
    <div className='dashboard'>
      <AdminNav />
      <div className="dashboard-contents">
        <Totals />
        <Summary />
      </div>
    </div>
  )
}

export default Overview