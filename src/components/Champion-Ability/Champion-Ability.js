import React, { useState, useEffect } from 'react';
import './Champion-Ability.css'

import AblitiyJson from '../../context/apiContext/abilities.json';
import LazyImage from '../../lazy-image'

const ChampionAbility = ({ holder }) => {

    const [ability, setAbility] = useState({
        name: '',
        type: '',
        description: '',
    });
    const { name, type, description } = ability;

    useEffect(() => {
        AblitiyJson.find(ability => ability.holder === holder && setAbility(ability));
    })
    return (
        <div className='Champion-Ability'>
            <div className='Champion-Ability-Image-Header'>
                <LazyImage
                    src={process.env.PUBLIC_URL + `/assets/images/abilities/${holder.toLowerCase()}.png`}
                    alt={name}
                />
                <h6> {name} {`(${type})`} </h6>
            </div>
            <p> {description} </p>
        </div>
    )
}

export default ChampionAbility;

