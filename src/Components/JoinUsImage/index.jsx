import React, { Component } from 'react'
import cord from '../../Assets/Images/Component5.png'
import './index.css'

export default class JoinUsImage extends Component {
  render() {
    return (
      <div className='cord__contain'>
        <img src={cord} alt="cord" />
      </div>
    )
  }
}
