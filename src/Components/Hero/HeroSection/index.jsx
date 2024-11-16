import React, { Component } from 'react'
import NavOfHearo from '../NavOfHearo'
import './index.css'
import Container from '../../Container'
import HeroInfo from '../HeroInfo'



export default class index extends Component {
  render() {
    return (
      <div className='hero__page'>
          <Container>
            <NavOfHearo />
            <HeroInfo/>
          </Container>
      </div>
    )
  }
}
