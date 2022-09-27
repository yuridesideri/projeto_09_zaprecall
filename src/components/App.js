import { useEffect, useState } from "react"
import Startscreen from "./Startscreen"
import Endgame from './Endgame';
import Ingame from './Ingame'
import { decks } from '../assets/decks.js'

export default function App(){
    const [gameState, setGameState] = useState('startGame');
    const [deck, setDeck] = useState({});

    return(
    <>
        {gameState === 'startGame'? <Startscreen setGameState={setGameState} decks={decks} setDeck={setDeck}/> : <Ingame />}
        {gameState === 'endGame' ? <Endgame /> : <></>}       
    </>
    )
}
