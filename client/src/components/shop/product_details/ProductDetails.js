import './product_details.css'
import {useState, useContext, useEffect } from 'react'
import products from '../../assets/products'
import HomeProduct from '../../home/home_product/HomeProduct'
import ProductSection from './product_section/ProductSection'
import AppContext from '../../context/AppContext'

const ProductDetails = () => {

  const {selectedProduct} = useContext(AppContext)

  const [product, setProduct] = useState({
    description: "Timex Women's T2H331 Indiglo Leather Strap Watch, Black/Silver-Tone/White", 
    price: 300, 
    rating: 3.6, 
    category: 'watches', 
    sub_category: 'women', 
    image: "https://images.unsplash.com/photo-1584208124232-7919e0000ad5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  )

  useEffect(() => {
    window.scrollTo(0, 20)
    if(selectedProduct){
        setProduct(selectedProduct)
    }
}, [selectedProduct])

  return (
    <div className='product-details'>
        <ProductSection product={product} />
        <div>
          <h4>RELATED PRODUCTS</h4>
          <div className='flex-row-center'>
            {
              products.filter(prod => prod.category === product.category && prod.description !== product.description).slice(10, 14).map(prod => <HomeProduct product={prod} />)
            }
          </div>
        </div>
        
    </div>
  )
}

export default ProductDetails