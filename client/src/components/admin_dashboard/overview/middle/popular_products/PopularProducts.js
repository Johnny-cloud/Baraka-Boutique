import {useState, useEffect} from 'react'

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([])

    const fetchPopularProducts = async () => {
        const response = await fetch("/products")

        if(response.ok){
            const productsFetched = await response.json()
            setPopularProducts(productsFetched.filter(product => product.rating === 5))
        }
    }

    useEffect(() => {
        fetchPopularProducts()
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