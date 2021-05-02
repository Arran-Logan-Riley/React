import React from 'react';

const validationcomponent = ( props ) => {
    return (
        <div>
            <p>The prop length : {props.txtlength}</p>
            <p>{props.error}</p>
        </div>
    )
};

export default validationcomponent;
