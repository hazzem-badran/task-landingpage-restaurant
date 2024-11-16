import React, { Component } from 'react'
import Container from '../../Container'
import './index.css'
import InfoForSectionJoinUs from '../../InfoForSectionJoinUs'
import JoinUsImage from '../JoinUsImage'



export default class JoinUsPage extends Component {
  render() {
    return (
      
      <div className='joinuspage__page'>
        <Container>
          <div className="joinus__parts__contan">
            < JoinUsImage />
            <InfoForSectionJoinUs />
            < JoinUsImage />
          </div>
        </Container>
      </div>
    )
  }
}
