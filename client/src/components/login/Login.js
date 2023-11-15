import {useState, useContext} from 'react'
import AppContext from '../context/AppContext'
import './login.css'

const Login = () => {

    const {setCurrentCustomer} = useContext(AppContext)

    const[formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response =  await fetch('/login', {
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
            email: "",
            password: ""
        })
    }

  return (
    <div className='display-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' type='text' value={formData.email} onChange={handleChange} />

            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' value={formData.password} onChange={handleChange} />

            <input type='submit' value={'Submit'} className='submit-btn' />
        </form>
    </div>
  )
}

export default Login