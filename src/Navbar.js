import React from "react"
import { gsap } from 'gsap'
import './css/Navbar.css'

export default function Navbar() {
    const nlRef = React.useRef()
    const nrRef = React.useRef()

    React.useLayoutEffect(() => {
        // @ts-ignore
        const elements = nlRef.current.children
        // @ts-ignore
        const elementsTwo = nrRef.current.children

        const tl = gsap.timeline()
        tl
            .fromTo(elements, { x: '-200', opacity: 0 }, { duration: 0.5, x: '0', opacity: 1, stagger: 0.25 })
            .fromTo(elementsTwo, { x: '-200', opacity: 0 }, { duration: 0.5, x: '0', opacity: 1, stagger: 0.25, delay: 0.30 }, '-=0.25')
    }, [nlRef, nrRef])

    return (
        <nav>
            <div className="nl" ref={ nlRef }>
                <img src="/logo512.png" alt="img" width="64px" height="64px"/>
                <h1>Loromz</h1>
            </div>
            <div className="nr" ref={ nrRef }>
                <a href="https://google.com">One</a>
                <a href="https://google.com">Two</a>
                <a href="https://google.com">Three</a>
            </div>
        </nav>
    )
}