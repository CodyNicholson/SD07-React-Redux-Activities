import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
    const mode = useSelector((state) => state.mode)

    return (
        <div className="Footer" style={{'backgroundColor': mode.color3}}>
            <p>Footer Content</p>
        </div>
    )
}

export default Footer
