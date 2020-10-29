import React, { useState, useEffect } from 'react';
import './Trait-Card.css'

import ChampionsJson from '../../context/apiContext/champions.json'
import LazyImage from '../../lazy-image'

const TraitCard = ({ name }) => {
    const [traits, setTraits] = useState([]);

    useEffect(() => {
        ChampionsJson.find(champion => champion.name === name && setTraits(champion.traits));
    })
    return (
        traits.map((trait, index) => {
            return (
                <div 
                    key={index}
                    className='Trait-Card'
                >
                    <LazyImage
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

