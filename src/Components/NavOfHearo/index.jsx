import React, { Component } from 'react'
import logo  from '../../Assets/Images/Logo.png'
import serVect  from '../../Assets/Images/Vector.png'
import dachVect from '../../Assets/Images/Vector3.svg'
import './index.css'


export default class NavOfHearo extends Component {
  render() {
    // const imagePath = '../../Assets/Images'; // المسار الأساسي لمجلد الصور
    return (
      <nav className='nav__Hero'>
        <img src={logo}  alt="Logo" />
        <span className='icon_menuo'> 
          <span></span>
          <span></span>
          <span></span>
        </span>
        <ul>
          <li><a href="##">Home</a></li>
          <li><a href="##">About Us</a></li>
          <li><a href="##">Special</a></li>
          <li><a href="##">Menu</a></li>
          <li><a href="##">Blogs</a></li>
      </ul>
      <img src={serVect}  className='icon__search' alt="searchVector" />
      <div className='contan__book'>
        <img src={dachVect}  className='icon__dach' alt="searchVector" />
        <a href="##" className='book__now'>Book Now</a>
        <img src={dachVect}  className='icon__dach' alt="searchVector" />
      </div>
    </nav>
    )
  }
}
