import React from 'react'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className='about-container'>
        <div className='about-content-container'>
            <div className='logo-about-container'>
                <img src="/images/Transparent Logo.png" alt="logo" className='logo-about-img'/>
            </div>
            <div className='about-text-container'>
                <div className='about-title'>
                    About Bin City
                </div>
                <div className='about-text'>
                    We are Illinois’ premier retail liquidation store. Offering exclusive products at 70-90% off retail MSRP prices from America’s top retailers. 
                    <br/><br/><br/>
                    Our mission is simple: provide the best product at the best price for our customers. At Bin City, you will find amazing products for unbelievable prices.
                    <br/><br/><br/>
                    With over 20 years of experience in the liquidation business, we have established proprietary channels to secure the best product at the best price from all large retailers.
                    <br/><br/><br/>
                    Our unique store format and pricing model ensure that all customers get the best deals possible.
                    <br/><br/><br/>
                    We look forward to having you at our store.
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage