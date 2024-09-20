import React, { useState } from 'react';
import "./Card.css"
import { ICard } from '../types/ICard';


const Card :React.FC<ICard>= ({ name, exprice, price }) => {

    return (
        <div className="card">
            <p className="name">{name}</p>
            <div className="prices">
                <p className="exprice" style={{ textDecoration: 'line-through' }}>{exprice}</p>
                <p className="price">{price}</p>
            </div>
        </div>
    );
};

export default Card;
