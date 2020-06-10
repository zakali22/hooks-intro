import React from "react"
import "./Counter.stylesheet.scss"

const Count = () => {
    return (
        <div className="counter__count">
            <div className="counter__count--digit">
                <span>0</span>
            </div>
            <div className="counter__count--controls">
                <span><i class="fas fa-plus"></i></span>
                <span><i class="fas fa-minus"></i></span>
                <span>Reset</span>
            </div>
        </div>
    )
}

export default Count;