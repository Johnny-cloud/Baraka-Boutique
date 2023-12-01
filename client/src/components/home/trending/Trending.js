import { useState, useEffect } from "react"
import HomeProduct from "../home_product/HomeProduct"

const Trending = () => {

    const[trending, setTrending] = useState(null)

    const fetchTrending = async () => {
        const response = await fetch('https://baraka-boutique-backend.vercel.app/products')

        if(response.ok){
            const products = await response.json()
            setTrending(products.filter(product => product.category === 'trending'))

        }
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    if(trending){  
        return(
            <div className="display-container">
                <h3>Trending</h3>
                <div className="products-container">
                    {trending.map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}

export default Trending