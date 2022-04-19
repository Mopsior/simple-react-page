import React from 'react'
import './css/Author.css'

export default function Author({ img, name, link }) {
    return (
        <div className="atd">
            <img className="atd-logo" src={ img } alt={ img } width="256px" height="256px" />
            <h1>{ name }</h1>
            <a href={link}>
                <img className="atd-dsc-logo" src="/Discord.png" alt="Discord logo" width="71px" height="80px" />
            </a>
        </div>
    )
}