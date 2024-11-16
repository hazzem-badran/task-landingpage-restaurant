import React, { Component } from 'react'
import './index.css'


export default class RecordNum extends Component {
  render() {
    const {imgSrc, imgAlt, recoTit, recoPrah} = this.props;
    return (
      <div className='recordnum__contain'>
        <img src={imgSrc} alt={imgAlt} className='rec__img' />
        <div className='recordnum__info'>
          <p className="rec__tit">{recoTit}</p>
          <p className="rec__prh">{recoPrah}</p>
        </div>
      </div>
    )
  }
}
