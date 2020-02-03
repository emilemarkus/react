import React, { Fragment } from 'react';
import './About.css';
import Txtsection from '../../components/Txtsection/Txtsection';
import { txtcontent } from '../../constants';
/* IMPORT PICTURE */
import sectionImage from '../../media/image 2.1.png'
const About = () => {
    return (
        <Fragment>
            <div className="section-img section-container">
                <div className="section-img-container">
                    <img src={sectionImage} alt="chaise" />
                </div>
            </div>
            <div className="section-text section-container">
                <Txtsection
                    title={txtcontent.about.title}
                    content={txtcontent.about.content}
                    labelink={txtcontent.about.labelink}
                />
            </div>
        </Fragment>
    )
}
export default About;