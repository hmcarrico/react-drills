import React from 'react';

export default function Todo(props){
let itemList = props.list.map((item) => {
        return (
            <div>
            <h3>{item}</h3>
            </div>
        )
    })
    return (
        <div>
        {itemList}
        </div>
    )
}