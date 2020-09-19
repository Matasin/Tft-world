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
                                imageOnError={`0${firstItem}`}
                            />
                        </li>

                        <div>+</div>

                        <li className='Items-Combined-Map-Component-Item'>
                            <ItemCard
                                itemId={id}
                                image={secondItem}
                                imageOnError={secondItem}
                            />
                        </li>

                        <div>=</div>

                        <li className='Items-Combined-Map-Component-Item'>
                            <ItemCard
                                itemId={parseInt(resultItem)}
                                image={firstItem + secondItem.replace(/^0+/, '')}
                                imageOnError={secondItem.replace(/^0+/, '') + firstItem}
                            />
                        </li>


                        {/* <img
                            src={process.env.PUBLIC_URL + `/assets/images/items/${`0${firstItem}`}.webp`}
                            onError={e => {
                                e.target.src = `${process.env.PUBLIC_URL + `/assets/images/items/${`0${firstItem}`}.png`}`
                            }}
                            alt={name}
                        />
                        <div>+</div>
                        <img
                            src={process.env.PUBLIC_URL + `/assets/images/items/${secondItem}.webp`}
                            onError={e => {
                                e.target.src = `${process.env.PUBLIC_URL + `/assets/images/items/${secondItem}.png`}`
                            }}
                            alt={name}
                        />
                        <div>=</div>
                        <img 
                            src={process.env.PUBLIC_URL + `/assets/images/items/${firstItem + secondItem.replace(/^0+/, '')}.webp`}
                            alt=''
                            onError={e => {
                                e.target.src = `${process.env.PUBLIC_URL + `/assets/images/items/${secondItem.replace(/^0+/, '') + firstItem}.webp`}`
                            }}// some time is required to reverse numbers in path to img
                        /> */}
                    </div>

                )
            })}
        </ul >
    )
}
export default ItemsCombinedMapComponent;