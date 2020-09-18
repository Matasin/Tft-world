import React from 'react';
import './Trait-Description-Map.css'

import TraitsChampions from '../../context/apiContext/traits.json'
import { replaceInString } from '../../helpers/helpers'

const TraitDescriptionMap = ( { targetTraits } ) => {
    return (
        TraitsChampions.map( ({ key, name, description, type }) => {
            return (
                targetTraits.map( (targetTrait) => {
                    return (
                        targetTrait === name &&
                            <div className='Trait-Description' key= { key }> 
                                <div className='Trait-Description-Image-Header'>
                                    <img 
                                        src= {process.env.PUBLIC_URL + `/assets/images/traits/${replaceInString(name)}.svg`} 
                                        alt={name}
                                    />
                                    <h6> {name} {`(${type})`} </h6>
                                </div>
                                <p> {description} </p>
                            </div>
                    )
                })
            )
        })
    )
}
export default TraitDescriptionMap;

