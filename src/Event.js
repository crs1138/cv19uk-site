import React from 'react';
import './scss/Event.module.scss';

function Event({heading, details}) {
    return (
        <li className="tm__event event" >
            <h2 className="event__heading">{ heading }</h2>
            {!!details && details}
        </li>
    );
}

export default Event;