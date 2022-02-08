import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../Card";
import Ellipse175 from "../assets/slide1.png";
import Ellipse177 from "../assets/slide2.png";
import Ellipse176 from "../assets/slide3.png";

//import "../../../node_modules/slick-carousel/slick/slick.css";
//import "../../node_modules/slick-carousel/slick/slick-theme.css";


import "./Slider.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 2,
      className: "slides",
     
    };

    let cards = [
      {
        id: 1,
        src: Ellipse175,
        header: "Viezh Robert",
        title: "Warsaw, Poland",
        number: 4.5,
        description:
          "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      },
      {
        id: 2,
        src: Ellipse177,
        header: "Yessica Christy",
        title: "Shanxi, China",
        number: "4.5",
        description:
          "“I like it because I like to travel far and still can connect with high speed.”.",
      },
      {
        id: 3,
        src: Ellipse176,
        header: "Kim Young Jou",
        title: "Seoul, South Korea",
        number: "4.5",
        description:
          "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
      },
      {
        id: 1,
        src: Ellipse175,
        header: "Viezh Robert",
        title: "Warsaw, Poland",
        number: 4.5,
        description:
          "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      },
      {
        id: 2,
        src: Ellipse177,
        header: "Yessica Christy",
        title: "Shanxi, China",
        number: "4.5",
        description:
          "“I like it because I like to travel far and still can connect with high speed.”.",
      },
      {
        id: 3,
        src: Ellipse176,
        header: "Kim Young Jou",
        title: "Seoul, South Korea",
        number: "4.5",
        description:
          "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
      },
     
    ];

    return (
      <div className="containerThree">
        <Slider {...settings}>
          {cards.map((card) => {
            return (
              <div key={card.id}>
                <Card
                img={card.src}
                  header={card.header}
                  title={card.title}
                  number={card.number}
                  description={card.description}
                  
                />
              </div>
            );
          })}
        </Slider>
        <div className="line">
          <hr></hr>
        </div>
      </div>
    );
  }
}
