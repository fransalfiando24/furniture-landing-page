import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './css/ProductSlider.css'
import imgProduct1 from '../asset/bg.jpg'
import imgProduct2 from '../asset/bg2.jpg'
import imgProduct3 from '../asset/bg3.jpg'
import imgProduct5 from '../asset/bg5.jpg'

export default class ProductSlider extends Component {
  render() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 2,
        speed: 500,
        dots: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "100px",
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            initialSlide: 0,
            centerPadding: "20px",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: "0px",
          }
        }
      ]
    };
    return (
      <div className="slider-product">
        <Slider {...settings} className="slider">
          <div className="img-container">
            <h1>Product</h1>
            <img src={imgProduct1} alt="" className="img-product"/>
          </div>
          <div className="img-container">
            <h1>Product</h1>
            <img src={imgProduct2} alt="" className="img-product"/>
          </div>
          <div className="img-container">
            <h1>Product</h1>
            <img src={imgProduct3} alt="" className="img-product"/>
          </div>
          <div className="img-container">
            <h1>Product</h1>
            <img src={imgProduct5} alt="" className="img-product"/>
          </div>
          <div className="img-container">
            <h1>Product</h1>
            <img src={imgProduct2} alt="" className="img-product"/>
          </div>
        </Slider>
      </div>
    );
  }
}