import React, { Component } from 'react'
import logo from '../../Assets/Images/Logo.png'
import Social_Icons from '../../Assets/Images/Social_Icons.svg'
import Social_Icons2 from '../../Assets/Images/Social_Icons2.svg'
import Social_Icons3 from '../../Assets/Images/Social_Icons3.svg'
import './index.css'


export default class ConcatCompoOne extends Component {
  render() {
    return (
      <div className='concat__one_conatin'>
        <dir className="above__part">
          <img src={logo} alt="logo" className='above__part__imge' />
          <p className='above__part_prah'>Golden View Dine </p>
        </dir>
        <p className='concat__txt'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin 
        </p>
        <div className="concat__social">
          <img src={Social_Icons} alt="Social_Icons" />
          <img src={Social_Icons2} alt="Social_Icons2" />
          <img src={Social_Icons3} alt="Social_Icons3" />
        </div>
      </div>
    )
  }
}
