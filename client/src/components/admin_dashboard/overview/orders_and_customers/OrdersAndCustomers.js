import RecentOrders from "./recent_orders/RecentOrders"
import TopCustomers from "./top_customers/TopCustomers"
import "./orders_and_customers.css"
import TopCountries from "./top_countries/TopCountries"

const OrdersAndCustomers = () => {
  return (
    <div className="orders-and-customers">
        <RecentOrders />
        <TopCustomers />
        <TopCountries />
    </div>
  )
}

export default OrdersAndCustomers