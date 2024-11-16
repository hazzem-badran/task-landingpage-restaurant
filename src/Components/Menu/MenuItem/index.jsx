import React from "react";
import horizontal_line from "../../../Assets/Images/Vector55.svg";
import "./index.css"



const MenuItem = ({imageItem, parahTit, parahTitText, price}) => {
  return (
    <div className="menu__item">
      <img src={imageItem} alt="" className="img__item" />
      <div className="contain__prah">
        <p className="prah__tit">{parahTit}</p>
        <p className="prah__tit_text">{parahTitText}</p>
      </div>
      <img src={horizontal_line} alt="" className="img__vect" />
      <strong>{price}</strong>
    </div>
  );
};

export default MenuItem;
