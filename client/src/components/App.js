import { Route, Routes } from 'react-router-dom'
import { MenClothing, WomenClothing, BoysClothing, GirlsClothing } from './clothing';
import { BoysShoes, MenShoes, WomenShoes, GirlsShoes  } from './shoes';
import { BoysWatches, WomenWatches, GirlsWatches, MenWatches } from './watches';
import Login from './login/Login';
import Signup from './signup/Signup';
import Navigation from './nav/Nav';
import './app.css'
import AppContext from './context/AppContext';
import { useState } from 'react';
import Cart from './cart/Cart';
import ItemAlert from './alert/ItemAlert';

const App = () => {
    const [cart, setCart] = useState([])
    const [currentCustomer, setCurrentCustomer] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)
    

    return (
        <div className='app'>
            <AppContext.Provider value={{cart, setCart, currentCustomer, setCurrentCustomer, selectedItem, setSelectedItem }}>
                <Navigation />
                <div className='main-content'>
                    <ItemAlert  /> 
                    <Routes>
                        <Route exact path='/men-clothing' element={<MenClothing />} />
                        <Route exact path='/women-clothing' element={<WomenClothing />} />
                        <Route exact path='/boys-clothing' element={<BoysClothing />} />
                        <Route exact path='/girls-clothing' element={<GirlsClothing />} />

                        <Route exact path='/boys-shoes' element={<BoysShoes />} />
                        <Route exact path='/men-shoes' element={<MenShoes />} />
                        <Route exact path='/girls-shoes' element={<GirlsShoes />} />
                        <Route exact path='/women-shoes' element={<WomenShoes />} />

                        <Route exact path='/boys-watches' element={<BoysWatches />} />
                        <Route exact path='/men-watches' element={<MenWatches />} />
                        <Route exact path='/girls-watches' element={<GirlsWatches />} />
                        <Route exact path='/women-watches' element={<WomenWatches />} />

                        <Route exact path='/cart' element={<Cart />} />

                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<Signup />} />
                    </Routes>
                </div>
            </AppContext.Provider>
            
        </div>
    )
}

export default App;