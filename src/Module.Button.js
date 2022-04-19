import React from 'react'
import './css/Button.css'

export default function Button({ text, link }) {
    React.useLayoutEffect(() => {
        const butt = document.querySelectorAll('button')
        butt.forEach(el => {
            el.addEventListener('click', () => {
                window.location.href = el.dataset.link
            })
        });
    })

    return (
        <button data-link={link}>{text}</button>
    )
}