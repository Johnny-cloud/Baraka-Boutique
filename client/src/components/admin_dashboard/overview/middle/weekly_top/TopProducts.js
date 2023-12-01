import {useState, useEffect} from 'react'

const TopProducts = () => {
    const [popularProducts, setPopularProducts] = useState([])

    const fetchPopularProducts = async () => {
        const response = await fetch("/products")

        if(response.ok){
            const productsFetched = await response.json()
            setPopularProducts(productsFetched.filter(product => product.rating === 4.6))
        }
    }

    useEffect(() => {
        fetchPopularProducts()
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