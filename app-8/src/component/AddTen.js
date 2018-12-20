import React from 'react';

export default function AddTen(props){
    return(
        <div>
        {props.ThisIsStateBeingPassedThroughProps + 10}
        </div>
    )
}