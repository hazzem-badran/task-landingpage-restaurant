import React, { Component } from 'react'
import './index.css'
import InfoForSections from '../../Components/InfoForSections'
import RevComo from '../../Components/RevComo'
import realPict1 from '../../Assets/Images/Ellipse1.png'
import realPict2 from '../../Assets/Images/Ellipse2.png'
import realStar1 from '../../Assets/Images/star.svg'



export default class ReviewsPage extends Component {
  render() {
    const textForPrah = "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “";
    return (
      <div className='reviews__page'>
        <InfoForSections  textH3="Reviews" textP="words from our food lovers" />
        <div className="reviews__for__Contain">

          <RevComo imgSrc={realPict1} imgAlt="realPict1"  propName="Alex andrina" imgStars={realStar1} imgStarsAlt="realStar1" revPreah={textForPrah} />
          <RevComo imgSrc={realPict2} imgAlt="realPict1"  propName="Alex andrina" imgStars={realStar1} imgStarsAlt="realStar1" revPreah={textForPrah} />
          <RevComo imgSrc={realPict1} imgAlt="realPict1"  propName="Alex andrina" imgStars={realStar1} imgStarsAlt="realStar1" revPreah={textForPrah} />
        </div>
      </div>
    )
  }
}
