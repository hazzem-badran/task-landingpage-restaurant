import React, { Component } from 'react'
import CookingIngredientsInfo from '../CookingIngredientsInfo'
import './index.css'


export default class CookingIngredientsPage extends Component {
  render() {
    return (
      <div className='cookingingredients__page'>
        <CookingIngredientsInfo />
      </div>
    )
  }
}
