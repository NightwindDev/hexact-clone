import React, { Component } from 'react'
import '../App.css'

export default
class Badge extends Component {
    render () {
        return (
            <div className={`badge ${this.props.className}`} >{this.props.children}</div>
        )
    }
}