import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import { Link } from 'react-router-dom'

const SingleProduct = ({product}) => {
  const {setProductToUpdate} = useContext(AppContext)
  const handleClick = () => {
      setProductToUpdate(product)
  }
  const handleDeleteClick = () => {
    alert("Only the main admin can delete")
  }
  return (
      <tr>
        <td>{product.description}</td>
        <td>ksh.{product.price}</td>
        <td>{product.category}</td>
        <td>{product.rating}</td>
        <td><Link to={'/admin-dashboard/products/product-update-page'} onClick={handleClick}><button className='update-btn'>Update</button></Link></td>

        <td><button className='delete-btn' onClick={handleDeleteClick}><i class="bi bi-trash"></i></button></td>

    </tr>

  )
}

export default SingleProduct