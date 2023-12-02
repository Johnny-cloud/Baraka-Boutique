// This code displays all the best selling products

import { useState, useEffect, useContext } from "react"

import HomeProduct from "../home_product/HomeProduct"

import AppContext from "../../context/AppContext"



const BestSelling = () => {

    const[bestSelling, setBestSelling] = useState(null)

    const {api} = useContext(AppContext)

    const fetchBestSelling = async () => {

        const response = await fetch(`${api}/products`)

        if(response.ok){

            const products = await response.json()

            setBestSelling(products.filter(product => product.category === 'best_selling'))

        }
    }


    useEffect(() => {

        fetchBestSelling()

    }, [])


    if(bestSelling){  

        return(

            <div className="display-container">

                <h3>Best Sellers</h3>

                <div className="products-container">

                    {bestSelling.slice(0,4).map(product => <HomeProduct product={product} key={product._id} />)}

                </div>
                
            </div>
        )
    }
}

export default BestSelling