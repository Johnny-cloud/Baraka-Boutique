
import './news_letter.css'

const NewsLetter = () => {
    return (
      <div className='news-letter'>
        <div className='news-letter-contents'>
            <h3>Subscribe to our NewsLetter</h3>
            <p>Signup for the weekly newsletter to get the latest and best deals available!</p>
            <div className='news-letter-form'>
                <input type='email' />
                <button>Subscribe</button>
            </div>
            <p>We never share your information since we respect your privacy.</p>
        </div>
    </div>
  )
}
export default NewsLetter