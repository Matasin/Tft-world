import React from 'react'
import './Items-Map.css'

import ItemCard from '../Item-Card/Item-Card';

const ItemsMap = ({ items, scope, setItemID }) => {
    return (
        <ul className='Items-Map-Container' style={ items.length <= 2 ? {boxShadow: 'none'} : null}>
            {items.map( ({id}) => {
                const image = id < 10 ? `0${id}` : id;
                if(scope <= id) return null;
                if(scope === 'WHOLE' && id <= 10) return null;
                return (
                    <li 
                        key={id}
                        onClick= { () => setItemID(id) }
                        className='Items-Map-Item'
                    >
                        <ItemCard
                            image= {image}
                            imageOnError= {image}
                            itemId= {id}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
export default ItemsMap;