import React from 'react';


const person = (props) => { //ES6 function
    return (
        <div>
            <p>Im {props.name} component and I am {props.age} years old</p>
            <p>{props.children}</p> {/*children is any external data that is between the >< */}
        </div>
    )
}

export default person;  //export the function so we can use it elsewhere