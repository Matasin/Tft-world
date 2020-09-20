import React from 'react';
import './Champion-Card.css'

import { Link } from 'react-router-dom'
import TraitCard from '../Trait-Card/Trait-Card'
import ItemCard from '../Item-Card/Item-Card'

const ChampionCard = ({ cost, name }) => {
    const image = name.replace(/ /g, '');
    return (
        <Link
            className='Champion-Card'
            to={`/champions/${name}`}
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
                        <ItemCard
                            image={15}
                        />
                        <ItemCard
                            image={99}
                        />
                        <ItemCard
                            image={22}
                        />
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

