//2 paragraphs
import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <h1>My Company is called {props.userName}</h1>
            <p>We do stuff</p>
        </div>
    )
};

export default userOutput;

//pass a user name and display it here