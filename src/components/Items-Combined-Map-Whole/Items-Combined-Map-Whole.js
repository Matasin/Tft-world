import React from 'react'
import './Items-Combined-Map-Whole.css'

const ItemsCombinedMapWhole = ( {ItemsJson, itemId} ) => {
    return (
        <ul className='Items-Combined-Map-Whole-Container'>
            {ItemsJson.map( ({id, name, stats, description, recipe}) => {
                const image = id < 10 ? `0${id}` : id;
                if(id !== itemId) return false;
                return (
                    <li 
                        key={id}
                        className='Items-Combined-Map-Whole-Item'
                    >
                        {recipe.map( (id, fakeIndex) => {
                            // fakeIndex bcs some items are built with the same item
                            return (
                                <div 
                                    key= {fakeIndex}
                                    className='Items-Combined-Map-Whole-Item-Components'
                                >
                                    <img 
                                        src= { process.env.PUBLIC_URL + `/assets/images/items/0${id}.webp`} 
                                        onError={e => {
                                            e.target.src = `${process.env.PUBLIC_URL + `/assets/images/items/0${id}.png`}`
                                        }}
                                        alt=''
                                    />
                                    {recipe[1] ? <div>=</div> : <div>+</div>}
                                </div>
                            )
                        })}
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
export default ItemsCombinedMapWhole;