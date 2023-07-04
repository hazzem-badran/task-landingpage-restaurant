import React, { Component } from 'react'
import './index.css'


export default class Containers extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className='main__container'>
        {children}
      </div>

    )
  }
}
