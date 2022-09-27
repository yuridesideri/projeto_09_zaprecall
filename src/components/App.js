import { useState } from "react"
import Startscreen from "./Startscreen"
import Endgame from './Endgame';
import Ingame from './Ingame'

export default function App(){
    const [gameState, setGameState] = useState('startGame');

    return(
    <>
        {gameState === 'startGame'? <Startscreen/> : <Ingame />}
        {gameState === 'endGame' ? <Endgame /> : <></>}       
    </>
    )
}
