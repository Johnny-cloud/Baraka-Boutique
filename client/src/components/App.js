import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import './app.css'
import Home from './home/Home';
import Login from './customer/login/Login';
import Signup from './customer/signup/Signup';
import Navigation from './nav/Nav';
import Cart from './cart/Cart';
import AppContext from './context/AppContext';
import Profile from './customer/profile/Profile';
import Checkout from './checkout/Checkout';
import CustomerOrders from './customer/customer_orders/CustomerOrders';
import CheckoutSignup from './checkout/CheckoutSignup';
import AllProductsDisplay from './all_products_display/AllProductsDisplay';
import SelectedDisplay from './selected_display/SelectedDisplay';
import { LoginPage, LogoutPage } from './animations';
import products from './assets/products';
import Clothings from './products/clothings/Clothings';
import Shoes from './products/shoes/Shoes';
import Watches from './products/watches/Watches';

const App = () => {
    const api = "https://baraka-boutique-backend.vercel.app" // This is the route for the backend
    // let api = "http://localhost:5000"
    let [cart, setCart] = useState([])
    const [currentCustomer, setCurrentCustomer] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)
    const [collectionProducts, setCollectionProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [customerToUpdate, setCustomerToUpdate] = useState(null)
    const [productToUpdate, setProductToUpdate] = useState(null)
    const [placedOrder, setPlacedOrder] = useState(false)
    const [allProducts, setAllProducts] = useState(products)
    const [expanded, setExpanded] = useState(false)
    const [customers, setCustomers] = useState([])
    const [filteredCustomers, setFilteredCustomers] = useState([])
    const [orders, setOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])
    
    const contextValue = {
        api, placedOrder, setPlacedOrder, productToUpdate, setProductToUpdate, customerToUpdate, setCustomerToUpdate,
        subCategory, setSubCategory, category, setCategory, filteredProducts, setFilteredProducts,
        collectionProducts, setCollectionProducts, cart, setCart, currentCustomer, setCurrentCustomer, 
        selectedItem, setSelectedItem, allProducts, expanded, setExpanded, customers, filteredCustomers, setFilteredCustomers, 
        orders, filteredOrders, setFilteredOrders,
    }


    const fetchCustomers = async () => {
        const response = await fetch(`${api}/customers`)

        if(response.ok){
            const allCustomers = await response.json()
            setCustomers(allCustomers)
            setFilteredCustomers(allCustomers)
        }
    }

    const fetchOrders = async () => {
        const response = await fetch(`${api}/orders`)
        if(response.ok){
                const fetchedOrders = await response.json()
            setOrders(fetchedOrders)
            setFilteredOrders(fetchedOrders)
        }
    }

    const auth = async (req, res) => {
        const response = await fetch(`${api}/auth`, {
            method: "GET",
            credentials: "include",
        })

        if(response.ok){
            const customer = await response.json()
            setCurrentCustomer(customer)
        }
    
   }

   useEffect(() => {
    try {
        auth()
        fetchCustomers()
        fetchOrders()
        
        if(JSON.parse(localStorage.getItem("cart"))){
            setCart([...JSON.parse(localStorage.getItem("cart"))])
        }
    } catch(err){
        console.log(err)
    }
   
   }, []) // Comes before localStorage.setItem in order to set the cart to the values of the localStorage

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.removeItem("collectionProducts")
        localStorage.removeItem("selectedItem")
    }, [])

    return (
            <div className='app'>
            <AppContext.Provider value={{...contextValue}}>
                <div className='boutique-brand'> <h1>Chess Baraka Boutique</h1></div>
                <Navigation />
                <div className='main-content'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/checkout' element={<Checkout />} />
                        <Route exact path='/customer-orders' element={<CustomerOrders />} />
                        <Route exact path='/checkout-signup' element={<CheckoutSignup />} />
                        <Route exact path='/cart' element={<Cart />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<Signup />} />
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/all-products-display' element={<AllProductsDisplay />} />
                        <Route exact path='/selected-display' element={<SelectedDisplay />} /><Route exact path='/animations/login-page' element={<LoginPage />} />
                        <Route exact path='/animations/logout-page' element={<LogoutPage />} />
                        <Route exact path='/products/clothings' element={<Clothings />} />
                        <Route exact path='/products/shoes' element={<Shoes />} />
                        <Route exact path='/products/watches' element={<Watches />} />
                    </Routes>
                </div>
            </AppContext.Provider>

        </div>
    )
}
export default App;