import React, { Component } from 'react'
import Container from '../../Container'
import ConcatCompoOne from '../ConcatCompoOne'
import ConcatCompoTwo from '../ConcatCompoTwo'
import ConcatCompoThree from '../ConcatCompoThree'
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
