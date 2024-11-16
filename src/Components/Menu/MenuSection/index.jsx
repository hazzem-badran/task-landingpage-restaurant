import React, { Component } from "react";
import Container from "../../Container";
import InfoForSections from "../../InfoForSections";
import food1 from "../../../Assets/Images/hcmp33562_1459402.png";
import food2 from "../../../Assets/Images/unsplash_ThLVnKdeH1k.png";
import food4 from "../../../Assets/Images/unsplash_50KffXbjIOg.png";
import food3 from "../../../Assets/Images/unsplash_sHG1dCUXgPY.png";
import MenuItem from "../MenuItem";
import "./index.css";

export default class MenuPage extends Component {
  render() {
    return (
      <div className="menuepage__page">
        <Container>
          <InfoForSections
            classNamePearnt=""
            textH3="Straight From Kitchen"
            textP="Our Menu"
          />
          <div className="menue__contain__all">
            <MenuItem
              imageItem={food1}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 499"
            />

            <MenuItem
              imageItem={food2}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 590"
            />
            <MenuItem
              imageItem={food3}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 590"
            />

            <MenuItem
              imageItem={food4}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 333"
            />
            <MenuItem
              imageItem={food1}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 499"
            />

            <MenuItem
              imageItem={food2}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 590"
            />
            <MenuItem
              imageItem={food3}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 590"
            />

            <MenuItem
              imageItem={food4}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 333"
            />
            <MenuItem
              imageItem={food1}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 499"
            />

            <MenuItem
              imageItem={food2}
              parahTit="Phasellus convallis maximus"
              parahTitText="Lorem ipsum dolor sit amet"
              price="Rs 590"
            />
          </div>
        </Container>
      </div>
    );
  }
}
