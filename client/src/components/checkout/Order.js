// This code displays the cart items the user purchased

import CheckoutCartItem from './OrderItem'

import { Table } from 'react-bootstrap'

import { useContext } from 'react'

import AppContext from '../context/AppContext'



const Order = () => {

  const{cart} = useContext(AppContext)

  if(cart){
    
    return (

      <div className='order'>

          <h4>Your cart</h4>

          <Table>


              <thead>

                  <tr>

                      <td><h5>Description</h5></td>

                      <td><h5>Price (Ksh.)</h5></td>

                      <td><h5>Quantity</h5></td>

                      <td></td>

                  </tr>

              </thead>


              <tbody>

                {cart.map(cartItem => <CheckoutCartItem cartItem={cartItem} key={cartItem._id} />)}

                <tr>

                  <td><h5>Total</h5></td>

                  <td><h5> {cart.reduce((accumulator, cartItem) =>  (cartItem.price * cartItem.quantity) + accumulator, 0)}</h5></td>
                
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