import React from 'react'
import './Items-Combined-Map-Whole.css'

import ItemCard from '../Item-Card/Item-Card';

const ItemsCombinedMapWhole = ({ ItemsJson, itemId }) => {
    return (
        <ul className='Items-Combined-Map-Whole-Container'>
            {ItemsJson.map(({ id, recipe }) => {
                const image = id < 10 ? `0${id}` : id;
                if (id !== itemId) return false;
                return (
                    <div
                        className='Items-Combined-Map-Component-Item-Block'
                        key={id}
                    >
                        {recipe.map((id, fakeIndex) => {
                            // fakeIndex bcs some items are built with the same item
                            return (
                                <React.Fragment key={fakeIndex}>
                                    <li className='Items-Combined-Map-Whole-Item'>
                                        <ItemCard
                                            itemId={id}
                                            image={`0${id}`}
                                            imageOnError={`0${id}`}
                                        />
                                    </li>
                                    {
                                        fakeIndex === 0 ?
                                            <div className='Items-Combined-Map-Whole-Item-Block__Sign'>+</div>
                                            : null
                                    }
                                </React.Fragment>
                            )
                        })}

                        <div className='Items-Combined-Map-Whole-Item-Block__Sign'>=</div>

                        <li className='Items-Combined-Map-Whole-Item'>
                            <ItemCard
                                itemId={image}
                                image={image}
                                imageOnError={image}
                            />
                        </li>
                    </div>
                )
            })}
        </ul>
    )
}
export default ItemsCombinedMapWhole;