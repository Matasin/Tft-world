import React, { useState, useEffect } from 'react';
import './Champion-Card.css'

import { Link } from 'react-router-dom'
import TraitCard from '../Trait-Card/Trait-Card'
import ItemCard from '../Item-Card/Item-Card'

import ChampionsJson from '../../context/apiContext/champions.json'

const ChampionCard = ({ cost, name }) => {
    const image = name.replace(/ /g, '');

    const [items, setItems] = useState([]);
    useEffect(() => {
        ChampionsJson.filter(champion => champion.name === name && setItems(champion.recommended_items));
    })

    return (
        <Link
            className='Champion-Card'
            to={`/champions/${name.toLowerCase()}`}
        >

            <div className='Tool-Tip'>

                <div className='Tool-Tip__Up'>
                    <div className='Tool-Tip__Champion'>
                        <img
                            src={process.env.PUBLIC_URL + `/assets/images/champions/TFT4_${image}.webp`}
                            onError={e => {
                                e.target.src = `${process.env.PUBLIC_URL + `/assets/images/champions/TFT4_${image}.png`}`
                            }}
                            alt={name}
                            className={`Cost${cost}`}
                        />
                        <p> {name} </p>
                    </div>
                    <div className='Tool-Tip__Traits'>
                        <TraitCard
                            name={name}
                        />
                    </div>
                    <div className='Tool-Tip__Cost'>
                        <img
                            src={process.env.PUBLIC_URL + `/assets/images/content/icon-gold.svg`}
                            alt=''
                        />
                        <p> {cost} </p>
                    </div>
                </div>

                <div className='Tool-Tip__Down'>
                    <div className='Tool-Tip__Items'>
                        <p>Items: </p>
                        {items.map((item, index) => {
                            return (
                                <ItemCard
                                    key={index}
                                    image={item}
                                    imageOnError={item.split("").reverse().join("")}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

            <img
                src={process.env.PUBLIC_URL + `/assets/images/champions/TFT4_${image}.webp`}
                onError={e => {
                    e.target.src = `${process.env.PUBLIC_URL + `/assets/images/champions/TFT4_${image}.png`}`
                }}
                alt={name}
                className={`Cost${cost}`}
            />

            <p>{name}</p>
        </Link>
    );
};

export default ChampionCard;

