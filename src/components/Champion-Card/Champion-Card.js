import React from 'react';
import './Champion-Card.css'

import { Link } from 'react-router-dom'

const ChampionCard = ( { cost, name } ) => {
    const image = name.replace(/ /g, '');
    return (
        <Link 
            className='Champion-Card'
            to= {`/champions/${name}`} 
        >
            <img 
                src= { process.env.PUBLIC_URL + `/assets/images/champions/TFT4_${image}.webp`} 
                onError={e => {
                    e.target.src = `${ process.env.PUBLIC_URL + `/assets/images/champions/TFT4_${image}.png`}`
                }}
                alt= { name }
                className={`Cost${cost}`}
            />
            <p>{name}</p>
        </Link>
    );
};

export default ChampionCard;

