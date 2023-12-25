import "./summary.css"
import VisitorsByBrowser from "./visitors_by_browser/VisitorsByBrowser"
import SalesOverview from "./sales_overview/SalesOverview"
import TopSellingCategories from "./top_selling_categories/TopSellingCategories"

const Summary = () => {
  return (
    <div className="summary">
        <VisitorsByBrowser />
        <SalesOverview />
        <TopSellingCategories />
        
    </div>
  )
}

export default Summary