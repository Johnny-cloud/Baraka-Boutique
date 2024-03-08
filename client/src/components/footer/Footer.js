import './footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
       
        <div className='main flex-row-center'>
          
          <ul>
            <h3>CONTACTS</h3>
            <li><i class="bi bi-headset"></i> +2547xxxxxxxx</li>
            <li><i class="bi bi-envelope-at-fill"></i> barakainfo@gmail.com</li>
          </ul>

          <div>
            <ul>
              <h3>INFORMATION</h3>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
              <li><Link to={'/cart'}>Cart</Link></li>
              <li><Link to={'/'}>Home</Link></li>
            </ul>
          </div>

          <div>
            <ul>
              <h3>SERVICES</h3>
              <li><i class="bi bi-truck"></i> Shipping</li>
              <li><i class="bi bi-box"></i> Door delivery</li>
              <li><i class="bi bi-cash-coin"></i> Refunds</li>
            </ul>
          </div>

          <div>
            <h3>FOLLOW US</h3>
            <ul>
              <li><Link><i class="bi bi-facebook"></i> Facebook</Link></li>
              <li><Link><i class="bi bi-messenger"></i> Messenger</Link></li>
              <li><Link><i class="bi bi-whatsapp"></i> Whatsapp</Link></li>
              <li><Link><i class="bi bi-instagram"></i> Instagram</Link></li>
            </ul>
          </div>
           
        </div>
        <h4>Baraka Boutique &copy; 2023</h4>
    </div>
  )
}

export default Footer