import React, { Component } from 'react'
import RecordNum from '../../Components/RecordNum'
import './index.css'
import Container from '../../Components/Container'
import imgRec1 from '../../Assets/Images/dish11.png'
import imgRec2 from '../../Assets/Images/chef11.png'
import imgRec3 from '../../Assets/Images/team11.png'

export default class RecordNumsPage extends Component {
  
  render() {

    return (
      <div className='recordnums__page'>
        <Container>
          <div className='recordhaz_contain'>
            <RecordNum imgSrc ={imgRec1} imgAlt="imgRec1" recoTit="250+" recoPrah="Delicacy"  />
            <RecordNum imgSrc ={imgRec2} imgAlt="imgRec2" recoTit="10+" recoPrah="renowed chefs "  />
            <RecordNum imgSrc ={imgRec3} imgAlt="imgRec3" recoTit="30+" recoPrah="Members"  />
          </div>
        </Container>
      </div>
    )
  }
}
