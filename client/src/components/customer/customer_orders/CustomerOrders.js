// This code returns a table containing all of a customer's orders
import {useContext, useEffect} from 'react'
import AppContext from '../../context/AppContext'
import { Table } from 'react-bootstrap'
import SingleOrder from './SingleOrder'
import { useNavigate } from 'react-router-dom'
import './customer_orders.css'

const CustomerOrders = () => {
    const {currentCustomer, setCurrentCustomer, placedOrder, api} = useContext(AppContext)
    const navigate = useNavigate()

    const auth = async () => {
        const response = await fetch(`${api}/auth`, {method: "GET", credentials: "include"})

        if(response.ok){
            const customer = await response.json()
            setCurrentCustomer(customer)
        }
    }

    // Fetches orders including the one recently placed
    useEffect(() => {
        auth()
    }, [placedOrder])

    useEffect(() => {
        auth()
    }, [])

    if(currentCustomer){
            return (
                <div className='customer-orders'>
                <h3>My previous orders</h3>
                <div className='table-container'>
                    <table >
                        <thead>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Date Ordered</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            {currentCustomer.orders.map(order => <SingleOrder order={order} key={order._id} />)}
                        </tbody>
                    </table>
                </div>
            </div>
          )
    } else{
        navigate('/')
    }

}
export default CustomerOrders