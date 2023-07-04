import React, { Component } from 'react'
import './index.css'
import ButtonComp from '../ButtonComp' 


export default class InfoForSectionJoinUs extends Component {
  render() {
    return (
      <div className='InfoForSectionJoinUs__contain'>
        <h3>Come join us for a lunch this weekend and enjoy</h3>
        <p>FLAT 10% OFF</p>
        <ButtonComp btnHref= "##" btnName= "Reade More" />
      </div>
    )
  }
}
