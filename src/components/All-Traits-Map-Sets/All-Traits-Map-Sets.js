import React from 'react';
import './All-Traits-Map-Sets.css'
import LazyImage from '../../lazy-image'

const AllTraitsMapSets = ({ sets, image }) => {
    return (
        <div className='All-Traits-List-Item-Sets'>
            <h6>Units: </h6>
            {sets.map( ({style, min}, key) => {
                    return (
                        <div 
                            key={ key } 
                            className='Trait-Set'
                        >
                            <div className='Trait-Set-Image'>
                                <LazyImage 
                                    src= {process.env.PUBLIC_URL + `/assets/images/traits/${style}.png`} 
                                    alt={style}
                                />
                                <LazyImage 
                                    src= {process.env.PUBLIC_URL + `/assets/images/traits/${image.toLowerCase()}.svg`} 
                                    alt={image}
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


