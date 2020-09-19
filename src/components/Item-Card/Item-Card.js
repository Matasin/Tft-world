import React, { useState, useEffect } from 'react'
import ItemsJson from '../../context/apiContext/items.json'

const ItemCard = ({ image, imageOnError, itemId }) => {
    const [ item, setItem ] = useState({
        name: '',
        stats: '',
        description: '',
    });
    const { name, stats, description } = item;

    useEffect(() => {
        ItemsJson.filter( item => item.id === itemId && setItem(item));
    })

    return (
        <>
            <div className='Tool-Tip'>
                <p> {name} </p>
                <p> {stats} </p>
                <p> {description} </p>
            </div>
            <img
                src={process.env.PUBLIC_URL + `/assets/images/items/${image}.webp`}
                onError={e => {
                    e.target.src = `${process.env.PUBLIC_URL + `/assets/images/items/${imageOnError}.png`}`
                }}
                alt={name}
            />
        </>
    )
}
export default ItemCard