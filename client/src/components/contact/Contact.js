import './contact.css'
import TopLanding from '../top_landing/TopLanding'

const Contact = () => {
  return (
    <div className='contact'>
        <TopLanding title={'Contact'} />
        <div className='main-content'>
        <h4>GET IN TOUCH</h4>
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