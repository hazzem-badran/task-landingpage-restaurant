import React, { Component } from 'react'
import './index.css'


export default class ButtonComp extends Component {
  render() {
    const {btnHref, btnName} = this.props;
    return (
      <div><a href={btnHref} className='a__comp' >{btnName}</a></div>
    )
  }
}
