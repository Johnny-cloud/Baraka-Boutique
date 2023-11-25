import {useState, useEffect} from 'react'
import './orders.css'
import AdminNav from '../admin_nav/AdminNav'
import { Table } from 'react-bootstrap'
import SingleOrder from './SingleOrder'

const Orders = () => {
    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        const response = await fetch('/orders')

        if(response.ok){
            const fetchedOrders = await response.json()
            setOrders(fetchedOrders)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    if(orders){
        return (
            <div className='dashboard'>
                <AdminNav />
                
                <div className='dashboard-contents'>
                    <h2>Orders Dashboard</h2>
                    <Table striped>
                        <thead>
                            <td><h5>Description</h5></td>
                            <td><h5>Price</h5></td>
                            <td><h5>Quantity</h5></td>
                            <td><h5>Status</h5></td>
                            <td><h5>Complete</h5></td>
                            <td><h5>Decline</h5></td>
                        </thead>
                        <tbody>
                            {orders.map(order => <SingleOrder key={order._id} order={order} />)}
                        </tbody>
                    </Table>
                </div>
            
            </div>
        )
    }
 
}

export default Orders