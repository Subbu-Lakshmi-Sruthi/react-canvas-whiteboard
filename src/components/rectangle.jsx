import React from "react";
import rough from 'roughjs';

import rectangleIcon from '@assets/icons/rectangle-icon.png';

export const Rectangle = () => {
    const drawRectangle = () => {
        const rc = rough.canvas(document.getElementById('canvas'));
        rc.rectangle(10, 10, 200, 200); // x, y, width, height
    }

    return(
        <React.Fragment>
            <img src={rectangleIcon} alt="rectangle" onClick={drawRectangle}/>
        </React.Fragment>
    )
}
