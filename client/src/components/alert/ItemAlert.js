import {useContext} from 'react'
import { Alert } from 'react-bootstrap'
import './item_alert.css'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'
import {Rating} from 'react-simple-star-rating'

const ItemAlert = () => {

    const {cart, setCart, selectedItem, setSelectedItem} = useContext(AppContext)
    

    const addToCart = (event) => {
        if(cart.find(cartItem => cartItem._id === selectedItem._id)){
            alert("Item is already in cart!")

        } else if(selectedItem.quantity === undefined && !(cart.find(cartItem => cartItem._id === selectedItem._id))){
            selectedItem.quantity = 1
            setCart([...cart, selectedItem])

        } else{
            setCart([...cart, selectedItem])
        
        }
        
        setSelectedItem(null)
    }

    const handleQuantityChange = (event) => {
        if(event.target.value < 0){
            event.target.value = 0
            selectedItem.quantity = 1
        } else if(event.target.value === 0){
            selectedItem.quantity = 1
        }
        else{
            selectedItem.quantity = event.target.value
        }
        
    }

    if(selectedItem){
        return (
            <div className='selected-alert-item'>
                <Alert dismissible  onClose={() => setSelectedItem(null)} className='item-alert' >
                    <Alert.Heading>
                    <div className='selected-item-image-container'>
                            <img src={selectedItem.image} alt='img'/>
                        </div> 
                    </Alert.Heading>
                    
                    <p>
                        <div className='selected-item-details-container'>
                                <p>{selectedItem.description}</p>
                                <p><Rating initialValue={selectedItem.rating} size={22} allowFraction /></p>
                                <p><h4>Ksh. {selectedItem.price}</h4></p>
                                <p className='quantity'>Quantity  <input type='number'  onChange={handleQuantityChange} defaultValue={1} /></p>
                                <p><Link to='/cart' onClick={addToCart} className='add-to-cart-btn'>Add to cart <i class="bi bi-cart-check-fill"></i></Link></p>
                        </div>  
                    </p>
                
                </Alert>
            </div>
            
            
        )
    }         
    
}

export default ItemAlert