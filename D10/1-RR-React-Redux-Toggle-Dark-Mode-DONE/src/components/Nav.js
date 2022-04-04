import React from 'react'
import { useSelector } from 'react-redux'
import NavLink from './NavLink'

function Nav() {
    const mode = useSelector((state) => state.mode)

    return (
        <div className="Nav" style={{'backgroundColor': mode.color3}}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav
