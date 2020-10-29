import React from 'react';
import ChampionCard from '../../components/Champion-Card/Champion-Card'
import LazyImage from '../../lazy-image'


const SynergyMap = ({ JsonChampions, targetName, targetTrait }) => {
    return (
        <div className='Champion-Detail-Right-Down-Synergy'>
            <div className='Champion-Detail-Right-Down-Synergy-Trait-Image'>
                <LazyImage
                    src={process.env.PUBLIC_URL + `/assets/images/traits/${targetTrait.toLowerCase()}.svg`}
                    alt={targetTrait}
                />
            </div>
            <div className='Champion-Detail-Right-Down-Synergy-Champion-Card-Container'>
                {JsonChampions.map(({ championId, name, cost, traits }) => {
                    return (
                        traits.map(trait => {
                            if (name === targetName) return false;
                            return (
                                trait === targetTrait &&
                                <ChampionCard
                                    key={championId}
                                    name={`${name}`}
                                    cost={cost}
                                />
                            )
                        })
                    )
                })}
            </div>
        </div>
    )
}

export default SynergyMap;

