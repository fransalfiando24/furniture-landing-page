import './css/WordsComponent.css';
import React, {useRef, useEffect } from 'react'
import {TweenMax, Power3, Expo} from 'gsap'
import AOS from 'aos';
import "aos/dist/aos.css";

function WordsComponents() {
    useEffect(() => {
        AOS.init({
            // once: true,
        });

    })
    return (
        <div className="words-container">
            <div className="words">
                <h1 data-aos="fade-up" data-aos-duration="1200">I had in my heart <br/>to create <span>furnitures</span> that are simples, <span>beautiful</span>, colorful & design</h1>
                <p><a href="">Discover our History</a></p>
            </div>
        </div>
    )
}

export default WordsComponents
