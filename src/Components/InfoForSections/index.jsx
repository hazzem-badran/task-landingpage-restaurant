import React, { Component } from 'react'
import './index.css'

export default class InfoForSections extends Component {
  render() {
    const {classNamePearnt='', textH3, textP} = this.props;
    return (

      <div className = {`infoforsecrions__contain ${classNamePearnt && 'infoforsecrions__contain--alignleft'}`}>
        <h3>{textH3}</h3>
        <p>{textP}</p>
      </div>
    )
  }
}
