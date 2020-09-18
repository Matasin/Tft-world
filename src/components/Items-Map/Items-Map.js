import React from 'react'
import './Items-Map.css'

const ItemsMap = ({ items, scope, setItemID }) => {
    return (
        <ul className='Items-Map-Container'>
            {items.map( ({id, name, stats, description}) => {
                const image = id < 10 ? `0${id}` : id;
                if(scope <= id) return null;
                if(scope === 'WHOLE' && id <= 10) return null;
                return (
                    <li 
                        key={id}
                        onClick= { () => setItemID(id) }
                        className='Items-Map-Item'
                    >
                        <div className='Tool-Tip'>
                            <p> { name } </p>
                            <p> { stats } </p>
                            <p> { description } </p>
                        </div>
                        <img 
                            src= { process.env.PUBLIC_URL + `/assets/images/items/${image}.webp`} 
                            onError={e => {
                                e.target.src = `${process.env.PUBLIC_URL + `/assets/images/items/${image}.png`}`
                            }}
                            alt= { name }
                        />
                    </li>
                )
            })}
        </ul>
    )
}
export default ItemsMap;