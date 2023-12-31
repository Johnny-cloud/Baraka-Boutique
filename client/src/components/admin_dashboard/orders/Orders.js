// This code returns a table that includes all orders that have been fetched from the server
import {useState, useEffect, useContext} from 'react'
import './orders.css'
import AdminNav from '../admin_nav/AdminNav'
import { Table } from 'react-bootstrap'
import SingleOrder from './SingleOrder'
import Loading from '../../animations/loading/Loading'
import AppContext from '../../context/AppContext'

const Orders = () => {
    const {orders, filteredOrders, setFilteredOrders} = useContext(AppContext)

  

    const handleSelectChange = (event) => {
        if(event.target.value === 'all'){
                setFilteredOrders(orders)
        } else{
                setFilteredOrders(orders.filter(product => product.status === event.target.value))
        }
    }

    if(filteredOrders.length > 0){
            return (
                <div className='dashboard'>
                <AdminNav />
                <div className='dashboard-contents'>
                    <h2>Orders Dashboard <span className='filter'>Filter 
                        <select onChange={handleSelectChange}>
                            <option value={'all'}>All</option>
                            <option value={'pending'}>Pending</option>
                            <option value={'completed'}>Completed</option>
                            <option value={'declined'}>Declined</option>
                        </select>
                    </span></h2>
                    <Table striped>
                        <thead>
                            <td><h5>Description</h5></td>
                            <td><h5>Quantity</h5></td>
                            <td><h5>Price</h5></td>
                            <td><h5>Status</h5></td>
                            <td><h5>Complete</h5></td>
                            <td><h5>Decline</h5></td>
                        </thead>
                        <tbody>
                            {filteredOrders.map(order => <SingleOrder key={order._id} order={order} />)}

                            <Loading />
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

}
export default Orders