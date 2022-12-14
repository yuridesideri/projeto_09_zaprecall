import { useEffect, useState } from "react";
import styled from "styled-components";
import { decks } from "../assets/decks";
import logo from "../assets/img/logo.svg";

export default function Startscreen(props) {
	const [user, setUser] = useState("");
	const [page, setPage] = useState("first-page");
	useEffect(() => {
		if (user !== "") {
			setPage("second-page");
		}
	}, [user]);

	return (
		<>
			{page === "first-page" ? (
				<FirstPage setUser={setUser} />
			) : (
				<SecondPage
					setNumOfZ={props.setNumOfZ}
					decks={props.decks}
					setNumOfQ={props.setNumOfQ}
					setDeck={props.setDeck}
					user={user}
					startGame={props.setGameState}
				/>
			)}
		</>
	);
}

function FirstPage(props) {
	const [input, setInput] = useState("");

	function handleEvent(e){
		if (e.keyCode === 13)
		{
			props.setUser(input);
		}
	}
	
	return (
		<FirstPageBox>
			<img src={logo} alt="" />
			<p>ZapRecall</p>
			<input
				onKeyDown={handleEvent}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Type in your name"></input>
			<button onClick={(e) => props.setUser(input)}>Log In!</button>
		</FirstPageBox>
	);
}

function SecondPage(props) {
	const [deckInput, setDeckInput] = useState(0);
	const [questionsInput, setQuestionsInput] = useState(4);
	const [zapsInput, setZapsInput] = useState(0);
	return (
		<SecondPageBox>
			<p>Welcome, {props.user}!</p>
			<img src={logo} alt="" />
			<p>ZapRecall</p>
			<label>
				{" "}
				Choose a Deck:
				<select data-identifier="deck-selector" onChange={(e) => setDeckInput(e.target.value)} placeholder="Choose a deck">
					{props.decks.map((el, ind) => (
						<option data-identifier="deck-option" key={`Deck${ind}`} value={ind}>
							Deck {ind + 1}
						</option>
					))}
				</select>
			</label>
			<label className="questions">
				{" "}
				Number of Questions:
				<select
					onChange={(e) => setQuestionsInput(e.target.value)}
					placeholder="Choose a deck">
					{decks[deckInput].slice(3).map((el, ind) => (
						<option key={`Num${ind}`} value={ind + 4}>
							{ind + 4}
						</option>
					))}
				</select>
			</label>
			<label className="zaps">
				{" "}
				Number of Zapps:
				<select data-identifier="goals-input" onChange={(e) => setZapsInput(e.target.value)} placeholder="Choose a deck">
					{[...Array(parseInt(questionsInput))].map((el, ind) => (
						<option key={`Zap${ind}`} value={ind}>
							{ind + 1}
						</option>
					))}
				</select>
			</label>
			<button
                data-identifier="start-btn"
				onClick={(e) => {
					props.setDeck(decks[deckInput]);
					props.setNumOfQ(questionsInput);
					props.setNumOfZ(parseInt(zapsInput));
				}}>
				Start Recall!
			</button>
		</SecondPageBox>
	);
}

const FirstPageBox = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fb6b6b;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	img {
		width: 136px;
		height: 161px;
		margin-bottom: 50px;
	}
	p {
		width: 257px;
		height: 59px;
		font-family: "Righteous";
		font-weight: 400;
		font-size: 36px;
		line-height: 45px;
		text-align: center;
		letter-spacing: -0.012em;
		color: #ffffff;
	}
	input {
		margin-top: 20px;
		width: 246px;
		height: 34px;
		border: 1px solid #d70900;
		outline: none;
		border-radius: 4px;
		font-family: "Righteous";
		text-align: center;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		::placeholder {
			font-family: "Righteous";
			text-align: center;
		}
	}
	button {
		margin-top: 10px;
		width: 246px;
		height: 54px;
		background: #ffffff;
		border: 1px solid #d70900;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		border-radius: 5px;
		font-family: "Recursive";
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 22px;
		text-align: center;
		color: #d70900;
		margin-bottom: 25px;
	}
`;
const SecondPageBox = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fb6b6b;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	img {
		width: 136px;
		height: 161px;
		margin-bottom: 40px;
		margin-top: 30px;
	}
	p {
		width: 300px;
		height: 59px;
		font-family: "Righteous";
		font-weight: 400;
		font-size: 36px;
		line-height: 45px;
		text-align: center;
		letter-spacing: -0.012em;
		color: #ffffff;
	}
	label {
		color: white;
		font-family: "Righteous";
		select {
			margin-left: 10px;
			margin-top: 20px;
			width: 100px;
			height: 34px;
			border: 1px solid #d70900;
			outline: none;
			border-radius: 4px;
			font-family: "Righteous";
			text-align: center;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		}
	}
	.questions {
		select {
			width: 70px;
		}
	}

	.zaps {
		margin-bottom: 20px;
		select {
			width: 70px;
		}
	}

	button {
		margin-top: 10px;
		width: 246px;
		height: 54px;
		background: #ffffff;
		border: 1px solid #d70900;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		border-radius: 5px;
		font-family: "Recursive";
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 22px;
		text-align: center;
		color: #d70900;
		margin-bottom: 25px;
	}
`;
