import React, { Component } from 'react'
import NavOfHearo from '../../Components/NavOfHearo'
import './index.css'
import Container from '../../Components/Container'
import HeroInfo from '../../Components/HeroInfo'



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
