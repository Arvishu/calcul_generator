import React, { useState } from 'react';

import GameOver from '../../GameOver/GameOver.js'

import './DivisionTable.css';




function DivisionTable() {
    const [tableDivision, setTableDivision] = useState(2)
    const [nombreOperation, setNombreOperation] = useState(1);
    const [score, setScore] = useState(1);
    const [response, setResponse] = useState('');
    const [firstNumber, setFirstNumber] = useState(randomNumber(10) * tableDivision);



    function randomNumber(number) {
        return Math.floor(Math.random() * number) + 1;
    };

    function setScoreAndOperation() {
        setScore(score + 1)
        setNombreOperation(nombreOperation + 1);
        setFirstNumber((randomNumber(10) * tableDivision));


    }
    function unChangeScore() {
        setNombreOperation(nombreOperation + 1);
        setFirstNumber((randomNumber(10) * tableDivision));
    }



    function handleClick(e) {
        e.preventDefault();
        setResponse(e.target.value)
        let mathResponse = Number(response)
        if (firstNumber / tableDivision === mathResponse) {
            setScoreAndOperation()



        } else {
            unChangeScore()



        }
    }

    function onChangeResponse(e) {
        e.preventDefault();
        setResponse(e.target.value)


    }


    function handleClickPlus(e) {
        e.preventDefault();
        setTableDivision(tableDivision =>tableDivision + 1)
        let newNumber = tableDivision + 1;

        setFirstNumber(randomNumber(10) * newNumber);

    }

    function handleClickMinus(e) {
        e.preventDefault();
        setTableDivision(tableDivision =>tableDivision - 1)
        let newNumber = tableDivision - 1;

        setFirstNumber(randomNumber(10) * newNumber);

    }

function recommence(){
   setScore(1);
   setNombreOperation(1)
}


    if (nombreOperation - score <= 4) {
        return (
            <div className='divisionContainer'>
                <div>table de:</div>
                <div className="incrementDivision">
                    <button className="buttonMoinsDivision" onClick={handleClickMinus}></button>
                    <div className="tableDivision">{tableDivision}</div>
                    <button className="buttonPlusDivision" onClick={handleClickPlus} ></button>
                </div>
                <div>
                    <div>opération n° {nombreOperation}</div>
                    <div>Score {score - 1}/{nombreOperation - 1}</div>


                    <form className="formDivisionContainerTwo">
                        <div>{firstNumber}/{tableDivision} </div>
                        <div className="inputDivisionContainer">
                            <input className="inputDivisionStyle" placeholder='='
                                value={response}
                                type="number"
                                onChange={onChangeResponse}


                            />
                        </div >
                        <div className="buttonDivisionContainer">
                            <button className="operationDivisionButton" title="validez votre réponse"
                                onClick={handleClick}></button>
                        </div>
                    </form>
                </div>
           
            </div>
        )

    } else {
        return (<GameOver score={score - 1}
            recommence = {recommence}
           />)
    }
}



export default DivisionTable;  
