import React, {useState, useRef, useEffect } from 'react'
import './css/MainComponent.css'
import {TweenMax, Power3, Expo} from 'gsap'

function MainComponent() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll",handleScroll);
        TweenMax.from(
            ".mainTitle",
            2,
            {
                opacity: 0,
                ease: Expo.easeInOut
            }, 0.5
        )
        
        // TweenMax.from(
        //     ".mainTitle p",
        //     1.5,
        //     {
        //         delay: .5,
        //         opacity: 0,
        //         ease: Expo.easeIn
        //     }, 0.5
        // )
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (
        <div className="main">
            <div className="mainTitle">
                <h1 style={{transform: `translateY(${offsetY * 0.2}px)`}} className="title">Fransisco Furniture</h1>
                <p style={{transform: `translateY(${offsetY * 0.2}px)`}}><a href="">Discover</a></p>
            </div>
        </div>
    )
}

export default MainComponent
