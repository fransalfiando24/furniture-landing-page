import React, {useRef, useEffect } from 'react'
import './css/NavbarComponent.css'
import {TweenMax, Power3, Expo} from 'gsap'
import { AiOutlineSearch } from 'react-icons/ai';

function NavbarComponent() {
    useEffect(() => {
        TweenMax.from(
            ".nav-Title",
            2,
            {
                opacity: 0,
                y: -20,
                delay: 1.0,
                ease: Expo.easeInOut
            }, 0.5
        )

        TweenMax.staggerFrom("nav ul li", 2, {
            delay: 2.0,
            opacity: 0,
            y: -20,
            ease: Expo.easeInOut
            }, 0.1);
    })

    return (
        <>
            <nav>
                <div className="nav-Title">
                    FF
                </div>
                <ul>
                    <li>Collection</li>
                    <li>Professional</li>
                    <li>News</li>
                    <li>About Us</li>
                    <li><AiOutlineSearch/></li>
                </ul>
            </nav>
        </>
    )
}

export default NavbarComponent
