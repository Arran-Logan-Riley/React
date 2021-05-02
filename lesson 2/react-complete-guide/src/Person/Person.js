import React from 'react';
// import './Person.css'
import styled from "styled-components"

//this is a component created using the styled component libary. This calls a method to create a div and renders it
const StyleDiv = styled.div` 
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center; 

    @media (min-width: 500px):{
        width: "450px"
    }
`


const person = ( props ) => {
    return (
        // <div className="Person" style={style}>
        <StyleDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input onChange={props.changed} type="text" value={props.name}/> 
        </StyleDiv>
    )
};

export default person;

//the click property is a method passed from app.js
//setting the value to props.name will set it init state