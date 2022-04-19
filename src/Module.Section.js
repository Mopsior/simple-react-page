import React from 'react'
import './css/Module.css'

export default function Module({ title, desc }) {
    return (
        <div className="module">
            <div className="mdiv">
                <div className="mt">
                    <img src="/logo512.png" alt="logo" />
                    <h1>{ title }</h1>
                </div>
                <div className="md">
                    <p>{ desc }</p>
                </div>
            </div>
        </div>
    )
}