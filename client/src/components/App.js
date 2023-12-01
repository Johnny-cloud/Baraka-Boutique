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
import {AdminDashboard, Overview, Products, Customers, Orders, CustomerUpdatePage, ProductUpdatePage} from './admin_dashboard';
import { LoginPage, LogoutPage } from './animations';

const App = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")))
    const [currentCustomer, setCurrentCustomer] = useState(null)
    const [selectedItem, setSelectedItem] = useState(JSON.parse(localStorage.getItem("selectedItem")))
    const [collectionProducts, setCollectionProducts] = useState(JSON.parse(localStorage.getItem("collectionProducts")))
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [category, setCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [customerToUpdate, setCustomerToUpdate] = useState(null)
    const [productToUpdate, setProductToUpdate] = useState(null)
    const [placedOrder, setPlacedOrder] = useState(false)
    
    const auth = async () => {
        const response = await fetch('/auth')

        if(response.ok){
            const customer = await response.json()
            setCurrentCustomer(customer)
            
        }
    }

    
    
    useEffect(() => {
        auth()
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem("selectedItem", JSON.stringify(selectedItem))
    }, [selectedItem])

    useEffect(() => {
        localStorage.setItem("collectionProducts", JSON.stringify(collectionProducts))
    }, [collectionProducts])

    return (
        <div className='app'>
            <AppContext.Provider value={{placedOrder, setPlacedOrder, productToUpdate, setProductToUpdate, customerToUpdate, setCustomerToUpdate, subCategory, setSubCategory, category, setCategory, filteredProducts, setFilteredProducts, collectionProducts, setCollectionProducts, cart, setCart, currentCustomer, setCurrentCustomer, selectedItem, setSelectedItem }}>
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

                        <Route exact path='/selected-display' element={<SelectedDisplay />} />

                        <Route exact path='/admin-dashboard' element={<AdminDashboard />} />
                        <Route exact path='/admin-dashboard/overview' element={<Overview />} />
                        <Route exact path='/admin-dashboard/products' element={<Products />} />
                        <Route exact path='/admin-dashboard/customers' element={<Customers />} />
                        <Route exact path='/admin-dashboard/orders' element={<Orders />} />
                        <Route exact path='/admin-dashboard/customers/customer-update-page' element={<CustomerUpdatePage />} />
                        <Route exact path='/admin-dashboard/products/product-update-page' element={<ProductUpdatePage />} />

                        <Route exact path='/animations/login-page' element={<LoginPage />} />
                        <Route exact path='/animations/logout-page' element={<LogoutPage />} />
                    </Routes>
                </div>
            </AppContext.Provider>
            
        </div>
    )
}

export default App;