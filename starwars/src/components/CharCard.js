import React from 'react';

function CharCard (props){
    
    console.log(props);

    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>Mass: {props.mass} kg</p>
            <p>Height: {props.height} cm</p>
            <p>Eye color: {props.eyeColor}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default CharCard;