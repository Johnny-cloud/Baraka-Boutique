import PopularProducts from "./popular_products/PopularProducts"
import TopProducts from "./weekly_top/TopProducts"

const MiddleTop = () => {
    return (
      <div className="middle-top">
        <PopularProducts />
        <TopProducts />
    </div>
  )

}

export default MiddleTop