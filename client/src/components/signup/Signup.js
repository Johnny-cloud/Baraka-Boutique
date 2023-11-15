import {useState, useContext} from 'react'
import AppContext from '../context/AppContext'
import './signup.css'

const Signup = () => {

    const {setCurrentCustomer} = useContext(AppContext)

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

        const response = await fetch('/customers', {
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
        
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} />

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} />

            <label htmlFor='password_confirmation'>Password Confirmation</label>
            <input type='password' id='password_confirmation' name='password_confirmation' value={formData.password_confirmation} onChange={handleChange} />

            <input type='submit' value={'Submit'} className='submit-btn' />
        </form>
    </div>
  )
}

export default Signup