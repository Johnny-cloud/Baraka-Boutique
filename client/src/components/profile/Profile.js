import {useContext, useState} from 'react'
import './profile.css'
import AppContext from '../context/AppContext'
import { Form } from 'react-bootstrap'

const Profile = () => {

    const {currentCustomer} = useContext(AppContext)

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    if(currentCustomer){

        console.log(currentCustomer)

        return(
            <div className='display-container'>
                <h2>{currentCustomer.name}'s profile</h2>

                <Form >
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' name='name' value={formData.name} onChange={handleChange} placeholder={currentCustomer.name} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} placeholder={currentCustomer.email} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter new password' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' name='password_confirmation' value={formData.password_confirmation} onChange={handleChange} placeholder='Confirm the new password' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='submit' className='submit-btn' value={'Update profile'}/>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Profile