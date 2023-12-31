// This is the code contains section of the product display that users  use to add item to cart
import {useContext, useEffect, useState} from 'react'
import AppContext from '../context/AppContext'
import './selected_display.css'
import { useNavigate } from 'react-router-dom'
import HomeProduct from '../home/home_product/HomeProduct'

const SelectedDisplay = () => {
    const {selectedItem, cart, setCart, filteredProducts, allProducts} = useContext(AppContext)
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
        let itemInCart = cart.find(item => item._id === selectedItem._id) // Check if item is already in cart
        if(itemInCart){
            alert("Item already in cart!")
        } else {
            setCart([...cart, selectedItem])
            navigate('/cart')
        }

    }

    const continueShopping = () => {
        navigate(-1)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [selectedItem])

    if(selectedItem){
        selectedItem.quantity = quantity
        return(
                <div className='selected-display'>
                    <div className='selected-product-display'>
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
                        <div className='back-btn'>
                            <p><button onClick={continueShopping}>Back</button></p>
                        </div>
                        </div>
                        <div className='related-products'>
                            <h3>RELATED PRODUCTS</h3>
                            <div className='products-container'>
                                {allProducts.filter(product => product.category === selectedItem.category).slice(0,4).map(product => <HomeProduct product={product} />)}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default SelectedDisplay