import './categories.css'
import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import {Nav, Navbar, Container, Offcanvas} from 'react-bootstrap'


const Categories = () => {

    const {collectionProducts, setFilteredProducts, category, setCategory} = useContext(AppContext)

    const handleClick = (event) => {
        setFilteredProducts(collectionProducts.filter(product => product.category === event.target.id))
        setCategory(event.target.id)
    }

    const handleRatingClick = (event) => {
        setFilteredProducts(collectionProducts.filter(product => product.rating <= (event.target.id) && product.rating >= (event.target.id - 0.5) && product.category === category ))
    }

    return (
        <div className='categories' >
            <Navbar expand='lg' className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Offcanvas>
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <Offcanvas.Body className='offcanvas-column'>
                                <Nav className='me-auto'>
                                    <h5>Product categories</h5>
                                    <Nav.Link id={'shoes'} onClick={handleClick}>Shoes</Nav.Link>
                                    <Nav.Link id={'clothing'} onClick={handleClick}>Clothes</Nav.Link>
                                    <Nav.Link id={'watches'} onClick={handleClick}>Watches</Nav.Link>                                
                                </Nav>

                                <Nav className='me-auto'>
                                    <h6>Rating</h6>
                                    <Nav.Link id={4.0} onClick={handleRatingClick}>3.0 - 4.0</Nav.Link>
                                    <Nav.Link id={4.5} onClick={handleRatingClick}>4.0 - 4.5</Nav.Link>
                                    <Nav.Link id={5.0} onClick={handleRatingClick}>4.5 - 5.0</Nav.Link>                                
                                </Nav>

                                <Nav className='me-auto'>
                                    <h6>Price</h6>
                                    <Nav.Link id={'clothes'} onClick={handleClick}>ksh.0  -  ksh.500</Nav.Link>
                                    <Nav.Link id={'shoes'} onClick={handleClick}>ksh.500 - ksh.1000</Nav.Link>
                                    <Nav.Link id={'watches'} onClick={handleClick}>ksh.1000 - ksh.1500</Nav.Link>  
                                    <Nav.Link id={'watches'} onClick={handleClick}>ksh.1500 - ksh.2000</Nav.Link>                              
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar.Collapse>
                </Container>
             </Navbar> 
        </div>
        
    )
}

export default Categories
