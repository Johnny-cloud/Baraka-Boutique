// This code displays the main navigation
import './nav.css'
import AppContext from "../context/AppContext"
import { useContext} from "react"
import {Navbar, Nav,  Container, Offcanvas, Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    const {expanded, setExpanded, cart,  currentCustomer, setCurrentCustomer, setCollectionProducts, setFilteredProducts, setSubCategory, setCategory, api, allProducts} = useContext(AppContext)
    const navigate = useNavigate()
    

    const handleLogout = async () => {
        setExpanded(false)
        await fetch(`${api}/logout`, {
            method: 'DELETE',
            credentials: "include"
        })
        setCurrentCustomer(null)
        navigate('/')
    }

    // Log in to a demo account
    const logInDemo = async () => {
        setExpanded(false)
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
            navigate('/')
        } else{
            console.log(response.json())
        }
    }


    const hideNavbar = (event) => {
        setExpanded(false)
    }

  return (
        <div className='sticky-nav'>
        <Navbar expand='lg' className="bg-body-tertiary" sticky='top' expanded={expanded}>
            <Container>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Offcanvas>
                    <Offcanvas.Header>
                        <h3>Ches-Baraka Boutique</h3>
                        <div className='close-offcanvas'>
                            <i class="bi bi-x-square" onClick={() => setExpanded(false)}></i>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className='me-auto'>
                        <Link to={'/'} onClick={hideNavbar}>Home</Link>
                        <Link to={'/products/clothings'} onClick={hideNavbar}>Clothings</Link>
                        <Link to={'/products/shoes'} onClick={hideNavbar}>Shoes</Link>
                        <Link to={'/products/watches'} onClick={hideNavbar}>Watches</Link>
                      
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Navbar.Collapse> 
            </Container>
            <div className='account-cart'>
            {currentCustomer ? (
                            <Nav className='me-auto'>
                            <div  className='my-dropdown'>
                                <span><span class="bi bi-person-check-fill">Welcome {currentCustomer.name}</span><i class="bi bi-chevron-down"></i></span>
                                <div className='my-dropdown-menu'>
                                    {/* <Link to={'/profile'}>Update Profile</Link> */}
                                    <Link to='/customer-orders' onClick={() => setExpanded(false)}>My Previous Orders</Link>
                                    <Link to={'/animations/logout-page'} onClick={handleLogout}>Logout</Link>
                                </div>
                            </div>
                        </Nav>
                    ) : (   
                            <>
                                <Nav className='me-auto'>
                                    <div className='my-dropdown'> 
                                        <span><span class="bi bi-person-circle">Account</span><i class="bi bi-chevron-down"></i></span>
                                        <div className='my-dropdown-menu'>
                                            <Link to={'/animations/login-page'} onClick={logInDemo}>Demo</Link>
                                            <Link to={'/login'} onClick={() => setExpanded(false)}>Login</Link>
                                            <Link to={'/signup'}onClick={() => setExpanded(false)}>Signup</Link>
                                        </div>
                                    </div>
                                </Nav>
                                
                                
                            </>
                            
                    )}
                    <Nav className='me-auto'>
                        <Link to={'/cart'} className='cart-link' onClick={() => setExpanded(false)}><i class="bi bi-cart4"></i><sup><span className="cart-number">{cart.length ? cart.length : 0}</span></sup> cart</Link>
                    </Nav>
            </div>
            
        </Navbar>
    </div>
  )
}
export default Navigation