import React from 'react'
import './ServicesPage.css'

function ServicesPage() {
  return (
    <div className='faq-container'>
        <div className='faq-title-container'>
            <div className='faq-title-text'>
                Goods and Services
            </div>
            <div className='faq-subtitle-text'>
                Discover Some of the High-Quality Products at the Bins
            </div>
        </div>
        <div className='img-grid-container'>
            <div className='img-grid-row-container'>
                <div className='img-grid-half-row-container'>
                     <img src="/images/about1.jpg" alt="logo" className='grid-img3'/>
                </div>
                <div className='img-grid-half-row-container'>
                    <img src="/images/inside1.jpg" alt="logo" className='grid-img3'/>
                </div>
            </div>
            <div className='img-grid-row-container'>
                <div className='img-grid-half-row-container'>
                    <img src="/images/inside2.jpg" alt="logo" className='grid-img3'/>
                </div>
                <div className='img-grid-half-row-container'>
                    <img src="/images/inside4.jpg" alt="logo" className='grid-img3'/>
                </div>
            </div>
            <div className='img-grid-row-container'>
                <div className='img-grid-half-row-container'>
                    <img src="/images/outside1.jpg" alt="logo" className='grid-img3'/>
                </div>
                <div className='img-grid-half-row-container'>
                    <img src="/images/pricing1.jpg" alt="logo" className='grid-img3'/>
                </div>
            </div>
            <div className='img-grid-row-container'>
                <div className='img-grid-half-row-container'>
                    <img src="/images/inside5.jpg" alt="logo" className='grid-img3'/>
                </div>
                <div className='img-grid-half-row-container'>
                    <img src="/images/inside3.jpg" alt="logo" className='grid-img3'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesPage