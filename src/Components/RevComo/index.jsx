import React, { Component } from 'react'
import './index.css'




export default class RevComo extends Component {
  render() {
      const {imgSrc, imgAlt, propName, imgStars, imgStarsAlt, revPreah} = this.props;
    return (
      <div className='revcomo_contain'>
        <div className="personl__data">
          <img src= {imgSrc} alt={imgAlt} className='image__personal' />
          <div className="name__tqyyam">
            <h4>{propName}</h4>
            <img src={imgStars} alt={imgStarsAlt} className='image__start'/>
            <img src={imgStars} alt={imgStarsAlt} className='image__start'/>
            <img src={imgStars} alt={imgStarsAlt} className='image__start'/>
            <img src={imgStars} alt={imgStarsAlt} className='image__start'/>
            <img src={imgStars} alt={imgStarsAlt} className='image__start'/>
          </div>
        </div>
        <p className='personl_review'>
          {revPreah}
        </p>
      </div>
    )
  }
}
