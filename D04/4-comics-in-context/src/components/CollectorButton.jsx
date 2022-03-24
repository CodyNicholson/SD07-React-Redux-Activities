import React from "react";
import StylesContext from "./StylesContext";

export default function CollectorButton() {
    const buttonStyling = React.useContext(StylesContext);
  
    return (
        <div>
            <button style={buttonStyling}>Click Here!</button>
        </div>
    );
}
