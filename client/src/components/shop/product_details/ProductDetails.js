import './product_details.css'
import { useContext, useEffect } from 'react'
import products from '../../assets/products'
import HomeProduct from '../../home/home_product/HomeProduct'
import ProductSection from './product_section/ProductSection'
import AppContext from '../../context/AppContext'

const ProductDetails = () => {

  const {selectedProduct} = useContext(AppContext)



  useEffect(() => {
    window.scrollTo(0, 20)
}, [selectedProduct])

  return (
    <div className='product-details'>
        <ProductSection product={selectedProduct} />
        <div>
          <h4>RELATED PRODUCTS</h4>
          <div className='flex-row-center'>
            {
              products.filter(prod => prod.category === selectedProduct.category && prod.description !== selectedProduct.description).slice(10, 14).map(prod => <HomeProduct product={prod} />)
            }
          </div>
        </div>
        
    </div>
  )
}

export default ProductDetails