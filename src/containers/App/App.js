import React from 'react';

import './App.css';
import logo from "../../media/logo_Becode.png";
import { thecards } from '../../constants/';
import CardsObj from '../../components/CardsObj';

console.log(thecards);

function App() {
    return (
        <main> 
            <header>
                <img src={logo} alt=""/>
                <h1>
                    Bienvenue chez BeCode. La nouvelle formation en horaire de jour pour apprendre les technologies numériques. Gratuitement.
                </h1>
            </header>

            <div className="listof">
                {thecards.map((cards,index)=>(
                    <CardsObj
                        key={index}
                        {...cards}
                    />
                ))}
            </div>

        </main>
    )
}

export default App;