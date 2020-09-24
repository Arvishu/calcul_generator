import React from 'react';


import './GameOver.css';


export default function GameOver(props) {

  const { score, recommence } = props


  function displayScore() {
    if (score <= 5)
      return (<div>
        <p>Ton score est de  {score}  points.</p>
        <h3>Niveau :"Indiana SCROUTCH"<br />Statut:"Dévoré par des bébés jaguars" </h3>

        <p> "explorateur" ayant eu peur d'un Toucan. il a glissé sur une limace et c'est cassé les deux jambes.</p>
      </div>)
    else if (score >= 5 && score <= 10)
      return (
        <div>
          <p>Ton score est de  {score}  points.</p>
          <h3>Niveau :"Lara SPLOFF"<br />Statut:"Dévorée par un vieux  jaguar sans dents" </h3>

          <p> "exploratrice" n'ayant pas fait ses lacets, elle est tombé la tête la première dans une bouse de Pekari.</p>
        </div>)
    else if (score >= 10 && score <= 15)
      return (
        <div>
          <p>Ton score est de  {score}  points.</p>
          <h3>Niveau :"Benjamin STEAK"<br />Statut:"Dévoré par des fourmis rouges" </h3>

          <p> "explorateur" n'ayant pas vérifié où il montait sa tente.</p>
        </div>)
    else if (score >= 15 && score <= 25)
      return (
        <div>
          <p>Ton score est de  {score}  points.</p>
          <h3>Niveau :"Nathan Drake"<br />Statut:"explorateur reconnu" </h3>

          <p> "EXPLORATEUR" qui aurait découvert l'Eldorado et la pierre de Chintamani...</p>
        </div>)
    else if (score >= 25 && score <= 50)
      return (
        <div>
          <p>Ton score est de  {score}  points.</p>
          <h3>Niveau :"Lara Croft"<br />Statut:"exploratrice legendaire" </h3>

          <p> "EXPLORATRICE" ayant decouvert de nombreux Artefacts légendaires</p>
        </div>)
    else if (score >= 50 && score <= 100)
      return (
        <div>
          <p>Ton score est de  {score}  points.</p>
          <h3>Niveau :"Indiana Jones"<br />Statut:"explorateur legendaire" </h3>

          <p> "EXPLORATEUR" ayant decouvert de nombreux Artefacts légendaires et sauvé le monde plusieurs fois.</p>
        </div>)
    else
      return (
        <div>
          <p>Ton score est de  {score}  points.</p>
          <h3>Niveau :"l'élève dépasse le Maitre "<br />Statut:"futur(e) explorateur ou exploratrice de Légende" </h3>

          <p> "EXPLORATEUR" ayant decouvert de nombreux Artefacts légendaires et sauvé le monde plusieurs fois.</p>
        </div>)



  }
  return (
    <div className="gameOverContainer">
      <div>


        {displayScore()}

        <div>
          <button className="buttonReturn" onClick={recommence}>
            <p>Retourne dans la Jungle !!!</p>
          </button>
        </div>
      </div>
    </div>
  )
}
