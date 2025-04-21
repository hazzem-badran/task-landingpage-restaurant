import React, { Component } from 'react'
import ButtonComp from '../ButtonComp'
import Container from '../Container'
import cookImage from '../../Assets/Images/Rectangle34.png'  
import './index.css'


export default class CookingIngredientsInfo extends Component {
  render() {
    return (
      <div>
        <Container>
          <div  className='cookingingr__data'>
            <div className='cookingingr__contan' >        
                  <h4>Cooking ingredients</h4>
                  <p className="cookingingr__title">What goes in</p>
                  <p className='cookingingr__prah'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.</p>
                  <ButtonComp btnHref= "##" btnName= "Reade More" />
              </div>
              <img src={cookImage} alt="cookImage" className='cookImage' />
          </div>
        </Container>
      </div>
    )
  }
}
