// This code displays the logging in for when a customer navigates from the cart section and has not logged in
import {useState, useContext} from 'react'
import AppContext from '../context/AppContext'
import { Form } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'

const CheckoutLogin = () => {
    const {setCurrentCustomer, api} = useContext(AppContext)
    const navigate = useNavigate()
    const[formData, setFormData] = useState({
            email: "",
        password: ""
    })
    
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response =  await fetch(`${api}/login`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify({...formData})
        })
        if(response.ok){
            const customer = await response.json()
            setCurrentCustomer(customer)
            navigate('/checkout')
            console.log(response)
        } else{
            alert("Unable to login. Try again!")
            console.log(response);
        }
        setFormData({
                email: "",
            password: ""
        })
    }

    // Log in to a demo account
    const logInDemo = async (event) => {
        event.preventDefault()
        navigate('/animations/login-page')
        const response = await fetch(`${api}/login`, {
            method: 'POST',
            headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: "jane@gmail.com",
                password: "doe"
            }),
            credentials: "include"
        })
        if(response.ok){
            const customer = await response.json()
            setCurrentCustomer(customer)
            navigate('/checkout')
        }
    }

  return (
        <div className='display-container'>
        <h2>Login</h2>
        <Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control id='email' name='email' type='text' value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control id='password' name='password' type='password' value={formData.password} onChange={handleChange} />

            </Form.Group>
            <Form.Group className='multiple-btns'>
                <Form.Group>
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>  
                </Form.Group>
                <div>
                    <button className='demo-btn' onClick={logInDemo}>Demo Account</button>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Don't have an account? <Link to={'/checkout-signup'} className='signup-link'>SignUp</Link></Form.Label>
            </Form.Group>
        </Form>
    </div>

  )
}
export default CheckoutLogin