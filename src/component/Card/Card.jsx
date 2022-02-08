import React from "react";
import "./Card.css";
import Vector from "../assets/Vector.png";

function Card({ title, header, img,  number, description }) {
  return (
    <div className="containerTow">
      <div className="box">
        <div className="contents">
          <div>
            <div className="img-header">
              <div className="flex-start">
                <img src={img} alt="img" className="img-box" />

                <div className="header">
                  <h5 className="name">{header}</h5>
                  <h3 className="address">{title}</h3>
                </div>
              </div>
              <div className="rate">
                <h6 className="number">{number}</h6>
                <img
                src={Vector}
                  alt="ratingImg"
                  width={"13.23"}
                  height={"12.64"}
                />
              </div>
            </div>
          </div>
          <span className="description">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;