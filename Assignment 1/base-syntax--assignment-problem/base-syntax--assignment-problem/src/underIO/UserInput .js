//Holds input element
import React from 'react';
import "./userIO.css";

const userInput = (props) =>{
    return (
        <div>
            <input onChange={props.changed} value={props.userName} type="text"/>
        </div>
    )
}

export default userInput;