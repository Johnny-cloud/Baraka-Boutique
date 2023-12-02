// This code returns the logging in form

import {useState, useContext} from 'react'

import AppContext from '../../context/AppContext'

import './login.css'

import { Form } from 'react-bootstrap'

import { useNavigate, Link } from 'react-router-dom'



const Login = () => {

    const {setCurrentCustomer, api} = useContext(AppContext)

    const navigate = useNavigate()

    const[formData, setFormData] = useState({

        email: "",

        password: ""

    })

    const handleChange = (event) => {

        setFormData({...formData, [event.target.name]: event.target.value})

    }

    const handleSubmit = async () => {

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

            alert("You are logged in!")

            navigate('/')

        } else{

            alert("Unable to log in. Try again!")

        }

        setFormData({

            email: "",

            password: ""

        })
    }


  return (

    <div className='display-container'>

        <h2>Login</h2>

        <Form >
        

            <Form.Group>

                <Form.Label>Email</Form.Label>

                <Form.Control id='email' name='email' type='text' value={formData.email} onChange={handleChange} />
            
            </Form.Group>


            <Form.Group>

                <Form.Label>Password</Form.Label>

                <Form.Control id='password' name='password' type='password' value={formData.password} onChange={handleChange} />
            
            </Form.Group>


            <Form.Group>

                <Link to={'/animations/login-page'} onClick={handleSubmit} className='submit-btn'>Login</Link>

            </Form.Group>


            <Form.Group>

                <Form.Label>Don't have an account? <Link to={'/signup'} className='signup-link'>SignUp</Link></Form.Label>
            
            </Form.Group>


        </Form>

    </div>

  )
}

export default Login