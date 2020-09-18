import React, { useState, useEffect } from 'react';
import './Champion-Detail.css'

import JsonChampions from '../../context/apiContext/champions.json'

import ChampionCard from '../../components/Champion-Card/Champion-Card'
import TraitDescripionMap from '../../components/Trait-Description-Map/Trait-Description-Map'
import SynergyMap from '../../components/Synergy-Map/Synergy-Map'

import DidNotMatch from '../../components/Did-Not-Match/Did-Not-Match'

const ChampionDetail = ( {match} ) => {
    const [ champion, setChampion ] = useState({
        championId: undefined,
        name: '',
        cost: '',
        traits: [],
    });
    const { name, cost, traits } = champion;
    useEffect(() => {
        JsonChampions.map( champion => champion.name === match.params.id && setChampion(champion))
    })
    if(champion.championId === undefined) return <DidNotMatch header='Did not match data' paragraph='Check url is correct or go to ' goTo='champions'/>
    return (
        <div className='Champion-Detail-Container'>
            <div className='Champion-Detail-Left'>
                <ChampionCard
                    cost= { cost }
                    name= {`${name}`}
                />
                <div className='Champion-Detail-Left-Stats'>
                    <h5>Stats: </h5>
                    <p>Cost: {cost}</p>
                </div>
            </div>
            <div className='Champion-Detail-Right'>

                <div className='Champion-Detail-Right-Up'>
                    <TraitDescripionMap targetTraits= { traits } />
                </div>

                <div className='Champion-Detail-Right-Down'>
                    <h5>Synergy with: </h5>
                    {traits.map( (trait, key) => {
                        // I added key bcs it start from 0 and its good solution
                        return (
                            <SynergyMap 
                                key= { key }
                                JsonChampions= { JsonChampions } 
                                targetName= { name }

                                // index= { key } 
                                targetTrait= { trait } 
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChampionDetail;

