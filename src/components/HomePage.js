import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div className='home-container'> 
        <div className='featured-container'>
            <p className='featured-text'>
                Featured On:
            </p>
        </div>
        <div className='video-container'>
            <iframe className='youtube-vid' src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
            <iframe className='youtube-vid' src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className='text-box-container'>
            <p className='text-box-text'>
                ILLINOIS' PREMIER LIQUIDATION BIN STORE
            </p>
        </div>
        <div className='large-img-container'>
            <img src="/images/chicago-skyline.jpg" alt="logo" className='large-img'/>
        </div>
        <div className='text-box-container'>
            <p className='text-box-text'>
                BUY ANYHTHING IN THE BINS FOR $9 OR LESS
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
    </div>
  )
}

export default HomePage