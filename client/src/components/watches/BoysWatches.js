import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const BoysWatches= () => {
    const [boysWatches, setBoysWatches] = useState(null)

    const fetchWatches= async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setBoysWatches(products.filter(product => product.category === "watches" && product.sub_category === "boys"))
        }
    }

    useEffect(() => {
        fetchWatches()
    }, [])

    if(boysWatches){
        return(
            <div>
                <h1>Boys Watches</h1>
                <div className='products-container'>
                    {boysWatches.map(watches=> <ProductDisplay product={watches} key={watches._id} />)}
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

export default BoysWatches