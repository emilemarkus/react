import React, { Fragment } from 'react';
import './Shop.css';
import Txtsection from '../../components/Txtsection/Txtsection';
import { txtcontent } from '../../constants';
/* IMPORT PICTURE */
import sectionImage from '../../media/wood-restaurant.png'
const About = () => {
    return (
        <Fragment>
            <div className="section-text section-container">
                <Txtsection
                    title={txtcontent.shop.title}
                    content={txtcontent.shop.content}
                    labelink={txtcontent.shop.labelink}
                />
            </div>
            <div className="section-img section-container">
                <div className="section-img-shop-container">
                    <img src={sectionImage} alt="chaise" />
                </div>
            </div>
        </Fragment>
    )
}
export default About;