import React, { useState, useEffect } from 'react';
import './Champion-Ability.css'

import AblitiyJson from '../../context/apiContext/abilities.json';

const ChampionAbility = ({ holder }) => {

    const [ability, setAbility] = useState({
        name: '',
        type: '',
        description: '',
    });
    const { name, type, description } = ability;

    useEffect(() => {
        AblitiyJson.filter(ability => ability.holder === holder && setAbility(ability));
    })
    console.log(ability)
    return (
        <div className='Champion-Ability'>
            <div className='Champion-Ability-Image-Header'>
                <img
                    src={process.env.PUBLIC_URL + `/assets/images/abilities/${holder.toLowerCase()}.webp`}
                    onError={e => {
                        e.target.src = `${ process.env.PUBLIC_URL + `/assets/images/abilities/${holder.replace(/ /g, '').toLowerCase()}.png`}`
                    }}
                    alt={name}
                />
                <h6> {name} {`(${type})`} </h6>
            </div>
            <p> {description} </p>
        </div>
    )
}

export default ChampionAbility;

