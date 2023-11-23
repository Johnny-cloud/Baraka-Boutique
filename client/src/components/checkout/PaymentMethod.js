import React from 'react'
import { Form } from 'react-bootstrap'

const PaymentMethod = () => {
  return (
    <div className='payment-method'>
        <h4>Payment Method</h4>
        <div>
            <p><b>Credit Card</b><span className='credit-card-image-container'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' alt='' /></span><span className='credit-card-image-container'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png' alt='' /></span></p>
            <Form>
                <Form.Group>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control placeholder='1234 5678 9101 1121' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Expiration(MM/YY)</Form.Label>
                    <Form.Control type='text' placeholder='09 / 24'/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Card Security Code</Form.Label>
                    <Form.Control type='number' placeholder='0123'/>
                </Form.Group>
            </Form>
        </div>
    </div>
  )
}

export default PaymentMethod