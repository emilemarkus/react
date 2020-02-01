import React  from 'react';
import PropTypes from 'prop-types';
import './CardsObj.css';

const CardsObj = ({picture,title,text}) => (
    <div className="card-item">
        <div className="card-img">
            <div className="img-frame">
                <img src={picture} alt="presentation" />
            </div>
        </div>
        <div className="card-title">
            <p>{title}</p>
        </div>
        <div className="card-text">
            <p>{text}</p>
        </div>
    </div>
);

CardsObj.propTypes = {
    title : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
}

export default CardsObj;