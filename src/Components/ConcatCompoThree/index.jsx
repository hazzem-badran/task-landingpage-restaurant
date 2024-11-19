import React, { Component } from 'react'
import './index.css'
import design_mail from '../../Assets/Images/ant-design_mail-filled.svg'
import design_location from '../../Assets/Images/carbon_location-filled.svg'
import design_phone from '../../Assets/Images/carbon_phone-filled.svg'

export default class ConcatCompoThree extends Component {
  render() {
    return (
      <div className='concat__three__conatin'>
        <p>Contact Us</p>
        <div className='concat__three__adress'>
          <img src={design_mail} alt="design_mail" />
          <p>Gogreendineservice@gmail.com</p>
        </div>
        <div className='concat__three__adress'>
          <img src={design_location} alt="design_location" />
          <p>AZ complex bylane3 Mandari RdMumbai 1100867 </p>
        </div>
        <div className='concat__three__adress'>
          <img src={design_phone} alt="design_phone" />
          <p>+1800 287 256</p>
        </div>
      </div>
    )
  }
}
