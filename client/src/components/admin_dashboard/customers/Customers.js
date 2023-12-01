import { useEffect, useState, useContext } from 'react'
import './customers.css'
import SingleCustomer from './SingleCustomer'
import {Table, Form} from 'react-bootstrap'
import AdminNav from '../admin_nav/AdminNav'
import Loading from '../../animations/loading/Loading'
import AppContext from '../../context/AppContext'

const Customers = () => {

    const [customers, setCustomers] = useState([])
    const [filteredCustomers, setFilteredCustomers] = useState([])
    const {api} = useContext(AppContext)

    const [formData, setFormData] = useState({
        searchTerm: ""
    })

    const handleChange = (event) => {
        setFormData(event.target.value)
        setFilteredCustomers(customers.filter(customer => customer.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    const fetchCustomers = async () => {
        const response = await fetch(`${api}/customers`)

        if(response.ok){
            const allCustomers = await response.json()
            setCustomers(allCustomers)
            setFilteredCustomers(allCustomers)
        }
    }

    useEffect(() => {
        fetchCustomers()
    }, [])

    if(filteredCustomers){
        return(
            <div >
                <AdminNav />
                <div className='dashboard-contents'>
                    <h3>Customers</h3>
                    <Form>
                        <Form.Group>
                            <Form.Label>Filter by name</Form.Label>
                            <Form.Control type='text' placeholder="Enter customer's name" value={formData.searchTerm} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                    <Table striped>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                        </thead>
                        <tbody>
                            {filteredCustomers.map(customer => <SingleCustomer customer={customer} key={customer._id} />)}
                            {filteredCustomers? <Loading />: null}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
 
}

export default Customers