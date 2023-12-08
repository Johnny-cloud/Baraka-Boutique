// This code displays the overall product categories
import {useState, useEffect, useContext} from 'react'
import './category.css'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

const Category = () => {
    const {setCategory, setSubCategory, setFilteredProducts, setCollectionProducts, allProducts} = useContext(AppContext)

    const setProductsToDisplay = (event) => {
        if(allProducts){
            setCollectionProducts(allProducts.filter(product => product.sub_category === event.target.id))
            setFilteredProducts(allProducts.filter(product => product.sub_category === event.target.id && product.category === event.target.name))
            setSubCategory(event.target.id)
            setCategory(event.target.name)
        }
    }
 

  return (
            <div>
        <div className='category'>
        <div>
            <Link className='category-contents large' to={'/all-products-display'} id='women'>
                <div className='category-image-container'>
                    <img onClick={setProductsToDisplay} id='women' name="clothing" src='https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                </div>
                <h5>Dress</h5>
            </Link>
            <Link className='category-contents small'  to={'/all-products-display'} id='women'>
                <div className='category-image-container'>
                    <img onClick={setProductsToDisplay} id='women' name="shoes" src='https://images.unsplash.com/photo-1605733513549-de9b150bd70d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                </div>
                <h5>Heels</h5>
            </Link>
        </div>
        <div>
            <Link className='category-contents small' to={'/all-products-display'} id='men'>
                <div className='category-image-container'>
                    <img onClick={setProductsToDisplay} id='men' name="shoes" src='https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                </div>
                <h5>Sneakers</h5>
            </Link>
            <Link className='category-contents large'  to={'/all-products-display'} id='men'>
                <div className='category-image-container'>
                    <img onClick={setProductsToDisplay} id='men' name="watches" src='https://images.unsplash.com/photo-1696774690902-6e2057307e20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNoZXMlMjBmb3IlMjBtZW58ZW58MHx8MHx8fDA%3D' alt='' />
                </div>
                <h5>Watch</h5>
            </Link>
        </div>
        <div>
            <Link className='category-contents large'  to={'/all-products-display'} id='women'>
                <div className='category-image-container'>
                    <img onClick={setProductsToDisplay} id='women' name="clothing" src='https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D' alt='' />
                </div>
                <h5>Sweater</h5>
            </Link>
            <Link className='category-contents small'>
                <img src='' alt='' />
                <p></p>
            </Link>
        </div>
    </div>
    </div>
  )
}
export default Category