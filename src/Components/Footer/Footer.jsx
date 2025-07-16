import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.jpg'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>

      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons container">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyrights">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
