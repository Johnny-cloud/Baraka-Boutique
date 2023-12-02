// This code returns featured products

import { useState, useEffect, useContext } from "react"
import HomeProduct from "../home_product/HomeProduct"
import AppContext from "../../context/AppContext"

const Featured = () => {
    const[featured, setFeatured] = useState(null)
    const {api} = useContext(AppContext)

    const fetchFeatured = async () => {
        const response = await fetch(`${api}/products`)
        if(response.ok){
            const products = await response.json()
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