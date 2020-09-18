import React from 'react';
import './Mods.css'

import ModsListItem from '../../components/Mods-List-Item/Mods-List-Item'
import JsonMods from '../../context/apiContext/galaxies'

const Mods = () => {
    return (
        <ul className='Mods-List'>
            <h2>Types of galaxies</h2>
            {JsonMods.map( ({ key,  name, description }) => {
                return (
                    <ModsListItem
                        key= { key }
                        image= { key }
                        name= { name }
                        description= { description }
                    />
                )
            })}
        </ul>
    )
}

export default Mods;

