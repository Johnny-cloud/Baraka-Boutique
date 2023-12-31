// This code displays the main navigation
import './nav.css'
import AppContext from "../context/AppContext"
import { useContext} from "react"
import {Navbar, Nav,  Container, Offcanvas} from 'react-bootstrap'
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


    const setProductsToDisplay = (event) => {
        setExpanded(false)
        if(allProducts){
            setCollectionProducts(allProducts.filter(product => product.sub_category === event.target.name))
            setFilteredProducts(allProducts.filter(product => product.category === event.target.id && product.sub_category === event.target.name))
            setSubCategory(event.target.name)
            setCategory(event.target.id)
        }
    }

  return (
        <div >
        <Navbar expand='lg' className="bg-body-tertiary" fixed='top' expanded={expanded}>
        <Navbar.Brand><Link to={'/'}><h3>Ches-Baraka Boutique</h3></Link></Navbar.Brand>
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
                        <Link to={'/'} onClick={() => setExpanded(false)}>Home</Link>
                        <div className='dropdown-shop'>
                            <span>Shop <i class="bi bi-chevron-down"></i></span>
                            <div >
                                <div className='shop-menu'>
                                    <div>
                                        <h5>Men's Fashion </h5>
                                        <div className='my-dropdown-list'>
                                        <Link to={'/all-products-display'} name="men" id='clothing' onClick={setProductsToDisplay}>Clothing</Link>
                                        <Link to={'/all-products-display'} name="men" id='shoes' onClick={setProductsToDisplay}>Shoes</Link>
                                        <Link to={'/all-products-display'} name="men" id='watches' onClick={setProductsToDisplay}>Watches</Link>
                                    
                                        </div>
                                    
                                    </div>

                                    <div>
                                        <h5>Women's Fashion </h5>
                                        <div className='my-dropdown-list'>
                                        <Link to={'/all-products-display'} name="women" id='clothing' onClick={setProductsToDisplay}>Clothing</Link>
                                        <Link to={'/all-products-display'} name="women" id='shoes' onClick={setProductsToDisplay}>Shoes</Link>
                                        <Link to={'/all-products-display'} name="women" id='watches' onClick={setProductsToDisplay}>Watches</Link>
                                    
                                        </div>
                                    
                                    </div>

                                    <div>
                                        <h5>Boys Fashion </h5>
                                        <div className='my-dropdown-list'>
                                        <Link to={'/all-products-display'} name="boys" id='clothing' onClick={setProductsToDisplay}>Clothing</Link>
                                        <Link to={'/all-products-display'} name="boys" id='shoes' onClick={setProductsToDisplay}>Shoes</Link>
                                        <Link to={'/all-products-display'} name="boys" id='watches' onClick={setProductsToDisplay}>Watches</Link>
                                    
                                        </div>
                                    
                                    </div>

                                    <div>
                                        <h5>Girls Fashion </h5>
                                        <div className='my-dropdown-list'>
                                        <Link to={'/all-products-display'} name="girls" id='clothing' onClick={setProductsToDisplay}>Clothing</Link>
                                        <Link to={'/all-products-display'} name="girls" id='shoes' onClick={setProductsToDisplay}>Shoes</Link>
                                        <Link to={'/all-products-display'} name="girls" id='watches' onClick={setProductsToDisplay}>Watches</Link>
                                    
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                      
                    </Nav>
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
                            <Link to={'/cart'} className='cart-link'><i class="bi bi-cart4"></i><sup><span className="cart-number">{cart.length ? cart.length : 0}</span></sup> cart</Link>
                        </Nav>
                    ) : (
                            <Nav className='me-auto'>
                            <div className='my-dropdown'> 
                                <span><span class="bi bi-person-circle">Account</span><i class="bi bi-chevron-down"></i></span>
                                <div className='my-dropdown-menu'>
                                    <Link to={'/animations/login-page'} onClick={logInDemo}>Demo Account</Link>
                                    <Link to={'/login'} onClick={() => setExpanded(false)}>Login</Link>
                                    <Link to={'/signup'}onClick={() => setExpanded(false)}>Signup</Link>
                                </div>
                            </div>
                            <Link to={'/cart'} className='cart-link' onClick={() => setExpanded(false)}><i class="bi bi-cart4"></i><sup><span className="cart-number">{cart.length ? cart.length : 0}</span></sup> cart</Link>
                        </Nav>
                    )}
                    <Nav className='me-auto'>
                        <Link to={'/admin-dashboard'} onClick={() => setExpanded(false)}>Admin Dashboard</Link>
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