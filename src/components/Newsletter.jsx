import React, { Component } from 'react'
import '../App.css'

export default
class Newsletter extends Component {
    render () {
        return (
            <div className='newsletter'>
                <div className='newsletter-content-wrapper'>
                    <h1>Never miss an update!</h1>
                    <p>Sign up for our newsletter to recieve the latest company news, accomplishments, achievements, and future plans.</p>
                    <div className='contact-form'>
                        <input type='email' placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        )
    }
}
