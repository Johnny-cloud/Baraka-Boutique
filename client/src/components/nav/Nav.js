// import { Link } from "react-router-dom"
import './nav.css'
import AppContext from "../context/AppContext"
import { useContext } from "react"
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {

    const {cart, currentCustomer, setCurrentCustomer} = useContext(AppContext)

    const handleLogout = async () => {
        console.log("Logging out...........")
        fetch('/logout', {method: 'DELETE'})
        setCurrentCustomer(null)
    }

  return (
    <div >

        {/* <div className="nav-item">

            <div className="dropdown-menu">
                Men's Fashion <i class="bi bi-chevron-down"></i>
                <div className="dropdown-item">
                    <Link to='men-clothing'>clothing</Link>
                    <Link to='men-shoes'>shoes</Link>
                    <Link to='men-watches'>watches</Link>
                </div>
            </div>

            <div className="dropdown-menu">
                Women's Fashion <i class="bi bi-chevron-down"></i>
                <div className="dropdown-item">
                    <Link to='women-clothing'>clothing</Link>
                    <Link to='women-shoes'>shoes</Link>
                    <Link to='women-watches'>watches</Link>
                </div>
            </div>

            <div className="dropdown-menu">
                Boy's Fashion <i class="bi bi-chevron-down"></i>
                <div className="dropdown-item">
                    <Link to='boys-clothing'>clothing</Link>
                    <Link to='boys-shoes'>shoes</Link>
                    <Link to='boys-watches'>watches</Link>
                </div>
            </div>

            <div className="dropdown-menu">
                Girl's Fashion <i class="bi bi-chevron-down"></i>
                <div className="dropdown-item">
                    <Link to='girls-clothing'>clothing</Link>
                    <Link to='girls-shoes'>shoes</Link>
                    <Link to='girls-watches'>watches</Link>
                </div>
            </div>
        </div>
        
        {currentCustomer ? (
            <div className="nav-item">
                <div className="dropdown-menu">
                    <i class="bi bi-person-check-fill"></i> Welcome {currentCustomer.name} <i class="bi bi-chevron-down"></i> 
                    <div className="dropdown-item">
                        <Link className="logout-btn" onClick={handleLogout}>Logout</Link>
                    </div>
                </div>

                <div className="cart-link">
                    <Link to='/cart'><i class="bi bi-cart4"></i><sup><span className="cart-number">{cart.length}</span></sup> cart</Link>
                </div>
            </div>
        ) : (
            <div className="nav-item">

                <div className="dropdown-menu">
                    <i class="bi bi-person-circle"></i> Account<i class="bi bi-chevron-down"></i>
                    <div className="dropdown-item">
                        <Link to={'Login'}>Login</Link>
                        <Link to={'signup'}>Signup</Link>
                    </div>
                </div>

                <div className="cart-link">
                    <Link to='/cart'><i class="bi bi-cart4"></i><sup><span className="cart-number">{cart.length}</span></sup> cart</Link>
                </div>
            </div>
        )} */}

        
        <Navbar expand='lg' className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Baraka Botique</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
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
                                    <LinkContainer to={'/login'}>
                                        <Nav.Link>Login</Nav.Link>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>
  )
}

export default Navigation