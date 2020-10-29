import React from 'react'
import './Items-Combined-Map-Component.css'

import ItemCard from '../Item-Card/Item-Card'

const ItemsCombinedMapComponent = ({ ItemsJson, itemId }) => {
    return (
        <ul className='Items-Combined-Map-Component-Container'>
            {ItemsJson.map(({ id, recipe }) => {
                const firstItem = itemId;
                const secondItem = id < 10 && `0${id}`;
                const resultItem = itemId.toString() + id.toString();
                if (recipe !== undefined) return false;
                // recipe is only in whole compontenst so in this case i can just map 9 items
                return (
                    <div
                        className='Items-Combined-Map-Component-Item-Block'
                        key={id}
                    >
                        <li className='Items-Combined-Map-Component-Item'>
                            <ItemCard
                                itemId={itemId}
                                image={`0${firstItem}`}
                            />
                        </li>

                        <div className='Items-Combined-Map-Component-Item-Block__Sign'>+</div>

                        <li className='Items-Combined-Map-Component-Item'>
                            <ItemCard
                                itemId={id}
                                image={secondItem}
                            />
                        </li>

                        <div className='Items-Combined-Map-Component-Item-Block__Sign'>=</div>

                        <li className='Items-Combined-Map-Component-Item'>
                            <ItemCard
                                itemId={parseInt(resultItem)}
                                image={firstItem + secondItem.replace(/^0+/, '')}
                                imageOnError={secondItem.replace(/^0+/, '') + firstItem}
                            />
                        </li>

                    </div>

                )
            })}
        </ul >
    )
}
export default ItemsCombinedMapComponent;