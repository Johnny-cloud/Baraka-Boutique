import './nav.css'
import AppContext from "../context/AppContext"
import { useContext } from "react"
import {Navbar, Nav,  Container, Offcanvas} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Navigation = () => {

    const {cart,  currentCustomer, setCurrentCustomer, setCollectionProducts, setSubCategory, setCategory, api} = useContext(AppContext)
    const [products, setProducts] = useState(null)
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        await fetch(`${api}/logout`, {method: 'DELETE'})
        setCurrentCustomer(null)
        navigate('/')
    }

    const logInDemo = async () => {
        const response = await fetch(`${api}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: "john@gmail.com",
                password: "doe"
            })
        })

        if(response.ok){
            const customer = await response.json()
            setCurrentCustomer(customer)
            navigate('/')
        }
    }

    const fetchProducts = async () => {
        const response = await fetch(`/${api}/products`)

        if(response.ok){
            const allProducts = await response.json()
            setProducts(allProducts)

        } else{
            console.log(response)
        }

    }

    useEffect(() => {
        fetchProducts()

    }, [])

    const setProductsToDisplay = (event) => {
        if(products){
            setCollectionProducts(products.filter(product => product.sub_category === event.target.id))
            setSubCategory(event.target.id)
            setCategory('clothing')
        }
    }

  return (
    <div >
        <Navbar expand='lg' className="bg-body-tertiary" fixed='top'>
        <Navbar.Brand><Link to={'/'}><h3>Baraka Boutique</h3></Link></Navbar.Brand>
            <Container>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Offcanvas>
                    <Offcanvas.Header closeButton>
                        <h3>Baraka Boutique</h3>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                    <Nav className='me-auto'>
                        <Link to={'/'}>Home</Link>

                        <div className='my-dropdown'>
                            <span>Collections <i class="bi bi-chevron-down"></i></span>
                            <div className='my-dropdown-menu'>
                                <Link to={'/all-products-display'} id='men' onClick={setProductsToDisplay}>Men's Fashion</Link>
                                <Link to={'/all-products-display'} id='women' onClick={setProductsToDisplay}>Women's Fashion</Link>
                                <Link to={'/all-products-display'} id='boys' onClick={setProductsToDisplay}>Boys' Fashion</Link>
                                <Link to={'/all-products-display'} id='girls' onClick={setProductsToDisplay}>Girls' Fashion</Link>
                            </div>
                           
                        </div>
                    </Nav>
                    {currentCustomer ? (
                        <Nav className='me-auto'>
                            <div  className='my-dropdown'>
                                <span><span class="bi bi-person-check-fill">Welcome {currentCustomer.name}</span><i class="bi bi-chevron-down"></i></span>
                                <div className='my-dropdown-menu'>
                                    <Link to={'/profile'}>Update Profile</Link>
                                    <Link to='/customer-orders'>My Previous Orders</Link>
                                    <Link to={'/animations/logout-page'} onClick={handleLogout}>Logout</Link>
                                </div>
                               
                            </div>

                            <Link to={'/cart'} className='cart-link'><i class="bi bi-cart4"></i><sup><span className="cart-number">{cart.length ? cart.length : 0}</span></sup> cart</Link>
                            
                        </Nav>
                    ) : (
                        <Nav className='me-auto'>
                            <div className='my-dropdown'> 
                                <span><span class="bi bi-person-circle">Account</span><i class="bi bi-chevron-down"></i></span>
                                <div className='my-dropdown-menu'>
                                    <Link to={'/animations/login-page'} onClick={logInDemo}>Demo Account</Link>
                                    <Link to={'/login'} >Login</Link>
                                    <Link to={'/signup'}>Signup</Link>
                                    
                                </div>
                               
                            </div>

                            <Link to={'/cart'} className='cart-link'><i class="bi bi-cart4"></i><sup><span className="cart-number">{cart.length ? cart.length : 0}</span></sup> cart</Link>
                
                        </Nav>
                    )}

                    <Nav className='me-auto'>
                        <Link to={'/admin-dashboard'} target='_blank'>Admin Dashboard</Link>
                    </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>
  )
}

export default Navigation