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
        <div className='home-section-reverse-container'>
            <div className='large-img-container'>
                <img src="/images/chicago-skyline.jpg" alt="large-img" className='large-img'/>
            </div>
            <div className='side-text-box-container'>
                <p className='side-text-box-text'>
                    ILLINOIS' PREMIER LIQUIDATION <br/> BIN STORE
                </p>
            </div>
        </div>
        <div className='home-section-container'>
            <div className='side-text-box-container'>
                <p className='side2-text-box-text'>
                    HOW DOES BIN CITY WORK?
                </p>
            </div>
            <div className='large-img-container'>
                <img src="/images/peoria-baseball.jpg" alt="how" className='large-img'/>
            </div>
        </div>
        <div className='text-box-container'>
            <p className='text-box-text'>
                BUY ANYTHING IN THE BINS FOR $9 OR LESS
            </p>
        </div>
        <div className='img-grid-container'>
            <div className='img-grid-row-container'>
                <div className='img-grid-half-row-container'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                </div>
                <div className='img-grid-half-row-container'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                </div>
            </div>
            <div className='img-grid-row-container'>
                <div className='img-grid-half-row-container'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                </div>
                <div className='img-grid-half-row-container'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                </div>
            </div>
            <div className='img-grid-row-container'>
                <div className='img-grid-half-row-container'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                </div>
                <div className='img-grid-half-row-container'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                </div>
            </div>
            <div className='img-grid-row-container'>
                <div className='img-grid-half-row-container'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                </div>
                <div className='img-grid-half-row-container'>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                    <img src="/images/chicago-skyline.jpg" alt="logo" className='grid-img'/>
                </div>
            </div>
        </div>
        <div className='home-section-container'>
        <div className='large-img-container'>
            <img src="/images/weekly-pricing.png" alt="pricing" className='large-img'/>
        </div>
        <div className='large-img-container'>
            <img src="/images/store-hours.png" alt="hours" className='large-img'/>
        </div>
        </div>
        <div className='text-box-container'>
            <p className='text-box-text'>
                OUR STORE
            </p>
        </div>
        <div className='large-imgs-container'>
            <div className='large-img-container'>
                <img src="/images/chicago-skyline.jpg" alt="large-img" className='large-img'/>
            </div>
            <div className='large-img-container'>
                <img src="/images/chicago-skyline.jpg" alt="large-img" className='large-img'/>
            </div>
        </div>
        <div className='text-box-container'>
            <p className='text-box-text'>
                GET IN TOUCH WITH US
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