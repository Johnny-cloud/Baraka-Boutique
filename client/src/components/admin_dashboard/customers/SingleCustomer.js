import {useContext} from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

const SingleCustomer = ({customer}) => {
  const {setCustomerToUpdate} = useContext(AppContext)

  const handleClick = () => {
      setCustomerToUpdate(customer)
  }

  const handleDeleteClick = () => {
    alert("Only the main admin can delete.")
  }

  return (
      <tr>
        <td>{customer.name}</td>
        <td>{customer.email}</td>
        <td><Link to={'/admin-dashboard/customers/customer-update-page'} onClick={handleClick}><button className='update-btn'>Update</button></Link></td>
        <td><button className='delete-btn' onClick={handleDeleteClick}><i class="bi bi-trash"></i></button></td>
    </tr>
  )

}
export default SingleCustomer