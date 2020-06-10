import React from 'react'
import "./NavBar.stylesheet.scss"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__title"><h2>Hooks Intro</h2></Link>
            <div className="navbar__links">
                <Link to="/counter"><p>Counter</p></Link>
                <Link to="#"><p>Fetcher</p></Link>
                <Link to="#"><p>Todo</p></Link>
            </div>
        </nav>
    )
}

export default NavBar