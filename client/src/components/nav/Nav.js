// This code displays the main navigation
import './nav.css'
import { useState} from "react"
import {Navbar, Nav,  Container, Offcanvas} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { useContext } from 'react'

const Navigation = () => {
    const {cart} = useContext(AppContext)
    const [expanded, setExpanded] = useState(false)
    const hideNavbar = (event) => {
        setExpanded(false)
    }

  return (
        <Navbar expand='lg' className="bg-body-tertiary" sticky='top' expanded={expanded}>
            <Navbar.Brand><b>BARAKA BOUTIQUE</b></Navbar.Brand>
            <Container>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Offcanvas>
                    <Offcanvas.Header>
                        <div className='close-offcanvas'>
                            <i class="bi bi-x-square" onClick={() => setExpanded(false)}></i>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className='me-auto'>
                        <Link to={'/'} onClick={hideNavbar}>HOME</Link>
                        <Link to={'/about'} onClick={hideNavbar}>ABOUT</Link>
                        <Link to={'/shop'} onClick={hideNavbar}>SHOP</Link>
                        <Link to={'/contact'} onClick={hideNavbar}>CONTACT</Link>
                    </Nav>
                    <Nav className='me-auto'>
                        <Link to='/cart' onClick={hideNavbar}><i class="bi bi-cart-check"><sup>{cart.length}</sup></i>CART</Link>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
  )
}
export default Navigation