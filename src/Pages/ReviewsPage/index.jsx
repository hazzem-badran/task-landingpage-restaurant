import React, { Component } from "react";
import "./index.css";
import InfoForSections from "../../Components/InfoForSections";
import RevComo from "../../Components/RevComo";
import realPict1 from "../../Assets/Images/Ellipse1.png";
import realPict2 from "../../Assets/Images/Ellipse2.png";
import realStar1 from "../../Assets/Images/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default class ReviewsPage extends Component {
  render() {
    const textForPrah =
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “";
    return (
      <>
        {/* <Swiper>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>9</SwiperSlide>
      </Swiper> */}
        <div className="reviews__page">
          <InfoForSections
            textH3="Reviews"
            textP="words from our food lovers"
          />
          <Swiper navigation={true}  modules={[Navigation]} className="reviews__for__Contain">
            <SwiperSlide>
              <RevComo
                imgSrc={realPict1}
                imgAlt="realPict1"
                propName="Alex andrina"
                imgStars={realStar1}
                imgStarsAlt="realStar1"
                revPreah={textForPrah}
              />
            </SwiperSlide>
            <SwiperSlide>
              <RevComo
                imgSrc={realPict2}
                imgAlt="realPict1"
                propName="Alex andrina"
                imgStars={realStar1}
                imgStarsAlt="realStar1"
                revPreah={textForPrah}
              />
            </SwiperSlide>

            <SwiperSlide>
              <RevComo
                imgSrc={realPict1}
                imgAlt="realPict1"
                propName="Alex andrina"
                imgStars={realStar1}
                imgStarsAlt="realStar1"
                revPreah={textForPrah}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
  }
}
