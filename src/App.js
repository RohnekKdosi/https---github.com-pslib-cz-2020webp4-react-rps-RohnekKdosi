import React, {useState} from "react";
import './App.css';
import Selector, {SelectorInner} from "./components/Selector";
import CountSelector, {CountSelectorInner} from "./components/CountSelector";
import Play, {PlayInner} from "./components/Play";
//import { Button } from "bootstrap";

function App() {
  const [selection, setSelection] = useState(0);
  const [games, setGames] = useState(5);
  const [score, setScore] = useState([0,0]);
  const [message, setMessage] = useState("");
  const [isGO, setIsGO] = useState(false);
  
  if(!isGO)
  return (
      <div className="App">
        <h1 aria-setsize className="heading">RPSLS WITH THE DEVIL</h1>
        <h3 className="heading">Play for your soul, mortal</h3>
        <br/>
        <br/>
        <CountSelector value={games} setValue={setGames} />
        <br/>
        <br/>
        <Selector value={selection} setValue={setSelection}/>
        <br/>
        <br/>
        <Play score={score} setScore={setScore} player={selection} games={games} setMessage={setMessage} message={message} isGO={isGO} setIsGO={setIsGO}/>
      </div>
  );
  let winner;
  if(score[0] > score[1])
    winner = "You";
  else
    winner = "The Devil";
  return (
    <div className="App">
      <h1 aria-setsize className="heading">RPSLS WITH THE DEVIL</h1>
      <h3 className="heading">Play for your soul, mortal</h3>
      <br/>
      <br/>
      <span className="message">{winner} won</span>
    </div>
);
}

export default App;
