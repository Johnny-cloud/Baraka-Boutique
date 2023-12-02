// This code dictates how products are displayed on the homepage

import {useContext} from 'react'

import './home_product.css'

import AppContext from '../../context/AppContext'

import { Rating } from 'react-simple-star-rating'

import { Link } from 'react-router-dom'



const HomeProduct = ({product}) => {

    const {setSelectedItem} = useContext(AppContext)

    const handleClick = () => {

        setSelectedItem(product)

    }

    return (

        <Link className='home-product' onClick={handleClick} to={'/selected-display'}>

            <div className='home-product-image-container'>

                <img src={product.image} alt='img' />

            </div>


            <div className='home-product-details-container'>

                <p>{product.description.substring(0, 30)}...</p>

                <p><Rating size={20} initialValue={product.rating} allowFraction /></p>

                <p><h5>Ksh. {product.price}</h5></p>

            </div>


        </Link>
        
    )
}

export default HomeProduct