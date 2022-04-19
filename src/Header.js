import React from "react"
import { gsap } from 'gsap'
import Button from './Module.Button'
import './css/Header.css'

export default function Header() {
    const hcRef = React.createRef()
    const hdRef = React.createRef()

    React.useLayoutEffect(() => {
        const elements = hdRef.current.children

        const tl = gsap.timeline()
        tl.delay(0.75)
        tl
            .fromTo(hcRef.current, { y: '+50', opacity: 0 }, {y: 0, opacity: 1, duration: 1,})
            .fromTo(elements[1], { y: '+50', opacity: 0 }, {y: 0, opacity: 1, duration: 1,}, '-=0.25')
    }, [hcRef, hdRef])

    return (
        <header ref={ hdRef }>
            <div className="hdr">
                <div className="hc" ref={hcRef}>
                    <h1>Lorem ipsum dolor sit amet, <span>consectetur.</span></h1>
                </div>
            </div>
            <Button text="Loromz" link="https://google.com/1" />
        </header>
    )
}