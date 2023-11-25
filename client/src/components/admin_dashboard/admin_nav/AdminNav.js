import React from 'react'
import './admin_nav.css'
import {Navbar, Nav, Offcanvas, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className='admin-nav'>
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Navbar.Offcanvas>
                        <Offcanvas.Header closeButton>Admin Dashboard</Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='me-auto'>
                                <Link to={'/admin-dashboard'}><i class="bi bi-person-check"></i> Admin dashboard</Link>
                                <Link to={'/admin-dashboard/sales'}><i class="bi bi-receipt"></i> Sales dashboard</Link>
                                <Link to={'/admin-dashboard/analytics'}><i class="bi bi-speedometer2"></i> Analytics dashboard</Link>
                                <Link to={'/admin-dashboard/stocks'}><i class="bi bi-bar-chart"></i> Stocks dashboard</Link>
                                <Link to={'/admin-dashboard/orders'}><i class="bi bi-cart-check"></i> Orders dashboard</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default AdminNav