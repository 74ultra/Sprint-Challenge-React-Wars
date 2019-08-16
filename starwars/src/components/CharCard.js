import React from 'react';
import { Card } from 'semantic-ui-react';
import './CharCard.scss';

function CharCard (props){
    
    console.log(props);

    return (
        <Card className="card">
            <Card.Content>
                <Card.Header className='headline'>{props.name}</Card.Header>
                <p>Mass: {props.mass} kg</p>
                <p>Height: {props.height} cm</p>
                <p>Eye color: {props.eyeColor}</p>
                <p>Gender: {props.gender}</p>
            </Card.Content>
        </Card>
    )
}

export default CharCard;