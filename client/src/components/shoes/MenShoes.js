import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const MenShoes= () => {
    const [menShoes, setMenShoes] = useState(null)

    const fetchShoes= async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setMenShoes(products.filter(product => product.category === "shoes" && product.sub_category === "men"))
        }
    }

    useEffect(() => {
        fetchShoes()
    }, [])

    if(menShoes){
        return(
            <div className='display-container'>
                <h1>Men's Shoes</h1>
                <div className='products-container'>
                    {menShoes.map(shoes=> <ProductDisplay product={shoes} key={shoes._id} />)}
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

export default MenShoes