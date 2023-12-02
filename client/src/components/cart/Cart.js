// This code displays the cart section


import CartItem from './CartItem'

import './cart.css'

import { Table } from 'react-bootstrap'

import { useContext, useEffect, useState } from 'react'

import AppContext from '../context/AppContext'

import {useNavigate} from 'react-router-dom'



const Cart = () => {

  const{cart} = useContext(AppContext)

  const navigate = useNavigate()

  const [total, setTotal] = useState(0)


  const proceedToCheckout = () => {

    if(cart.length === 0){

      alert("Add items to cart!")

    } else{

      navigate('/checkout')

    }
    
  }

  // Calculate the cart total
  const updateTotal = () => {

    setTotal(cart.reduce((accumulator, cartItem) =>  (cartItem.price * cartItem.quantity) + accumulator, 0))

  }


  useEffect(() => {

    updateTotal()

  }, [])


  // Update cart total when items in the cart are increased or reduced
  useEffect(() => {

    updateTotal()

  }, [cart.length])


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
                
                {cart.map(cartItem => <CartItem cartItem={cartItem} key={cartItem._id} updateTotal={updateTotal} />)}
                
                
                <tr>

                  <td><h3>Total</h3></td>

                  <td><h4>Ksh.{total}</h4></td>

                  <td></td>

                </tr> 


                <tr>

                  <td className='chekout-btn-container'><button className='checkout-btn' onClick={proceedToCheckout}>Proceed to checkout <i class="bi bi-bag-check"></i></button></td>
                
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

export default Cart