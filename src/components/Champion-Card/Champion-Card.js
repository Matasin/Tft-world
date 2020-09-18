import React from 'react';
import './Champion-Card.css'

import { Link } from 'react-router-dom'
import { replaceInString } from '../../helpers/helpers'

const ChampionCard = ( { cost, name } ) => {
    const image = replaceInString( name );
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
                className={`Champion-Card-Image-Champion Cost${cost}`}
            />
            <p>{name}</p>
        </Link>
    );
};

export default ChampionCard;

