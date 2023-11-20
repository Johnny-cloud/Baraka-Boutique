import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const GirlsWatches= () => {
    const [girlsWatches, setGirlsWatches] = useState(null)

    const fetchWatches= async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setGirlsWatches(products.filter(product => product.category === "watches" && product.sub_category === "girls"))
        }
    }

    useEffect(() => {
        fetchWatches()
    }, [])

    if(girlsWatches){
        return(
            <div>
                <h1>Girls Watches</h1>
                <div className='products-container'>
                    {girlsWatches.map(watches=> <ProductDisplay product={watches} key={watches._id} />)}
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

export default GirlsWatches