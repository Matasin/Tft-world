import React, { useState, useEffect } from 'react';
import './Champions.css'

import ChampionCard from '../../components/Champion-Card/Champion-Card'
import JsonChampions from '../../context/apiContext/champions.json'

const Champions = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);

    useEffect(() => {
        const results = JsonChampions.filter( ({name}) => (
            name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        setSearchResults(results);
    }, [searchTerm])

    const handleChange = ( event ) => setSearchTerm(event.target.value);

    return (
        <div className='Champions-Container'>
            <input 
                type='text' 
                placeholder='Search for an champion...' 
                value= { searchTerm }
                onChange= { handleChange }
            />
            {searchResults.length === 0 ? 
                <h5 style={{textAlign: 'center'}}>Did not match data</h5> 
                : 
                searchResults.map( ({championId, cost, name, traits}) => {
                    return (
                        <ChampionCard
                            key= { championId }
                            cost= { cost }
                            name= { name }
                            traits= { traits }
                        />
                    )
                })
            }
        </div>
    )
}

export default Champions;



