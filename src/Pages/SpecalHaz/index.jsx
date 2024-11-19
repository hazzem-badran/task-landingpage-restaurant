import React, { Component } from 'react'
import SpecialMake from '../../Components/SpecialMake'
import './index.css'
import juice from '../../Assets/Images/orange-juice1.png'
import chefs from '../../Assets/Images/chef2.png'
import exotic from '../../Assets/Images/restaurant1.png'
import InfoForSections from '../../Components/InfoForSections'




export default class SpecalHaz extends Component {
  render() {
    
    return (
      <div className='specalhaz__page'>
        <InfoForSections classNamePearnt="" textH3="Special" textP="What makes us special" />
        <div className="specales__contain__all">
          <SpecialMake srcImge = {juice} altImge = "juice"  spcecialTit = "Fresh Food" />
          <SpecialMake srcImge = {chefs} altImge = "chefs"  spcecialTit = "Skilled Chef" />
          <SpecialMake srcImge = {exotic} altImge = "ExoticDishes"  spcecialTit = "Exotic Dishes" />
        </div>
        
      </div>
    )
  }
}
