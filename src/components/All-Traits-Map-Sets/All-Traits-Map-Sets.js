import React from 'react';
import './All-Traits-Map-Sets.css'

const AllTraitsMapSets = ({ sets, image}) => {
    return (
        <div className='All-Traits-List-Item-Sets'>
            <h6>Units: </h6>
            {sets.map( ({style, max, min}, key) => {
                    return (
                        <div 
                            key={ key } 
                            className='Trait-Set'
                        >
                            <div className='Trait-Set-Image'>
                                <img 
                                    src= {process.env.PUBLIC_URL + `/assets/images/traits/${style}.webp`} 
                                    alt={style}
                                    onError={e => {
                                        e.target.src = `${process.env.PUBLIC_URL + `/assets/images/traits/${style}.png`}`
                                    }}
                                />
                                <img 
                                    src= {process.env.PUBLIC_URL + `/assets/images/traits/${image}.svg`} 
                                    alt={image}
                                    onError={e => {
                                        e.target.src = `${process.env.PUBLIC_URL + `/assets/images/traits/${image}.png`}`
                                    }}
                                />
                            </div>
                            <p>{style}</p>
                            <p>{min}</p>
                        </div>
                    )
            })}
        </div>
    )
}

export default AllTraitsMapSets;


