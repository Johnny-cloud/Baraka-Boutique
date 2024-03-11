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

    const [selectedProduct, setSelectedProduct] = useState({
            description: "Timex Women's T2H331 Indiglo Leather Strap Watch, Black/Silver-Tone/White", 
            price: 300, 
            rating: 3.6, 
            category: 'watches', 
            sub_category: 'women', 
            image: "https://images.unsplash.com/photo-1584208124232-7919e0000ad5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    })

    const [cart, setCart] = useState([])
    
    const [selectedMember, setSelectedMember] = useState({
        name: "Prince",
        title: "Co-Founder",
        image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    })

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