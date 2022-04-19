import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Author from './Module.Author'
import './css/Module.Authors.css'

export default function Authors() {
    const
        h1Ref = React.useRef(),
        adiRef = React.useRef()

    React.useLayoutEffect(() => {
        const
            el = h1Ref.current,
            // @ts-ignore
            el2 = adiRef.current.children,
            tl = gsap.timeline()

        tl
            .fromTo(el, { y: '-=200', opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
            .fromTo(el2, { x: '-=200', opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.25 })
        
        ScrollTrigger.create({
            trigger: '.authors',
            start: '-25% 20%',
            animation: tl
        })
    })

    return (
        <div className="authors">
            <h1 ref={ h1Ref }>sit amet</h1>
            <div className="adi" ref={ adiRef }>
                <Author img="/logo512.png" name="One" link="https://google.com" />
                <Author img="/logo512.png" name="Two" link="https://google.com" />
                <Author img="/logo512.png" name="Three" link="https://google.com" />
            </div>
        </div>
    )
}