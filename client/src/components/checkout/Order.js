import CheckoutCartItem from './OrderItem'
import { Table } from 'react-bootstrap'
import { useContext } from 'react'
import AppContext from '../context/AppContext'

const Order = () => {

  const{cart} = useContext(AppContext)


  if(cart){
    
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
                {cart.map(cartItem => <CheckoutCartItem cartItem={cartItem} key={cartItem._id} />)}
                <tr>
                  <td><h3>Total</h3></td>
                  <td><h4> {cart.reduce((accumulator, cartItem) =>  (cartItem.price * cartItem.quantity) + accumulator, 0)}</h4></td>
                </tr> 
              </tbody>
          </Table>
      </div>
    )


  } else{
    return(
      <div>
        <h2>No Items in the cart!</h2>
      </div>
    )
  }

  
}

export default Order