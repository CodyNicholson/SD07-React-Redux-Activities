import React from 'react';

function ColorBlock(props) {
    return (
        <div className='colorBlock'
            style={{'backgroundColor': props.color}}
            key={props.id}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorBlock;