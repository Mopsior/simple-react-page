import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Module from './Module.Section'
import './css/Section.css'

export default function Section() {
    const h1Ref = React.useRef(),
          msRef = React.useRef(),
          ms2Ref = React.useRef()

    React.useLayoutEffect(() => {
        const el = h1Ref.current,
              // @ts-ignore
              el2 = msRef.current.children,
              // @ts-ignore
              el3 = ms2Ref.current.children

        const tl = gsap.timeline()
        tl
            .fromTo(el, { y: '-=200', opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
            .fromTo(el2, { x: '-=200', opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: 0.25}, '-=0.25')
            .fromTo(el3, { x: '-=200', opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: 0.25}, '-=1')
        
        ScrollTrigger.create({
            trigger: 'section',
            start: '-25% 20%',
            animation: tl
        })

    }, [h1Ref, msRef, ms2Ref])

    return (
        <section>
            <h1 ref={ h1Ref }>Lorem Ipsum dolor</h1>
            <div className="ms" ref={ msRef }>
                <Module title="One" desc="Lorem" />
                <Module title="Two" desc="Ipsum" />
                <Module title="Three" desc="Dolor" />
            </div>
            <div className="ms" ref={ ms2Ref }>
                <Module title="Three" desc="Lorem" />
                <Module title="Four" desc="Ipsum" />
                <Module title="Five" desc="Dolor" />
            </div>
        </section>
    )
}