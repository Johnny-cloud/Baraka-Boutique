// This is the display section of the collections
import { useEffect, useContext } from 'react'
import './all_products_display.css'
import Products from './products/Products'
import AppContext from '../context/AppContext'
import Categories from './categories/Categories'

const AllProductsDisplay = ({category, sub_category}) => {
    const {subCategory, collectionProducts} = useContext(AppContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [collectionProducts])


      return (
          <div className='all-products'>
            <div className='products-banner'><h1>{subCategory} fashion</h1></div>
            <div className='all-products-display-container'>
              <Products category={category} sub_category={sub_category}/>
              <Categories />
            </div>

        </div>

      )



}
export default AllProductsDisplay