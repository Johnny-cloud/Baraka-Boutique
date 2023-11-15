import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const BoysClothing = () => {
    const [boysClothing, setBoysClothing] = useState(null)

    const fetchClothing = async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setBoysClothing(products.filter(product => product.category === "clothing" && product.sub_category === "boys"))
        }
    }

    useEffect(() => {
        fetchClothing()
    }, [])

    if(boysClothing){
        return(
            <div className='display-container'>
                <h1>Boys Clothing</h1>
                <div className='products-container'>
                    {boysClothing.map(clothing => <ProductDisplay product={clothing} key={clothing._id} />)}
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

export default BoysClothing