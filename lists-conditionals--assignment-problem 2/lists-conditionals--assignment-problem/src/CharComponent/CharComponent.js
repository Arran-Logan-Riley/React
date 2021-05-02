import React from 'react';
import "./global.css"

const charcomponent = ( props ) => {
    return (
        <div onClick={props.click} className="box">
            <p > {props.character}</p>
        </div>
    )
};

export default charcomponent;