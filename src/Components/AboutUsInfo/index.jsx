import React, { Component } from 'react'
import './index.css'
import ButtonComp from '../ButtonComp'
import Container from '../Container'
import foodImage from '../../Assets/Images/foodImage.png'

export default class AboutUsInfo extends Component {
  render() {
    return (
      <div>
        <Container>
          <div  className='aboutus__data'>
            <div className='aboutusinfo__contan' >        
                  <h4>About Us</h4>
                  <p className="aboutus__title">Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine</p>
                  <p className='aboutus__prah'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
                  <ButtonComp btnHref= "##" btnName= "Reade More" />
              </div>
              <img src={foodImage} alt="foodImage" className='food__Image' />
          </div>
        </Container>
      </div>
    )
  }
}
