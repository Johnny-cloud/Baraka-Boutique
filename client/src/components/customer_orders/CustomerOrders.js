import {useContext, useEffect} from 'react'
import AppContext from '../context/AppContext'
import { Table } from 'react-bootstrap'
import SingleOrder from './SingleOrder'

const CustomerOrders = () => {
    const {currentCustomer, setCurrentCustomer} = useContext(AppContext)

    const auth = async () => {
        const response = await fetch('/auth')

        if(response.ok){
            const customer = await response.json()
            setCurrentCustomer(customer)
            console.log('Authenticated!')
        }
    }

    useEffect(() => {
        auth()
    }, [])

    if(currentCustomer){
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
                            <td><h5>Status</h5></td>
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