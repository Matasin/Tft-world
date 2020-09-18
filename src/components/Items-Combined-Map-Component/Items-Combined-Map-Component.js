import React from 'react'
import './Items-Combined-Map-Component.css'


const ItemsCombinedMapComponent = ({ ItemsJson, itemId }) => {
    return (
        <ul className='Items-Combined-Map-Component-Container'>
            {ItemsJson.map(({ id, name, stats, description, recipe }) => {
                const firstItem = itemId;
                const secondItem = id < 10 && `0${id}`;
                if (recipe !== undefined) return false;

                // recipe is only in whole compontenst so in this case i can just map 9 items
                return (
                    <li
                        key={id}
                        className='Items-Combined-Map-Component-Item'
                    >
                        <img
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
                        />
                    </li>
                )
            })}
        </ul>
    )
}
export default ItemsCombinedMapComponent;