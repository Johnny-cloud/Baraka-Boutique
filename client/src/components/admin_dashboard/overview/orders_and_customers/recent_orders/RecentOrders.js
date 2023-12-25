import "./recent_orders.css";
import { useContext} from "react"
import AppContext from "../../../../context/AppContext"
import Order from "./order/Order";
import Loading from "../../../../animations/loading/Loading";

const RecentOrders = () => {
  const {orders} = useContext(AppContext)
  
  if(orders){
    return (
      <div className="recent-orders">
        <h6>RECENT ORDERS</h6>
        <div className='recent-order'>
          <div><h6>Order Id</h6></div>
          <div><h6>Payment</h6></div>
          <div><h6>Status</h6></div>
          <div><h6>Amount</h6></div>
          <div><h6>Action</h6></div>
        </div>
          {orders.slice(0, 7).map(order => <Order order={order} key={order._id}/>)}
      </div>
    )
  } else{
    return(
      <Loading />
    )
  }
 
}

export default RecentOrders