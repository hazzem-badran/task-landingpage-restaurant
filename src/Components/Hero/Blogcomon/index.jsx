import React, { Component } from 'react'
import './index.css'
import ButtonCompSpechel from '../ButtonCompSpechel';


export default class Blogcomon extends Component {
  render() {
    const {blogSrc, blogAlt, blogtxt1, blogtxt2} = this.props;

    return (
      <div className='blogcomon__contan'>
        <img src={blogSrc} alt={blogAlt} className='blogcomon__img' />
        <div className='blogcomon__info'>
          <p className='blogcomon__info__p1'>{blogtxt1}</p>
          <p className='blogcomon__info__p2'>{blogtxt2}</p>
          <ButtonCompSpechel />
        </div>
      </div>
    )
  }
}
