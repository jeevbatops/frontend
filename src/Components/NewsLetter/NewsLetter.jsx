import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Join our NewsLetter</h1>
        <p>Get notified about our updates</p>
        <div>
            <input type='email' placeholder='Enter your Mail'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}


export default NewsLetter
