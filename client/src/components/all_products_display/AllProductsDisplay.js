// This is the display section of the collections
import { useEffect, useContext } from 'react'
import './all_products_display.css'
import Products from './products/Products'
import AppContext from '../context/AppContext'
import Categories from './categories/Categories'

const AllProductsDisplay = () => {
    const {subCategory, collectionProducts} = useContext(AppContext)
    let url = ''

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [collectionProducts])

    // Set the image to display on the banner section
    if(subCategory === 'women'){
          url = 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    } else if(subCategory === 'men'){
        url = 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    } else if(subCategory === 'boys'){
        url = 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    } else{
        url = 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }

      return (
          <div className='all-products'>
            <div className='products-banner'><h3
              style={{backgroundImage: `url(${url})`,
              }}
            >{subCategory} fashion</h3></div>
            <div className='all-products-display-container'>
              <Categories />
              <Products />
            </div>

        </div>

      )



}
export default AllProductsDisplay