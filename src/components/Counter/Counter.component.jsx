import React from "react"
import "./Counter.stylesheet.scss"
import Count from "./Count.component.jsx"

const Counter = () => {
    return (
        <div className="counter">
            <h1>Counter</h1>
            <Count />
        </div>
    )
}

export default Counter