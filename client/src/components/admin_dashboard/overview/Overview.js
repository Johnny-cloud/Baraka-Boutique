import "./overview.css"
import Totals from "./totals/Totals"
import AdminNav from "../admin_nav/AdminNav"
import Summary from "./summary/Summary"
import OrdersAndCustomers from "./orders_and_customers/OrdersAndCustomers"
import ProductsOverview from "./products_overview/ProductsOverview"

const Overview = () => {
  return(
    <div className='dashboard'>
      <AdminNav />
      <div className="dashboard-contents">
        <Totals />
        <Summary />
        <OrdersAndCustomers />
        <ProductsOverview />
      </div>
    </div>
  )
}

export default Overview