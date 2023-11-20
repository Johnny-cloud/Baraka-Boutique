import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const WomenShoes= () => {
    const [womenShoes, setWomenShoes] = useState(null)

    const fetchShoes= async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setWomenShoes(products.filter(product => product.category === "shoes" && product.sub_category === "women"))
        }
    }

    useEffect(() => {
        fetchShoes()
    }, [])

    if(womenShoes){
        return(
            <div>
                <h1>Women's Shoes</h1>
                <div className='products-container'>
                    {womenShoes.map(shoes=> <ProductDisplay product={shoes} key={shoes._id} />)}
                </div>
            </div>
        )
    } else{
        return(
            <div  className='display-container'>
                <h2>Fetching data.......</h2>
            </div>
        )
    }
}

export default WomenShoes