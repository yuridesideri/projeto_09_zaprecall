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
	const [numOfRightAnswers, setNumOfRightAnswers] = useState(0);
	const [questionsArr, setQuestionsArr] = useState(null)

	useEffect(() => {
		if (deck && numOfQ >= 4 && numOfQ <= 8) {
			setGameState("inGame");
		}
	}, [deck, numOfQ]);

	useEffect(() => {
		if (deck && deck.length >= parseInt(numOfQ)) {
			const cloneDeck = [...deck];
			for (let i = 0; i < 10; i++)
			{
				const ind = Math.floor(Math.random() * cloneDeck.length);
				const tmp = cloneDeck[0];
				cloneDeck[0] = cloneDeck[ind];
				cloneDeck[ind] = tmp;
			}
			for (let i = 0; i < deck.length - parseInt(numOfQ); i++) {
				const index = Math.floor(Math.random() * cloneDeck.length);
				cloneDeck.splice(index, 1);
			}
			setCards(cloneDeck);
		}
	}, [numOfQ, deck]); //Está gerando sempre as mesmas perguntas

	useEffect(() => {
		if (cards !== null){
			setQuestionsArr([...Array(cards.length)]);
		}
	},[cards])

	return (
		<>
			{gameState === "startGame" ? (
				<Startscreen
					numOfZ={numOfZ}
					setNumOfZ={setNumOfZ}
					setNumOfQ={setNumOfQ}
					setGameState={setGameState}
					decks={decks}
					setDeck={setDeck}
				/>
			) : (
				<Ingame questionsArr={questionsArr} setQuestionsArr={setQuestionsArr} cards={cards} setNumOfRightAnswers={setNumOfRightAnswers} setGameState={setGameState}/>
			)}
			{gameState === "endGame" ? <Endgame numOfZ={numOfZ} numOfQ={numOfQ} numOfRightAnswers={numOfRightAnswers} /> : <></>}
		</>
	);
}
