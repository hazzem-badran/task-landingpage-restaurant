import React, { Component } from 'react'
import Container from '../../Components/Container'
import ConcatCompoOne from '../../Components/ConcatCompoOne'
import ConcatCompoTwo from '../../Components/ConcatCompoTwo'
import ConcatCompoThree from '../../Components/ConcatCompoThree'
import './index.css'

export default class ContactUsPage extends Component {
  render() {
    return (
      <div className='contactuspage__contain' >
        <Container>
          <div className="compos_contain_disp">
            <ConcatCompoOne/>
            <ConcatCompoTwo/>
            <ConcatCompoThree/>
          </div>         
        </Container>
      
      </div>
    )
  }
}
