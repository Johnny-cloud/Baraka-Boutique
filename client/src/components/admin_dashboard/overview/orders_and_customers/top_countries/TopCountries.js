import "./top_countries.css"

const TopCountries = () => {
  return (
    <div className="top-countries">
        <h6>TOP COUNTRIES</h6>
        <div className="top-countries-container">
            <div className="country">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" alt="" />
                    Canada
                </div>
                <div className="up-rating">
                <i class="bi bi-arrow-up"></i> 0.98%
                <p>6,197</p>
                </div>
            </div>
            <div className="country">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png" alt="" />
                    France
                </div>
                <div className="up-rating">
                <i class="bi bi-arrow-up"></i> 0.67%
                <p>5,397</p>
                </div>
            </div>
            <div className="country">
                <div>
                    <img src="https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg" alt="" />
                    Spain
                </div>
                <div className="down-rating">
                <i class="bi bi-arrow-down"></i> 0.17%
                <p>6,800</p>
                </div>
            </div>
            <div className="country">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg" alt="" />
                    USA
                </div>
                <div className="up-rating">
                <i class="bi bi-arrow-up"></i> 0.98%
                <p>4,597</p>
                </div>
            </div>
            <div className="country">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png" alt="" />
                    Germany
                </div>
                <div className="down-rating">
                <i class="bi bi-arrow-down"></i> 0.23%
                <p>3,497</p>
                </div>
            </div>
            <div className="country">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png" alt="" />
                    Mexico
                </div>
                <div className="down-rating">
                <i class="bi bi-arrow-down"></i> 0.1%
                <p>4,407</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopCountries