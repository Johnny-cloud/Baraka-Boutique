// This code returns the side navigation on the collections page

import './categories.css'
import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import {Nav, Navbar, Container, Offcanvas} from 'react-bootstrap'
import Loading from '../../animations/loading/Loading'

const Categories = () => {

    // Collection products are all products of a particular group i.e men, women, girls, boys
    // Filtered products are the products displayed on the collections page i.e clothes, shoes,
    const {collectionProducts, setFilteredProducts, category, setCategory} = useContext(AppContext)

    // Filter according to category i.e clothing, shoes, watches
    const handleClick = (event) => {
        setFilteredProducts(collectionProducts.filter(product => product.category === event.target.id))
        setCategory(event.target.id)
    }

    // Filter according to rating
    const handleRatingClick = (event) => {
        setFilteredProducts(collectionProducts.filter(product => product.rating <= (event.target.id) && product.rating >= (event.target.id - 0.5) && product.category === category ))
    }

    // Filter according to price
    const handlePriceClick = (event) => {
        setFilteredProducts(collectionProducts.filter(product => product.price <= event.target.id && product.price >= (event.target.id - 500) && product.category === category))
    }

    if(collectionProducts.length > 0){
                return (
                <div className='categories' >
                <Navbar expand='lg' className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Navbar.Offcanvas>
                                <Offcanvas.Header closeButton></Offcanvas.Header>
                                <Offcanvas.Body className='offcanvas-column'>
                                    <h4>Filter Products</h4>
                                    <Nav className='me-auto'>
                                        <h5>Filter By Categories</h5>
                                        <Nav.Link id={'shoes'} onClick={handleClick}>Shoes</Nav.Link>
                                        <Nav.Link id={'clothing'} onClick={handleClick}>Clothes</Nav.Link>
                                        <Nav.Link id={'watches'} onClick={handleClick}>Watches</Nav.Link> 
                                    </Nav>
                                    <Nav className='me-auto'>
                                        <h6>Filter By Rating</h6>
                                        <Nav.Link id={4.0} onClick={handleRatingClick}>3.0 - 4.0</Nav.Link>
                                        <Nav.Link id={4.5} onClick={handleRatingClick}>4.0 - 4.5</Nav.Link>
                                        <Nav.Link id={5.0} onClick={handleRatingClick}>4.5 - 5.0</Nav.Link> 
                                    </Nav>
                                    <Nav className='me-auto'>
                                        <h6>Filter By Price</h6>
                                        <Nav.Link id={500} onClick={handlePriceClick}>ksh.0  -  ksh.500</Nav.Link>
                                        <Nav.Link id={1000} onClick={handlePriceClick}>ksh.500 - ksh.1000</Nav.Link>
                                        <Nav.Link id={1500} onClick={handlePriceClick}>ksh.1000 - ksh.1500</Nav.Link>  
                                        <Nav.Link id={2000} onClick={handlePriceClick}>ksh.1500 - ksh.2000</Nav.Link>                              
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Navbar.Collapse>
                    </Container>
                 </Navbar> 
            </div>
        )
    } else {
                // Returns loading animation
        return(
            <div>
                <Loading /> 
            </div>
        )
    }
}
export default Categories
