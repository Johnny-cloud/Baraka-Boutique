// This code returns a list of products whose rating === 6.
// The title is " weekly top products "
import {useState, useEffect, useContext} from 'react'
import AppContext from '../../../../context/AppContext'

const TopProducts = () => {
    const [popularProducts, setPopularProducts] = useState([])
    const {allProducts} = useContext(AppContext)

    useEffect(() => {
        setPopularProducts(allProducts)
    }, [])

    return (
            <div className='popular-products'>
            <div>
                <thead><th>Weekly Top Products</th></thead>
                <div className='popular-products-container right-container'>
                    {popularProducts.map(product => <div className='popular-row' key={product._id}><div className='popular-td'><img src={product.image} alt='' />{product.description.substring(0,70)}...</div><div className='popular-td'>Ksh. {product.price}</div></div>)}
                </div>
            </div>
        </div>
    )
}
export default TopProducts