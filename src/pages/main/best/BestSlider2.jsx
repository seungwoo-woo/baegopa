
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/285x285" />
          </div>
          <div>
            <img src="https://via.placeholder.com/285x285" />
          </div>
          <div>
            <img src="https://via.placeholder.com/285x285" />
          </div>
          <div>
            <img src="https://via.placeholder.com/285x285" />
          </div>
          <div>
            <img src="https://via.placeholder.com/285x285" />
          </div>
          <div>
            <img src="https://via.placeholder.com/285x285" />
          </div>
          <div>
            <img src="https://via.placeholder.com/285x285" />
          </div>
          <div>
            <img src="https://via.placeholder.com/285x285" />
          </div>
        </Slider>
      </div>
    );
  }
}
