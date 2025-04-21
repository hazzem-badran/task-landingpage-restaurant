import React, { Component } from 'react'
import './index.css'
import ButtonComp from '../ButtonComp'

export default class  HeroInfo extends Component {
  render() {
    return (
      <div className='hero__info__contain'>
        <h2><pre>Welcome To<br/>Golden View Dine</pre></h2>
        <p>Explore the authentic vegan dishes with your friends and family</p>
        <ButtonComp btnHref= "##" btnName= "Reade More" />
      </div>
    )
  }
}
