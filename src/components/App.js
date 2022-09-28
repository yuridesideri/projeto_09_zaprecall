import { useEffect, useState } from "react";
import Startscreen from "./Startscreen";
import Endgame from "./Endgame";
import Ingame from "./Ingame";
import { decks } from "../assets/decks.js";

export default function App() {
	const [gameState, setGameState] = useState("startGame");
	const [deck, setDeck] = useState(null);
    const [cards, setCards] = useState(null);
	const [numOfQ, setNumOfQ] = useState(0);
	const [numOfZ, setNumOfZ] = useState(0);

	useEffect(() => {
		console.log(deck);
		console.log(numOfQ);
		if (deck && numOfQ >= 4 && numOfQ <= 8) {
			setGameState("inGame");
		}
	}, [deck, numOfQ]);

    useEffect(()=>{
        if (deck && deck.length !== parseInt(numOfQ)){
            const cloneDeck = [...deck];
            console.log(cloneDeck);
            for(let i = 0; i < deck.length - numOfQ; i++){
                const index = Math.floor(Math.random()* cloneDeck);
                cloneDeck.splice(index, 1);
            }
            setCards(cloneDeck);
        }
    },[numOfQ, deck]);

	return (
		<>
			{gameState === "startGame" ? (
				<Startscreen
					numOfZ={numOfZ}
					setNumOfZ={setNumOfZ}
					setNumOfQ={setNumOfQ}
					setGameState={setGameState}
					decks={decks}
					setDeck={setDeck}/>
			) : (
				<Ingame cards={cards} />
			)}
			{gameState === "endGame" ? <Endgame /> : <></>}
		</>
	);
}
