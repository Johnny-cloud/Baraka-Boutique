import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const MenWatches= () => {
    const [menWatches, setMenWatches] = useState(null)

    const fetchWatches= async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setMenWatches(products.filter(product => product.category === "watches" && product.sub_category === "men"))
        }
    }

    useEffect(() => {
        fetchWatches()
    }, [])

    if(menWatches){
        return(
            <div>
                <h1>Men's Watches</h1>
                <div className='products-container'>
                    {menWatches.map(watches=> <ProductDisplay product={watches} key={watches._id} />)}
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

export default MenWatches