import React, { Component } from 'react'
import Container from '../../Components/Container'
import './index.css'
import InfoForSectionJoinUs from '../../Components/InfoForSectionJoinUs'
import JoinUsImage from '../../Components/JoinUsImage'



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
