import {useState, useContext} from 'react'
import AppContext from '../../context/AppContext'
import './signup.css'
import { Form } from 'react-bootstrap'

const Signup = () => {

    const {setCurrentCustomer, api} = useContext(AppContext)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch(`${api}/customers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...formData})
        })

        if(response.ok){
            const customer = await response.json()
            setCurrentCustomer(customer)

        } else{
            console.log(response)
        }

        setFormData({
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        })
    }

  return (
    <div className='display-container'>
        <h2>Signup</h2>
        
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' id='name' name='name' value={formData.name} onChange={handleChange}  />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' id='email' name='email' value={formData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' id='password' name='password' value={formData.password} onChange={handleChange}  />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type='password' id='password_confirmation' name='password_confirmation' value={formData.password_confirmation} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Control type='submit' value={'Signup'} className='submit-btn'  />
            </Form.Group>
        </Form>
    </div>
  )
}

export default Signup