// This code returns a table containing all of a customer's orders
import {useContext, useEffect} from 'react'
import AppContext from '../../context/AppContext'
import { Table } from 'react-bootstrap'
import SingleOrder from './SingleOrder'
import { useNavigate } from 'react-router-dom'

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
    } else{
        navigate('/')
    }

}
export default CustomerOrders