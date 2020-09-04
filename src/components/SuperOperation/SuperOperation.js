import React, { useState } from 'react';
import './SuperOperation.css'

import GameOver from '../../components/GameOver/GameOver.js'

function SuperOperation(props) {


    const [nombreOperation, setNombreOperation] = useState(1);
    const [score, setScore] = useState(1);
    const [response, setResponse] = useState('');
    const [firstNumber, setFirstNumber] = useState(randomNumber(props.limit));
    const [secondNumber, setSecondNumber] = useState(randomNumber(props.limit));

    function randomNumber(number) {
        return Math.floor(Math.random() * number) + 1;
    };
    function randomOperation(firstNumber, secondNumber) {
        if (firstNumber < secondNumber) {
            return (secondNumber + props.operator + firstNumber)
        }
        return (firstNumber + props.operator + secondNumber)
    }

    function setScoreAndOperation() {
        setScore(score + 1)
        setNombreOperation(nombreOperation + 1);
        setFirstNumber(randomNumber(props.limit));
        setSecondNumber(randomNumber(props.limit));
    }

    function unChangeScore() {
        setNombreOperation(nombreOperation + 1);
        setFirstNumber(randomNumber(props.limit));
        setSecondNumber(randomNumber(props.limit));
    }
    function handleClick(e) {
        e.preventDefault();
        setResponse(e.target.value)
        let operator = props.operator

        let mathResponse = Number(response)

        if (operator === '+' && firstNumber + secondNumber === mathResponse) {
            setScoreAndOperation()
        } else if (operator === '-') {
            if (firstNumber - secondNumber === mathResponse || secondNumber - firstNumber === mathResponse) {
                setScoreAndOperation()
            } else {
                unChangeScore()

            }


        } else if (operator === 'x' && firstNumber * secondNumber === mathResponse) {
            setScoreAndOperation()

        } else {
            unChangeScore()
        }




    }
    function onChange(e) {
        e.preventDefault();
        setResponse(e.target.value)

    }
    function recommence() {
        setScore(1);
        setNombreOperation(1)
    }

    if (nombreOperation - score <= 4) {
        return (

            <div className="operationContainer">
                <div className="titleContainer">{props.title}

                    <div>opération n° {nombreOperation}</div>


                    <div>Score {score - 1}/{nombreOperation - 1}</div>
                </div>
                <form className="formContainer">
                    <div className="calculContainer">{randomOperation(firstNumber, secondNumber, props.operator)}
                        <div className="inputContainer">
                            <input className="inputStyle" placeholder='='
                                value={response}
                                type="number"
                                onChange={onChange}
                            />
                        </div>

                        <div className="buttonContainer">

                            <button className="operationButton"
                                type="submit"
                                title="validez votre réponse"
                                onClick={handleClick}>

                            </button>
                        </div>
                    </div>
                </form>

            </div>
        )
    } else {
        return (<GameOver score={score - 1}
            recommence={recommence}
        />)
    }
}

export default SuperOperation;