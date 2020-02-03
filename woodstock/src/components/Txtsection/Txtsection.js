import React, { Fragment } from 'react';
import Btnsection from '../Btnsection/Btnsection';

const Txtsection = ({title,content,labelink}) =>{
    return(
        <Fragment>
            <p className="section-title">{title}</p>
            <p className="section-content">
                {content}
            </p>
            <Btnsection text={labelink} />
        </Fragment>
    )
}

export default Txtsection;