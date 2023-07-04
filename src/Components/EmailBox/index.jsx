import React, { Component } from 'react'
import ButtonComp from '../../Components/ButtonComp'
import './index.css'

export default class EmailBox extends Component {
  render() {
    return (
      <div className='emailbox__contain'>
        <input type="email" placeholder="Enter your email" />
        <ButtonComp btnHref="##" btnName="Subscribe" />
      </div>
    )
  }
}
