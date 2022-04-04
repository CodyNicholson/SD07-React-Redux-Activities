import React from 'react'
import { useSelector } from 'react-redux'

function NavLink(props) {
    const mode = useSelector((state) => state.mode)

    return (
        <div className="NavLink" style={{'backgroundColor': mode.color4}}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
