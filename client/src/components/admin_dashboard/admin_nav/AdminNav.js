// This code return the sidebar navigation on the admin section
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
                                <Link to={'/admin-dashboard/overview'}> Overview</Link>
                                <Link to={'/admin-dashboard/products'}> Products</Link>
                                <Link to={'/admin-dashboard/customers'}> Customers</Link>
                                <Link to={'/admin-dashboard/orders'}> Orders</Link>
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