import React from "react";
import rough from 'roughjs';
import '@styles/base/appHeader.scss';

import panIcon from '@assets/icons/pan-icon.png';
import cursorIcon from '@assets/icons/cursor-icon.png';
import rhombusIcon from '@assets/icons/rhombus-icon.png';
import circleIcon from '@assets/icons/circle-icon.png';
import arrowIcon from '@assets/icons/arrow-icon.png';
import lineIcon from '@assets/icons/line-icon.png';
import pencilIcon from '@assets/icons/pencil-icon.png';
import textIcon from '@assets/icons/text-icon.png';
import imageIcon from '@assets/icons/image-icon.png';
import eraserIcon from '@assets/icons/eraser-icon.png';
import { Rectangle } from "./rectangle";

export const AppHeader = () => {
    const drawReactangle = () => {
        const rc = rough.canvas(document.getElementById('canvas'));
        rc.rectangle(10, 10, 200, 200); // x, y, width, height
    }
    const baseClassName = "appHeader";
    return (
        <React.Fragment>
            <div className={`${baseClassName}`}>
                <div className={`${baseClassName}__header`}>
                    <span className={`${baseClassName}__dot`}></span> WhiteBoard
                </div>

                <div className={`${baseClassName}__toolbar`}>
                    <img src={panIcon} alt="pan" onClick={drawReactangle} />
                    <img src={cursorIcon} alt="cursor" />
                    <Rectangle/>
                    <img src={rhombusIcon} alt="rhombus" />
                    <img src={circleIcon} alt="circle" />
                    <img src={arrowIcon} alt="arrow" />
                    <img src={lineIcon} alt="line" />
                    <img src={pencilIcon} alt="pencil" />
                    <img src={textIcon} alt="text" />
                    <img src={imageIcon} alt="image" />
                    <img src={eraserIcon} alt="eraser" />
                </div>

                <div>

                </div>
            </div>
        </React.Fragment>
    )
}