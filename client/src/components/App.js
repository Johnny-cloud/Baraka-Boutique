import { Route, Routes } from 'react-router-dom'
import './app.css'
import Home from './home/Home';
import Login from './customer/login/Login';
import Signup from './customer/signup/Signup';
import Navigation from './nav/Nav';
import Footer from './footer/Footer';
import AppContext from './context/AppContext';
import Shop from './shop/Shop';
import About from './about/About';
import Contact from './contact/Contact';
import ProductDetails from './shop/product_details/ProductDetails';
import { useEffect, useState } from 'react';
import Cart from './cart/Cart';
import Checkout from './checkout/Checkout';
import MemberDetails from './about/team/member_details/MemberDetails';

const App = () => {

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [cart, setCart] = useState([])
    const [selectedMember, setSelectedMember] = useState(null)

    const contextValue = {
        selectedProduct, setSelectedProduct, cart, setCart, selectedMember, setSelectedMember,
    }

    useEffect(() => {
        if(cart.length > 0){
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        
    }, [cart])

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('cart'))){
            setCart(JSON.parse(localStorage.getItem('cart')))
        }
    }, [])


    return (
            <div className='app'>
            <AppContext.Provider value={{...contextValue}}>
                <div className='boutique-brand'> <h1>Chess Baraka Boutique</h1></div>
                <Navigation />
                <div className='main-content'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/product-details' element={<ProductDetails />} />
                        <Route exact path='/shop' element={<Shop />} />
                        <Route exact path='/about' element={<About />} />
                        <Route exact path='/contact' element={<Contact />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<Signup />} />
                        <Route exact path='/cart' element={<Cart />} />
                        <Route exact path='/checkout' element={<Checkout />} />
                        <Route exact path='/member-details' element={<MemberDetails />} />
                    </Routes>
                </div>
                <Footer />
            </AppContext.Provider>

        </div>
    )
}
export default App;