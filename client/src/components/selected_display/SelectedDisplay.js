import {useContext, useState} from 'react'
import AppContext from '../context/AppContext'
import './selected_display.css'
import { useNavigate } from 'react-router-dom'

const SelectedDisplay = () => {
    const {selectedItem, cart, setCart} = useContext(AppContext)
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const reduceQuantity = () => {
        if(quantity <= 1){
            setQuantity(1)

        } else{
           setQuantity(quantity - 1) 

        }
        
    }

    const addToCart = () => {
        setCart([...cart, selectedItem])
        navigate('/cart')
    }

    if(selectedItem){
        selectedItem.quantity = quantity

        return(
            <div className='selected-display'>
                <div className='selected-display-image-container'><img src={selectedItem.image} alt='' /></div>
                
                <div className='selected-display-details-container'>
                    <div className='description'>
                        <h4>Description</h4>
                        <p>{selectedItem.description}</p>
                    </div>

                    <div className='price'>
                        <h4>Price</h4>
                        <p>Ksh.{selectedItem.price}</p>
                    </div>

                    <div className='in-stock'>
                        <h4>Availability</h4>
                        <p>In stock</p>
                    </div>
                    
                    <div className='quantity'>
                        <h4>Quantity</h4>
                        <p><button className='reduce-btn' onClick={reduceQuantity}>-</button> {quantity} <button className='increase-btn' onClick={increaseQuantity}>+</button></p>
                    </div>
                   
                   <div className='add-to-cart'>
                    <p><button onClick={addToCart}>Add to cart <i class="bi bi-cart-check"></i></button></p>
                   </div>
                    
                </div>
            </div>
        )
    }
}

export default SelectedDisplay