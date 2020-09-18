import React from 'react';
import './Mods-List-Item.css'

const ModsListItem = ( {name, description, image } ) => {
    return (
        <div className='Mods-List-Item'>
            <li>
                <p>{name}</p>
                <p>{description}</p>
            </li>
            {
                image === 'TFT3_GameVariation_None'?
                    null
                    :
                    <img src= {process.env.PUBLIC_URL + `/assets/images/galaxies/${image}.webp`} alt={image}/>
            }
        </div>
    )
}

export default ModsListItem;

