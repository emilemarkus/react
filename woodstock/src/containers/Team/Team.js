import React, { Fragment } from 'react';
import './Team.css';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import backimage from '../../media/image.png';
import {txtcontent} from '../../constants/';
import Txtsection from '../../components/Txtsection/Txtsection';

const Shop = () => {

    return (
        <Fragment>
            <div className="back-team">
                <img src={backimage} alt="back" />
            </div>
            <div className="team-container">
                <Jumbotron title="CREATIVE TEAM" />
                <div className="section-text section-container">
                    <Txtsection
                        title={txtcontent.team.title}
                        content={txtcontent.team.content}
                        labelink={txtcontent.team.labelink}
                    />
                </div>
            </div>


        </Fragment>
    )

}

export default Shop;