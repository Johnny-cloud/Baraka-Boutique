import { useEffect, useContext } from 'react'
import './all_products_display.css'
import Products from './products/Products'
import Categories from './categories/Categories'
import AppContext from '../context/AppContext'

const AllProductsDisplay = () => {

    const {filteredProducts, collectionProducts} = useContext(AppContext)
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [collectionProducts])

  return (
    <div className='all-products'>
        <div className='products-banner'> <h3>Hi.</h3></div>
        <div className='all-products-display-container'>
            <Categories />
            <Products />
        </div>
    </div>
    
  )
}

export default AllProductsDisplay