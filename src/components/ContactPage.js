import React from 'react'
import './ContactPage.css'

function ContactPage() {
  return (
    <div className='contact-page-container'>
        <div className='contact-us-container'>
            <div className='contact-us-text-container'>
                <div className='contact-us-title-text'>
                    Contact Us
                </div>
                <div className='contact-us-subtitle-text'>
                    We would love to hear from you. <br/><br/>
                    Feel free to reach out with the following details. 
                </div>    
            </div>
            <div className='contact-us-details-container'>
                <div className='contact-detail'>
                    <div className='contact-detail-title-text'>
                        All Socials:
                    </div>
                    <div className='contact-detail-text'>
                        <a href="https://linktr.ee/bincity?fbclid=PAAaYvIr-KFwKFEESrl6e_TLvIxuUBDejuIjyPirX3N3_nQBjilg1St0dj5bY_aem_Adj0EgOmuVodMswJw4negLuJxed2IqIPI5bcVhgnDsYb3PCKgpnOqOjhsaOh3wfZSFQ" className='socials'>Linktree</a>
                    </div>
                </div>
                <div className='contact-detail'>
                    <div className='contact-detail-title-text'>
                        Open:
                    </div>
                    <div className='contact-detail-text'>
                        Whenever
                    </div>
                </div>
                <div className='contact-detail'>
                    <div className='contact-detail-title-text'>
                        Email:
                    </div>
                    <div className='contact-detail-text'>
                        <a href="mailto:info@bincityco.com?subject=I%20Just%20Saw%20Your%20Website%21" className='socials'>info [at] bincityco [dot] com</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='visit-us-container'>
            <div className='visit-us-map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.480105521969!2d-89.60391948459588!3d40.68542277933485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880a59174d648437%3A0x96ac9743f579ee50!2s1000%20SW%20Jefferson%20Ave%2C%20Peoria%2C%20IL%2061605!5e0!3m2!1sen!2sus!4v1688670400291!5m2!1sen!2sus" 
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map' className='visit-us-map'></iframe>
            </div>
            <div className='visit-us-text-container'>
                <div className='visit-us-title-text'>
                    Visit Us
                </div>
                <div className='visit-us-subtitle-text'>
                    Address:  
                </div>
                <div className='visit-us-text'>
                    1000 SW Jefferson Ave, Peoria, IL 61605
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage