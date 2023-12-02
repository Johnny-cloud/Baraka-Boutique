/**
 * 
 * @returns This is the page for the admin to update customer details
 */

import {useContext} from 'react'

import './customer_update_page.css'

import AppContext from '../../../context/AppContext'

import { Form } from 'react-bootstrap'

import AdminNav from '../../admin_nav/AdminNav'



const CustomerUpdatePage = () => {

  const {customerToUpdate} = useContext(AppContext)

  if(customerToUpdate){

    return(

      <div>

      <AdminNav />

      <div className='dashboard-contents'>

        <h2>Update {customerToUpdate.name}'s details</h2>

          <Form>


            <Form.Group>

              <Form.Label>Customer Name</Form.Label>

              <Form.Control placeholder={customerToUpdate.name} value={""}/>

            </Form.Group>


            <Form.Group>

              <Form.Label>Customer Email</Form.Label>

              <Form.Control placeholder={customerToUpdate.email} value={""} />

            </Form.Group>


            <Form.Group>
            
              <button className='submit-btn'>Update customer</button>

            </Form.Group>


          </Form>


      </div>
        
      </div>
    )

  } else{

    return(

      <div>

        <h2>No customer was selected</h2>
        
      </div>

    )
  }
  
}

export default CustomerUpdatePage