import React from 'react';

import DivisionTable from './../Division/DivisionTable/DivisionTable.js'

import './GameOver.css';


function GameOver(props) {
   
    const {score,recommence} = props


    function displayScore() {
        if (score ===0) {
            return (`Ton score est de  ${score}  point. Tu dois persévérer.`)
        } else {
            return (`Ton score est de  ${score}  points.`)
        }
    }
    return (
        <div className="gameOverContainer">

            <div >Game Over</div>
            {displayScore()}
       
        <div>
            <button onClick ={recommence}>Booom</button>
        </div> 
        </div>
    )
}
export default GameOver;