import React from 'react';
import './All-Traits-Map.css'

import { replaceInString } from '../../helpers/helpers'
import AllTraitsMapSets from '../All-Traits-Map-Sets/All-Traits-Map-Sets'

const AllTraitsMap = ({ name, description, innate, type, sets }) => {
    const image = replaceInString(name);
    return (
        <>
            <div className='All-Traits-List-Item'>
                <li>
                    <p>{name} {`(${type})`}</p>
                    <p>{description}</p>
                    {innate && <p>Innate: {innate}</p>}
                </li>
                <AllTraitsMapSets
                    sets={sets}
                    image={image}
                />
            </div>
        </>

    )
}

export default AllTraitsMap;


