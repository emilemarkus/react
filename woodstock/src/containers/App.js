import React, { Fragment } from 'react';
import './App.css';
import { menuitems } from '../constants/';
import Navbar from '../components/Navbar/Navbar';
import About from './About/About';
import Shop from './Shop/Shop';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


/* import image */
import wood from '../media/WOOD.png';   
import woodstock from'../media/WOODSTOCK.png'


const App = () => {
    return (
        <Fragment>
            <nav>
                <ul className="navbar">
                    <li className="nav-item"><img src={wood} alt="woodlogo" /></li>
                    {menuitems.map((item, index) => (
                        <Navbar
                            key={index}
                            {...item}
                        />
                    ))}
                </ul>
            </nav>
            <header>
                <div className="background-header">
                </div>        
                <img src={woodstock} alt="woodstock" />     
            </header>
            <div className="about-section">
                <About />
            </div>            
            <div className="shop-section">
                <Shop />
            </div>
            <div className="team-section">
                <Team />
            </div>
            <div className="contact-section">
                <Contact />
            </div>
            <div className="footer-section">
                <Footer 
                />

            </div>

            
            
        </Fragment>
    )
}



export default App;