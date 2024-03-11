import './contact.css'
import TopLanding from '../top_landing/TopLanding'
import { useEffect } from 'react'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 20)
  }, [])
  return (
    <div className='contact'>
        <TopLanding title={'Contact'} />
        <div className='main-content'>
        <h4>GET IN TOUCH</h4>
        <p>We love to hear from you on our customer service, merchandise, website or any 
          topics you want to share with us. Your comments and suggestions will be appreciated. 
          Please complete the form below.</p>
        <p><i class="bi bi-geo-alt"></i> Nairobi, Kenya</p>
        <p><i class="bi bi-telephone-forward"></i> +254 7xx xxx 899</p>
        <p><i class="bi bi-envelope-at-fill"></i> barakainfo@gmail.com</p>
        <form>
          <div>
            <label htmlFor='name'>Your name</label>
            <input type='text' id='name' />
          </div>
          <div>
            <label htmlFor='email'>Your email</label>
            <input type='email' id='email' />
          </div>
          <div>
            <label htmlFor='meassage'>Your message</label>
            <textarea type='text' id='message'/>
          </div>
          <div>
            <button>Send Message</button>
          </div>
        </form>
        </div>
        
    </div>
  )
}

export default Contact