import { useState, useEffect } from "react"
import HomeProduct from "../home_product/HomeProduct"

const BestSelling = () => {

    const[bestSelling, setBestSelling] = useState(null)

    const fetchBestSelling = async () => {
        const response = await fetch('/api/products')

        if(response.ok){
            const products = await response.json()
            setBestSelling(products.filter(product => product.category === 'best_selling'))

        }
    }

    useEffect(() => {
        fetchBestSelling()
    }, [])

    if(bestSelling){  
        return(
            <div className="display-container">
                <h3>Best Sellers</h3>
                <div className="products-container">
                    {bestSelling.slice(0,4).map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}

export default BestSelling