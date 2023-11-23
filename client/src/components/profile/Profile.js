import {useContext, useState, useEffect} from 'react'
import './profile.css'
import AppContext from '../context/AppContext'
import { Form } from 'react-bootstrap'

const Profile = () => {

    const {currentCustomer, setCurrentCustomer} = useContext(AppContext)

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const updateProfile = async () => {
        const response = await fetch(`/customers/${currentCustomer._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...formData})
        })

        if(response.ok){
            const customer = await response.json()
            setCurrentCustomer(customer)
            alert("Profile updated successfully!")

        } else{
            alert("Unable to update profile")
        }

    }

    useEffect(() => {
        setFormData({...currentCustomer})
        console.log('New data.......')
        
    }, [currentCustomer])
    

    if(currentCustomer){

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
                        <Form.Control type='submit' className='submit-btn' value={'Update profile'} onClick={updateProfile}/>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Profile