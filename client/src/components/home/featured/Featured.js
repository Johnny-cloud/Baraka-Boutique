import { useState, useEffect } from "react"
import HomeProduct from "../home_product/HomeProduct"

const Featured = () => {

    const[featured, setFeatured] = useState(null)

    const fetchFeatured = async () => {
        const response = await fetch('https://baraka-boutique-backend.vercel.app/products')

        if(response.ok){
            console.log(response)
            const products = await response.json()
            console.log(products)
            setFeatured(products.filter(product => product.category === 'featured'))

        } else{
            console.log(response)
        }
    }

    useEffect(() => {
        fetchFeatured()
    }, [])

    if(featured){  
        return(
            <div className="display-container">
                <h3>Featured</h3>
                <div className="products-container">
                    {featured.map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}

export default Featured