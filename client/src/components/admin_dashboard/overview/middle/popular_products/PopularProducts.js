// This code returns a list of products whose rating === 5
import {useState, useEffect, useContext} from 'react'
import AppContext from '../../../../context/AppContext'

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([])
    const {allProducts} = useContext(AppContext)


    useEffect(() => {
        setPopularProducts(allProducts)
    }, [])

  return (
        <div className='popular-products'>
        <div>
            <thead><th>Popular Products</th></thead>
            <div className='popular-products-container left-container'>
                {popularProducts.map(product => <div className='popular-row' key={product._id}><div className='popular-td'><img src={product.image} alt='' />{product.description.substring(0,20)}...</div><div className='popular-td'>Ksh. {product.price}</div></div>)}
            </div>
        </div>
    </div>
  )

}
export default PopularProducts