import React from 'react';
import './Jumbotron.css';

const Jumbotron = ({title}) => {
    return(        
        <div className="jumbotron">
            <span className='jumbo'>{title}</span>
        </div>

    )
}

export default Jumbotron;