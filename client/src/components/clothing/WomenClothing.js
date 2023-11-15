import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const WomenClothing = () => {
    const [womenClothing, setWomenClothing] = useState(null)

    const fetchClothing = async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setWomenClothing(products.filter(product => product.category === "clothing" && product.sub_category === "women"))
        }
    }

    useEffect(() => {
        fetchClothing()
    }, [])

    if(womenClothing){
        return(
        <div className='display-container'>
            <h1>Women's Clothing</h1>
            <div className='products-container'>
                {womenClothing.map(clothing => <ProductDisplay product={clothing} key={clothing._id} />)}
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

export default WomenClothing