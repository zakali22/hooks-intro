import React from 'react'
import "./NavBar.stylesheet.scss"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2>Hooks Intro</h2>
            <Link to="/counter"><button>Counter</button></Link>
            <Link to="#"><button>Fetcher</button></Link>
            <Link to="#"><button>Todo</button></Link>
        </nav>
    )
}

export default NavBar