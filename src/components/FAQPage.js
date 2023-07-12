import React from 'react'
import './FAQPage.css'

function FAQPage() {
  return (
    <div className='faq-container'>
        <div className='faq-title-container'>
            <div className='faq-title-text'>
                FAQ
            </div>
            <div className='faq-subtitle-text'>
                The most frequently asked questions and answers
            </div>
        </div>
        <div className='question-container'>
          <div className='question-title-text'>
            What is a bin store?
          </div>
          <div className='accent' />
          <div className='question-text'>
            A store with bins blyat
          </div>
        </div>
        <div className='question-container'>
          <div className='question-title-text'>
            Can I open boxes?
          </div>
          <div className='accent' />
          <div className='question-text'>
            Absolutely not blyat
          </div>
        </div>
        <div className='question-container'>
          <div className='question-title-text'>
            What type of payment do you accept?
          </div>
          <div className='accent' />
          <div className='question-text'>
            United States Dollars blyat what you want to pay with lev dolbayo?
          </div>
        </div>
        <div className='question-container'>
          <div className='question-title-text'>
            What time should I arrive?
          </div>
          <div className='accent' />
          <div className='question-text'>
            When we're open blyat, what u gonna break in?
          </div>
        </div>
        <div className='question-container'>
          <div className='question-title-text'>
            Do you provide bags/carts to shop with?
          </div>
          <div className='accent' />
          <div className='question-text'>
            Do you have hands blyat? You can carry shit you'll be aight
          </div>
        </div>
    </div>
  )
}

export default FAQPage