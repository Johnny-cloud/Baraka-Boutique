import "./visitors_by_browser.css"

const VisitorsByBrowser = () => {
  return (
    <div className="visitors-by-browser">
        <h6>VISITORS BY BROWSER</h6>
        <div className="visitors-by-browser-container">
            <div className="browser-details">
                <div className="browser-image-container"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/640px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" /></div>
                <p>Chrome <br /> <span className="company">Google, Inc.</span></p>
                <p className="ratio">48%</p>
            </div>
            <div className="browser-details">
                <div className="browser-image-container"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Microsoft_Edge_logo_%282015%E2%80%932019%29.svg/640px-Microsoft_Edge_logo_%282015%E2%80%932019%29.svg.png" alt="" /></div>
                <p>Edge <br /> <span className="company">Microsoft</span></p>
                <p className="ratio">7%</p>
            </div>
            <div className="browser-details">
                <div className="browser-image-container"><img src="https://images.techhive.com/images/article/2016/10/firefox-logo-100690302-large.jpg?auto=webp&quality=85,70" alt="" /></div>
                <p>Firefox <br /> <span className="company">Mozilla, Inc.</span></p>
                <p className="ratio">15%</p>
            </div>
            <div className="browser-details">
                <div className="browser-image-container"><img src="https://1000logos.net/wp-content/uploads/2020/08/Opera-Logo.png" alt="" /></div>
                <p>Opera <br /> <span className="company">Opera, Inc.</span></p>
                <p className="ratio">17%</p>
            </div>
            <div className="browser-details">
                <div className="browser-image-container"><img src="https://play-lh.googleusercontent.com/cQpfXdySmZ0kXlUS3ifFvNHwLgeeJi545UudvNiyp5P8oLpI8dS-d3FAu4O4OUDGqQ" alt="" /></div>
                <p>Uc Browser <br /> <span className="company">UC, Inc.</span></p>
                <p className="ratio">13%</p>
            </div>
        </div>
    </div>
  )
}

export default VisitorsByBrowser