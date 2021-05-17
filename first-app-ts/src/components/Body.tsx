import React from 'react';

interface BodyProps {
    text : string
}

export const Body : React.FC < BodyProps > = (props) => {
    return (
        <p>
            {props.text}
        </p>
    )
}
