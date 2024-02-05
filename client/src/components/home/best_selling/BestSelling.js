// This code displays all the best selling products
import HomeProduct from "../home_product/HomeProduct"
import Loading from "../../animations/loading/Loading"

const BestSelling = () => {
    
    const bestSelling = [
        {description: "Nike sneakers", price: 2500, rating: 5.0, category: 'best_selling', sub_category: 'none', image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {description: "Adma boots", price: 2700, rating: 5.0, category: 'best_selling', sub_category: 'none', image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {description: "Trendy Denim Long sleeve", price: 600, rating: 5.0, category: 'best_selling', sub_category: 'none', image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {description: "Women side pocket", price: 1000, rating: 5.0, category: 'best_selling', sub_category: 'none', image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    ]
      

    if(bestSelling){  
            return(
                <div className="best-selling">
                <h4>OUR BEST SELLING</h4>
                <div className="products-container">
                    {bestSelling.map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    } else{
        return(
            <div>
                <Loading />
            </div>
        )
    }
}
export default BestSelling