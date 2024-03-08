import './shop.css'
import { useEffect, useState } from 'react'
import TopLanding from '../top_landing/TopLanding'
import ProductsSection from './products_section/ProductsSection'
import products from '../assets/products'
import Sidebar from './sidebar/Sidebar'

const Shop = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(9)
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    window.scrollTo(0, 50)
    setStart(0)
    setEnd(9)
  }, [filteredProducts])


  useEffect(() => {
    window.scrollTo(0, 50)
  }, [start, end])
  
  return (
    <div className='shop'>
        <TopLanding title={'Shop'} />
        <div className='main-content flex-row-center'>
          <ProductsSection productsDisplayed={filteredProducts} setStart={setStart} setEnd={setEnd} start={start} end={end}/>
          <Sidebar setFilteredProducts={setFilteredProducts} products={products} />
        </div>
        
    </div>
  )
}

export default Shop