import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const GirlsClothing = () => {
    const [girlsClothing, setGirlsClothing] = useState(null)

    const fetchClothing = async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setGirlsClothing(products.filter(product => product.category === "clothing" && product.sub_category === "girls"))
        }
    }

    useEffect(() => {
        fetchClothing()
    }, [])

    if(girlsClothing){
        return(
        <div>
            <h1>Girls Clothing</h1>
            <div className='products-container'>
                {girlsClothing.map(clothing => <ProductDisplay product={clothing} key={clothing._id} />)}
            </div>
        </div>
        )
    } else{
        return(
            <div className='display-container'>
                <h2>Fetching data.......</h2>
            </div>
        )
    }
}

export default GirlsClothing