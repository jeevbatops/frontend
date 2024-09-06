import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='Offers'>
        <div className='Offers-left'>
            <h2>Exclusive</h2>
            <h2>Offers for you</h2>
            <p>On all our bestseller products</p>
            <button>Check now</button>
        </div>
        <div className='Offers-right'>
            <img src={exclusive_image} alt=""/>
        </div>
    
      
    </div>
  )
}

export default Offers
