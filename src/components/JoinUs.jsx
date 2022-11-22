import React, { Component } from 'react'
import '../App.css'
import leftImage from '../images/join-left.webp'
import rightImage from '../images/join-right.webp'
import mobileImage from '../images/join-team-mobile.webp'

export default
class JoinUs extends Component {
    render () {
        return (
            <div className='join-us-wrapper'>
                <img className='top-img-mobile' src={mobileImage} alt='' />
                <img src={leftImage} alt='' />
                <div className="join-us-content">
                    <h2>Join the no-code, work automation movement</h2>
                    <h3>
                    Working at Hexact has always been an experience rather than an obligation. We trust people’s power and believe that together we can participate in building the future of AI worldwide.</h3>
                    <a href='/#'>Join us</a>
                </div>
                <img src={rightImage} alt='' />
            </div>
        )
    }
}