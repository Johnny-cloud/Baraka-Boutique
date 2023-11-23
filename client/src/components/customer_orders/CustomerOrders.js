import {useContext} from 'react'
import AppContext from '../context/AppContext'
import { Table } from 'react-bootstrap'
import SingleOrder from './SingleOrder'

const CustomerOrders = () => {
    const {currentCustomer} = useContext(AppContext)

    if(currentCustomer){
        console.log(currentCustomer.orders)

        return (
            <div>
                <h3>My previous orders</h3>
                <div>
                    <Table striped variant='light'>
                        <thead>
                            <td><h5>Description</h5></td>
                            <td><h5>Quantity</h5></td>
                            <td><h5>Price</h5></td>
                            <td><h5>Date Ordered</h5></td>
                        </thead>
                        <tbody>
                            {currentCustomer.orders.map(order => <SingleOrder order={order} key={order._id} />)}
                        </tbody>
                    </Table>
                </div>
            </div>
          )
    }
  
}

export default CustomerOrders