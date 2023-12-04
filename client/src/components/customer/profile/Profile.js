// This code returns the form for updating user profile
import {useContext, useState} from 'react'
import './profile.css'
import AppContext from '../../context/AppContext'
import { Form } from 'react-bootstrap'

const Profile = () => {
    const {currentCustomer, setCurrentCustomer, api} = useContext(AppContext)
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: "doe",
        password_confirmation: "doe"
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const updateProfile = async (event) => {
        event.preventDefault()
        if(formData.name === ""){
            alert("Enter a name")
        } else if(formData.email === ""){
            alert("Enter email adress")
        } else if(formData.password === "" || formData.password_confirmation === ""){
            alert("Enter password")
        } else{
            const response = await fetch(`${api}/customers/${currentCustomer._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...formData}),
                credentials: "include",
            })

            if(response.ok){
                const customer = await response.json()
                setCurrentCustomer(customer)
                alert("Profile updated successfully!")
            } else{
                
                alert("Unable to update profile")
                
            }

            setFormData({
                name: "",
                email: "",
                password: "doe",
                password_confirmation: "doe"
            })
        }
        
    }

    if(currentCustomer){
            return(
                <div className='display-container'>
                <h2>Update {currentCustomer.name}'s profile</h2>
                <Form >
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' name='name' value={formData.name} onChange={handleChange}  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} />
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} placeholder={currentCustomer.password} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' name='password_confirmation' value={formData.password_confirmation} onChange={handleChange} placeholder='Confirm the new password' />
                    </Form.Group> */}
                    <Form.Group>
                        <Form.Control type='submit' className='submit-btn' value={'Update profile'} onClick={updateProfile}/>
                    </Form.Group>
                </Form>
            </div>

        )
    }
}
export default Profile