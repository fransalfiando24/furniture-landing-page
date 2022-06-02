import React, {useState, useRef, useEffect } from 'react'
import './css/CategoryComponent.css'
import imgCategory1 from '../asset/furniture1.jpg'
import imgCategory2 from '../asset/furniture2.jpg'
import {TweenMax, Power3, Expo} from 'gsap'
import AOS from 'aos';
import "aos/dist/aos.css";

function CategoryComponent() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        AOS.init({
            // once: true,
        });

        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })
    return (
        <div className="category-container">
            <div className="category">
                <div className="category-text" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="250">
                    <p style={{transform: `translateY(${offsetY * -0.07}px)`}}><a href="">Discover</a></p>
                    <h1 style={{transform: `translateY(${offsetY * -0.07}px)`}}>Chairs</h1>
                </div>
                <img src={imgCategory1} alt="" data-aos="fade-down" data-aos-duration="1200"/>
            </div>
            <div className="category">
                <div className="category-text" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="250">
                    <p style={{transform: `translateY(${offsetY * -0.07}px)`}}><a href="">Discover</a></p>
                    <h1 style={{transform: `translateY(${offsetY * -0.07}px)`}}>Lamp</h1>
                </div>
                <img src={imgCategory2} alt="" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100"/>
            </div>
        </div>
    )
}

export default CategoryComponent
