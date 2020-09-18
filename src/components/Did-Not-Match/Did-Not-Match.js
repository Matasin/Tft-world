import React from 'react';
import './Did-Not-Match.css'

import { Link } from 'react-router-dom'


const DidNotMatch = ( { header, paragraph, goTo } ) => {
    return (
        <div className='Did-Not-Match-Container'>
            <h3> {header} </h3>
            <p> 
                {paragraph} 
                <Link to={`/${goTo}`}> 
                    {goTo} 
                </Link>
            </p>
        </div>
    )
}

export default DidNotMatch;

