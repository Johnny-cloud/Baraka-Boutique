import { useState, useEffect } from "react"
import HomeProduct from "../home_product/HomeProduct"

const BestSelling = () => {

    const[bestSelling, setBestSelling] = useState(null)

    const fetchBestSelling = async () => {
        const response = await fetch('/products')

        if(response.ok){
            const products = await response.json()
            setBestSelling(products.filter(product => product.rating === 5))

        }
    }

    useEffect(() => {
        fetchBestSelling()
    }, [])

    if(bestSelling){  
        return(
            <div className="display-container">
                <h3>Best Selling products</h3>
                <div className="products-container">
                    {bestSelling.map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}

export default BestSelling