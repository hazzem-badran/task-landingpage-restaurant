import React, { Component } from 'react'
import './index.css'



export default class  SpecialMake extends Component {
  render() {
    const {srcImge, altImge, spcecialTit} = this.props;
    return (
      <div className='specialmake__contain' >
        <img src={srcImge} alt={altImge} className='spec__imge' />
        <h3>{spcecialTit}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.</p>
      </div>
    )
  }
}
