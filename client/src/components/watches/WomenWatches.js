import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const WomenWatches= () => {
    const [womenWatches, setWomenWatches] = useState(null)

    const fetchWatches= async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setWomenWatches(products.filter(product => product.category === "watches" && product.sub_category === "women"))
        }
    }

    useEffect(() => {
        fetchWatches()
    }, [])

    if(womenWatches){
        return(
            <div>
                <h1>Women's Watches</h1>
                <div className='products-container'>
                    {womenWatches.map(watches=> <ProductDisplay product={watches} key={watches._id} />)}
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

export default WomenWatches