import React, { Component } from 'react'
import bytesize_mail from '../../Assets/Images/bytesize_mail.svg'
import './index.css'


export default class EmailInfo extends Component {
  render() {
    return (
      <div className='emailindo__contain'>
        <img src={bytesize_mail} alt="bytesize_mail" className='emailindo__contain__img'/>
        <p className='emailindo__contain__prah'>Subscribe to our Newsletter </p>
      </div>
    )
  } 
}
