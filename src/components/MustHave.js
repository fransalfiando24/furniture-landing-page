import React, {useState, useRef, useEffect } from 'react'
import './css/MustHave.css'
import {TweenMax, Power3, Expo} from 'gsap'
import imgFurniture from '../asset/furniture.jpg'
import imgFurniture1 from '../asset/furniture1.jpg'
import imgFurniture2 from '../asset/furniture2.jpg'
import imgFurniture3 from '../asset/furniture3.jpg'
import imgFurniture4 from '../asset/furniture4.jpg'
import imgFurniture5 from '../asset/furniture5.jpg'
import imgFurniture6 from '../asset/furniture6.jpg'
import imgFurniture8 from '../asset/furniture8.jpg'
import imgFurniture9 from '../asset/furniture9.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";


function MustHave() {
    useEffect(() => {
        AOS.init({
            // once: true,
        });

    })
    return (
        <div className="must-have">
            <h1 data-aos="fade-up" data-aos-duration="1200">Our Must Have</h1>
            <div className="mustHave-container">
                <img src={imgFurniture} alt="" data-aos="fade-up" data-aos-duration="1200"/>
                <img src={imgFurniture1} alt="" data-aos="fade-up" data-aos-duration="1200"/>
                <img src={imgFurniture2} alt="" data-aos="fade-up" data-aos-duration="1200"/>
                <img src={imgFurniture3} alt="" data-aos="fade-up" data-aos-duration="1200"/>
                <img src={imgFurniture4} alt="" data-aos="fade-up" data-aos-duration="1200"/>
                <img src={imgFurniture5} alt="" data-aos="fade-up" data-aos-duration="1200"/>
                <img src={imgFurniture6} alt="" data-aos="fade-up" data-aos-duration="1200"/>
                <img src={imgFurniture8} alt="" data-aos="fade-up" data-aos-duration="1200"/>
                <img src={imgFurniture9} alt="" data-aos="fade-up" data-aos-duration="1200"/>
            </div>
            <h3><a href="" >All our Product</a></h3>
        </div>
    )
}

export default MustHave
