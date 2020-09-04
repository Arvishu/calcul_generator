import React, { useState } from 'react';
import './MultiplicationTable.css';

import GameOver from '../../GameOver/GameOver.js'

function MultiplicationTable() {
    const [tableMultiplication, setTableMultiplication] = useState(2)
    const [nombreOperation, setNombreOperation] = useState(1);
    const [score, setScore] = useState(1);
    const [response, setResponse] = useState('');
    const [firstNumber, setFirstNumber] = useState(randomNumber(10));


    function randomNumber(number) {
        return Math.floor(Math.random() * number) + 1;
    };

    function setScoreAndOperation() {
        setScore(score + 1)
        setNombreOperation(nombreOperation + 1);
        setFirstNumber(randomNumber(10));
    }
    function unChangeScore() {
        setNombreOperation(nombreOperation + 1);
        setFirstNumber(randomNumber(10));
    }



    function handleClick(e) {
        e.preventDefault();
        setResponse(e.target.value)
        let mathResponse = Number(response)
        if (firstNumber * tableMultiplication === mathResponse) {
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
        setTableMultiplication(tableMultiplication + 1)
       
        setFirstNumber(randomNumber(10));

    }

    function handleClickMinus(e) {
        e.preventDefault();
        setTableMultiplication(tableMultiplication - 1)
       
        setFirstNumber(randomNumber(10));

    }

    function recommence(){
        setScore(1);
        setNombreOperation(1)
     }


     if (nombreOperation - score <= 4) {
    return (
        <div className="multiplicationContainer">
            <div>table de:</div>
            <div className="incrementMultiplication">
                <button className="buttonMoinsMulti" onClick={handleClickMinus} ></button>
                <div className ="tableMulti">{tableMultiplication}</div>
                <button className="buttonPlusMulti"  onClick={handleClickPlus}></button>
            </div>

            <div>
                <div>opération n° {nombreOperation}</div>
                <div>Score {score - 1}/{nombreOperation - 1}</div>


                <form className="formMultiContainerTwo">
                    <div>{firstNumber}x{tableMultiplication}</div>
                    <div className="inputMultiContainer">
                        <input className="inputMultiStyle" placeholder='='
                            value={response}
                            type="number"
                            onChange={onChangeResponse}

                        />
                    </div>

                    <div className="buttonMultiContainer">
                        <button className="operationMultiButton" title="validez votre réponse"
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

export default MultiplicationTable;