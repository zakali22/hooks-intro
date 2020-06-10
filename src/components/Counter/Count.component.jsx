import React, { useState } from "react"
import "./Counter.stylesheet.scss"

const Count = () => {
    let [counter, setCounter] = useState(0)
    const countDown = () => {
        setCounter(counter--)
    }

    const countUp = () => {
        setCounter(counter++)
    }
    
    return (
        <div className="counter__count">
            <div className="counter__count--digit">
            <span>{counter}</span>
            </div>
            <div className="counter__count--controls">
                <span onClick={() => countUp()}><i className="fas fa-plus"></i></span>
                <span onClick={() => countDown()}><i className="fas fa-minus"></i></span>
                <span>Reset</span>
            </div>
        </div>
    )
}

export default Count;