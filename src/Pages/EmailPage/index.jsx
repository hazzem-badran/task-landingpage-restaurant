import React, { Component } from 'react'
import EmailInfo from '../../Components/EmailInfo'
import Container from '../../Components/Container'
import EmailBox from '../../Components/EmailBox'
import './index.css'

export default class EmailPage extends Component {
  render() {
    return (
      <div className='emailpage__contain'> 
        <Container>
          <div className="emailpage__contain_disp">
            <EmailInfo />
            <EmailBox />
          </div>
        </Container>
      </div>
    )
  }
}
