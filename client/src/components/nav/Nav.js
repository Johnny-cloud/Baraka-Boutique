import './nav.css'
import AppContext from "../context/AppContext"
import { useContext } from "react"
import {Nav, Navbar, NavDropdown, Container, Offcanvas} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'


const Navigation = () => {

    const {cart,  currentCustomer, setCurrentCustomer} = useContext(AppContext)
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        await fetch('/logout', {method: 'DELETE'})
        setCurrentCustomer(null)
        navigate('/')
    }

  return (
    <div >
        <Navbar expand='lg' className="bg-body-tertiary" fixed='top'>
            <Container>
                <Navbar.Brand>Baraka Botique</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Offcanvas>
                    <Offcanvas.Header closeButton>
                        Baraka Botique
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                    <Nav className="me-auto">
                        <LinkContainer to='/men-shoes'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Men's Fashion" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <LinkContainer to={'/men-clothing'}>
                                    <Nav.Link>Clothing</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to={'/men-shoes'}>
                                    <Nav.Link>Shoes</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to={'/men-watches'}>
                                    <Nav.Link>Watches</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Women's Fashion" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <LinkContainer to={'/women-clothing'}>
                                    <Nav.Link>Clothing</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to={'/women-shoes'}>
                                    <Nav.Link>Shoes</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to={'/women-watches'}>
                                    <Nav.Link>Watches</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Boys' Fashion" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <LinkContainer to={'/boys-clothing'}>
                                    <Nav.Link>Clothing</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to={'/boys-shoes'}>
                                    <Nav.Link>Shoes</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to={'/boys-watches'}>
                                    <Nav.Link>Watches</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Girls' Fashion" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <LinkContainer to={'/girls-clothing'}>
                                    <Nav.Link>Clothing</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to={'/girls-shoes'}>
                                    <Nav.Link>Shoes</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <LinkContainer to={'/girls-watches'}>
                                    <Nav.Link>Watches</Nav.Link>
                                </LinkContainer>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {currentCustomer ? (
                        <Nav>
                            <NavDropdown title=<span class="bi bi-person-check-fill">Welcome {currentCustomer.name}</span>  id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <LinkContainer to={'/profile'}>
                                        <Nav.Link>Profile</Nav.Link>
                                    </LinkContainer>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <LinkContainer to={'/cart'}>
                                <Nav.Link className='cart-link'><i class="bi bi-cart4"></i><sup><span className="cart-number">{cart.length}</span></sup> cart</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    ) : (
                        <Nav>
                            <NavDropdown title=<span class="bi bi-person-circle">Account</span>  id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <LinkContainer to={'/login'}>
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <LinkContainer to={'/signup'}>
                                        <Nav.Link>Signup</Nav.Link>
                                    </LinkContainer>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <LinkContainer to={'/cart'}>
                                <Nav.Link className='cart-link'><i class="bi bi-cart4"></i><sup><span className="cart-number">{cart.length}</span></sup> cart</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    )}
                    <Nav>

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