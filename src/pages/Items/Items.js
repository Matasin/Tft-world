import React, { useState, useEffect } from 'react';
import './Items.css'

import ItemsJson from '../../context/apiContext/items.json'

import ItemsMap from '../../components/Items-Map/Items-Map'
import ItemsCombinedMapComponent from '../../components/Items-Combined-Map-Component/Items-Combined-Map-Component'
import ItemsCombinedMapWhole from '../../components/Items-Combined-Map-Whole/Items-Combined-Map-Whole'

const Items = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);

    const [ itemId, setItemID ] = useState(1);

    useEffect(() => {
        const results = ItemsJson.filter( ({name}) => (
            name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        setSearchResults(results);
    }, [searchTerm])

    const handleChange = ( event ) => setSearchTerm(event.target.value);

    return (
        <div className='Items-Container'>
            <div className='Items-Left'>
                <div className='Items-Left-Components'>
                    <input
                        type='text'
                        placeholder='Search for an item...'
                        value= { searchTerm }
                        onChange= { handleChange }
                    />
                    <p>Components items:</p>
                    {searchResults.length === 0 ? 
                        <h6 style={{textAlign: 'center'}}>Did search items</h6> 
                        :
                        <ItemsMap 
                            items= { searchResults }
                            scope = { 10 }
                            setItemID= { setItemID }
                        />
                    }
                </div>
                <div className='Items-Left-Whole'>
                    <p>Whole items:</p>
                    {searchResults.length === 0 ? 
                        <h6 style={{textAlign: 'center'}}>Did search items</h6> 
                        :
                        <ItemsMap 
                            items= { searchResults }
                            scope = { 'WHOLE' }
                            setItemID= { setItemID }
                        />
                    }
                </div>
            </div>


            <div className='Items-Right'>
                <p>Items-Combined</p>
                {searchResults.length === 0 ? 
                    <h6 style={{textAlign: 'center'}}>Did search items</h6> 
                    :
                        itemId <= 10 ?
                        <ItemsCombinedMapComponent
                            ItemsJson= { ItemsJson }
                            itemId= { itemId }
                        />
                        :
                        <ItemsCombinedMapWhole
                            ItemsJson= { ItemsJson }
                            itemId= { itemId }
                        />
                }
            </div>
        </div>
    )
}

export default Items;

