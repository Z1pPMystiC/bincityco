import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-main-container'>
            <Link to='/' className='logo-container'>
                <img src="/images/Transparent Logo Symbol.png" alt="logo" className='logo-img'/>
            </Link>
            <div className='logo-container'>
                <Link to='/privacy-policy' className='privacy-policy-text'>
                    Privacy Policy
                </Link>
            </div>
        </div>
        <div className='footer-copyright-container'>
            <div className='copyright-text'>Copyright © 2023 | Bin City Co</div>
        </div>
    </div>
  )
}

export default Footer