import {useContext} from 'react'
import AppContext from '../context/AppContext'
import CartItem from './CartItem'
import './cart.css'
import { Table } from 'react-bootstrap'

const Cart = () => {

  const {cart} = useContext(AppContext)

  return (
    <div className='display-container'>
        <h3>Your cart</h3>
        <Table>
            <thead>
                <tr>
                    <td><h4>Description</h4></td>
                    <td><h3>Price (Ksh.)</h3></td>
                    <td><h3>Quantity</h3></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
              {cart.map(cartItem => <CartItem cartItem={cartItem} key={cartItem._id} />)}
              <tr>
                <td><h3>Total</h3></td>
                <td><h4> {cart.reduce((accumulator, cartItem) =>  (parseInt(cartItem.price) * cartItem.quantity) + accumulator, 0)}</h4></td>
                <td></td>
              </tr>  
            </tbody>
        </Table>
    </div>
  )
}

export default Cart