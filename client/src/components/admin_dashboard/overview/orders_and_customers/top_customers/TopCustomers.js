import React, { useContext } from 'react'
import AppContext from '../../../../context/AppContext'
import TopCustomer from './top_customer/TopCustomer'
import "./top_customers.css"
import Loading from '../../../../animations/loading/Loading'

const TopCustomers = () => {
  const {customers} = useContext(AppContext)

  if(customers){
    return (
      <div className='top-customers'>
          <h6>TOP CUSTOMERS</h6>
          <div className="top-customer">
          <div></div>
          <div><h6>NAME</h6></div>
          <div><h6>SALES</h6></div>
      </div>
          {customers.slice(0,5).map((customer) => <TopCustomer customer={customer} key={customer._id} />) }
      </div>
    )
  } else{
    return (
      <Loading />
    )
  }
  
}

export default TopCustomers