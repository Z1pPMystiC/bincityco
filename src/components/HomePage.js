import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div className='home-container'>
        {/* <div className='featured-container'>
            <p className='featured-text'>
                Featured On:
            </p>
        </div>
        <div className='video-container'>
            <iframe className='youtube-vid' src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowFullscreen></iframe>
            <iframe className='youtube-vid' src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowFullscreen></iframe>
        </div> */}
        <div className='text-box-container'>
            <p className='text-box-text2'>
                OPEN: FRIDAY-SUNDAY, 
                <br/>10AM-6PM
            </p>
        </div>
        <br />
        <div className='home-section-reverse-container'>
            <div className='large-img-container'>
                <img src="/images/chicago-skyline.jpg" alt="large-img" className='large-img'/>
            </div>
            <div className='side-text-box-container'>
                <p className='side-text-box-text'>
                    PEORIA'S PREMIER LIQUIDATION <br/> BIN STORE
                </p>
            </div>
        </div>
        <div className='home-section-container'>
        <div className='question-container2'>
            <div className='question-container'>
                <div className='question-title-text'>
                    Why Bin City?
                </div>
                <div className='accent' />
                <div className='question-text'>
                At Bin City, we understand the importance of offering our 
                customers not just a shopping experience but a solution to 
                their organizational needs.
                </div>
            </div>
            </div>
            <div className='img-grid-row-container2'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
            </div>
        </div>
        <div className='home-section-reverse-container'>
            <div className='img-grid-row-container2'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
            </div>
            <div className='question-container2'>
            <div className='question-container'>
                <div className='question-text'>
                    We pride ourselves on the variety of all 
                    of our products, ranging from kitchen supplies, to children's 
                    toys, to even top-of-the-line tech, all at a very affordable price.
                </div>
            </div>
            </div>
        </div>
        <div className='home-section-container'>
            <div className='question-container2'>
                <div className='question-container'>
                    <div className='question-text'>
                    When you shop at Bin City, you can shop with 
                    confidence. We're committed to offering only the highest quality 
                    products. Each product undergoes rigorous quality control to ensure 
                    durability and functionality.
                    </div>
                </div>
            </div>
            <div className='img-grid-row-container2'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
            </div>
        </div>
        <div className='home-section-reverse-container'>
            <div className='img-grid-row-container2'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
            </div>
            <div className='question-container2'>
            <div className='question-container'>
                <div className='question-text'>
                Finally, we believe that quality shouldn't come at a 
                premium. Our commitment to competitive pricing means you get 
                the best value for your money. At Bin City, affordability meets 
                quality without compromise.
                </div>
            </div>
            </div>
        </div>
        <div className='text-box-container'>
            <p className='text-box-text'>
                FIND US HERE!
            </p>
        </div>
        <div className='contact-container'>
            <div className='map-location'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.480105521969!2d-89.60391948459588!3d40.68542277933485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880a59174d648437%3A0x96ac9743f579ee50!2s1000%20SW%20Jefferson%20Ave%2C%20Peoria%2C%20IL%2061605!5e0!3m2!1sen!2sus!4v1688670400291!5m2!1sen!2sus" 
                allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='google-maps' title='Map of Location'></iframe>
            </div>
            <div className='location-container'>
                <div className='contact-text-big-container'>
                    <div className='location-text-container'>
                        <p className='location-title-text'>
                            LOCATION
                        </p>
                        <p className='location-text'>
                            1000 SW Jefferson Ave, Peoria, IL 61605
                        </p>
                    </div>
                    <div className='contact-text-container'>
                        <p className='contact-title-text'>
                            CONTACT US
                        </p>
                        <p className='contact-text'>
                            Email: <a href="mailto:info@bincityco.com?subject=I%20Just%20Saw%20Your%20Website%21" className='email'>info [at] bincityco [dot] com</a>
                        </p>
                    </div>
                </div>
                <div className='follow-us-container'>
                    <div className='follow-us-text'>
                        FOLLOW OUR SOCIALS
                    </div>
                    <div className='social-media-button-container'>
                        <a href='https://linktr.ee/bincity?fbclid=PAAaYvIr-KFwKFEESrl6e_TLvIxuUBDejuIjyPirX3N3_nQBjilg1St0dj5bY_aem_Adj0EgOmuVodMswJw4negLuJxed2IqIPI5bcVhgnDsYb3PCKgpnOqOjhsaOh3wfZSFQ'>
                            <button className='social-media-button'>
                                Linktree
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage