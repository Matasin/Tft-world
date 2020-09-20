import React, { useState, useEffect } from 'react';
import './Trait-Card.css'

import ChampionsJson from '../../context/apiContext/champions.json'

const TraitCard = ({ name }) => {
    const [traits, setTraits] = useState([]);

    useEffect(() => {
        ChampionsJson.filter(champion => champion.name === name && setTraits(champion.traits));
    })
    return (
        traits.map((trait, index) => {
            return (
                <div 
                    key={index}
                    className='Trait-Card'
                >
                    <img
                        src={process.env.PUBLIC_URL + `/assets/images/traits/${trait.toLowerCase()}.svg`}
                        alt={trait}
                    />
                    <p>{trait}</p>
                </div>
            )
        })
    )
};

export default TraitCard;

