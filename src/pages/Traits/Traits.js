import React from 'react';
import './Traits.css'

import TraitsChampions from '../../context/apiContext/traits.json'
import AllTraitsMap from '../../components/All-Traits-Map/All-Traits-Map'


const Traits = () => (
    <div className='Traits-List'>
        <h2>Traits: </h2>
        {TraitsChampions.map( ({ key, name, description, innate, type, sets }) => {
            return (
                <AllTraitsMap
                    key= { key }
                    name= { name }
                    description= { description }
                    innate= { innate }
                    type= { type }
                    sets= { sets }
                />
            )
        })}
    </div>
)

export default Traits;
