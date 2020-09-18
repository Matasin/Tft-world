import React from 'react';
import ChampionCard from '../../components/Champion-Card/Champion-Card'

const SynergyMap = ({ JsonChampions, targetName, targetTrait }) => {
    return (
        <div className='Champion-Detail-Right-Down-Synergy'>
            <p>{targetTrait}</p>
            {JsonChampions.map( ({championId, name, cost, traits}) => {
                return (
                    traits.map(trait => {
                        if(name === targetName) return false;
                        return (
                            trait === targetTrait &&
                            <ChampionCard 
                                key= { championId }
                                name= { `${name}` }
                                cost= { cost }
                            /> 
                        )
                    })
                )
            })}
        </div>
    )
}

export default SynergyMap;

