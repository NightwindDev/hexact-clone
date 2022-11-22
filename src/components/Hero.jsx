import React, { Component } from 'react'
import '../App.css'
import heroImg from '../images/hero-image-home.jpeg'

export default
class Hero extends Component {
    render () {
        return (
            <div className='hero'>
                <div className='hero-info'>
                    <h1>Data Insights Growth</h1>
                    <h2>Delegate and scale your work, powered by the cloud.</h2>
                </div>
                <img src={heroImg} />
            </div>
        )
    }
}