import React from "react";
import StylesContext from "./StylesContext";

export default function RequestFormButton() {
    const buttonStyling = React.useContext(StylesContext);

    return (
        <div>
            <button style={buttonStyling}>Click Here!</button>
            <input type="submit" value="Submit" style={buttonStyling} />
        </div>
    );
}
