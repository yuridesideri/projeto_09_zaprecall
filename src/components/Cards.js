import { useState } from "react";
import styled from "styled-components";
import { BsPlay } from "react-icons/bs";
import LoopArrow from "../assets/img/setinha.svg";

export default function Cards(props) {
	const { cardNumber, cardObject, setNumOfRightAnswers, setCompleted, setQuestionsArr, questionsArr } = props; // 0 notation

	const [cardState, setCardState] = useState("loaded");

	return (
		<>
			{cardState === "loaded" ? (
				<LoadedCard setCardState={setCardState} cardNumber={cardNumber} />
			) : cardState === "flipped" ? (
				<FlippedCard
					setCardState={setCardState}
					question={cardObject.q}
				/>
			) : cardState === "flippedAnswered" ? (
				<FlippedCardAnswered questionsArr={questionsArr} cardNumber={cardNumber} setNumOfRightAnswers={setNumOfRightAnswers} setCompleted={setCompleted} setCardState={setCardState} answer={cardObject.a} setQuestionsArr={setQuestionsArr}/>
			) : cardState === "answered" ? (
				<AnsweredCard questionsArr={questionsArr} cardNumber={cardNumber} />
			) : null}
		</>
	);
}

function LoadedCard(props) {
	return (
		<LoadedCardComponent>
			<p>Question {props.cardNumber + 1}</p>
			<BsPlay onClick={(e) => props.setCardState("flipped")}></BsPlay>
		</LoadedCardComponent>
	);
}
const LoadedCardComponent = styled.div`
	width: 300px;
	height: 65px;
	background-color: white;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex !important;
	flex-direction: row !important;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	box-sizing: border-box;
	font-size: 35px;
	p {
		font-family: "Recursive";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 19px;
		color: #333333;
	}
`;

function FlippedCard(props) {
	return (
		<FlippedCardComponent>
			<p>{props.question}</p>
			<div>
				<img
					onClick={(e) => props.setCardState("flippedAnswered")}
					src={LoopArrow}
					alt=""
				/>
			</div>
		</FlippedCardComponent>
	);
}
const FlippedCardComponent = styled.div`
	width: 300px;
	min-height: 131px;
	background-color: #ffffd5;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex !important;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	box-sizing: border-box;
	p {
		width: 100%;
		font-family: "Recursive";
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
	}
	div {
		width: 100%;
		display: flex !important;
		flex-direction: row !important;
		justify-content: flex-end !important;
		img {
			width: 28px;
		}
	}
`;

function FlippedCardAnswered(props) {



	return (
		<FlippedCardAnsweredComponent>
			<p>{props.answer}</p>
			<div>
				<button
					onClick={() => {
                        props.setCompleted(old => old + 1);
                        props.setQuestionsArr(old => {
                            const [...newArr] = props.questionsArr;
                            newArr.splice(props.cardNumber, 1, 'wrong');
                            return newArr})
						props.setCardState("answered");
					}}
					className="forgot-button">
					Forgot
				</button>
				<button
					onClick={() => {
                        props.setCompleted(old => old + 1);
                        props.setQuestionsArr(old => {
                            const [...newArr] = props.questionsArr;
                            newArr.splice(props.cardNumber, 1, 'doubt');
                            return newArr})
						props.setCardState("answered");
					}}
					className="almost-button">
					Almost forgot!
				</button>
				<button
					onClick={() => {
                        props.setCompleted(old => old + 1);
						props.setNumOfRightAnswers(old => old + 1);
                        props.setQuestionsArr(old => {
                            const [...newArr] = props.questionsArr;
                            newArr.splice(props.cardNumber, 1, 'right');
                            return newArr})
						props.setCardState("answered");
					}}
					className="remembered-button">
					Zap!
				</button>
			</div>
		</FlippedCardAnsweredComponent>
	);
}
const FlippedCardAnsweredComponent = styled.div`
	width: 300px;
	min-height: 131px;
	background-color: #ffffd5;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex !important;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	box-sizing: border-box;
	p {
		width: 100%;
		font-family: "Recursive";
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
	}
	div {
		margin-top: 25px;
		display: flex;
		flex-direction: row !important;
		justify-content: space-evenly;
		width: 100%;
		button {
			width: 85.17px;
			height: 37.17px;
			border-radius: 5px;
			outline: none;
			border: none;
			color: white;
		}
		.forgot-button {
			background-color: #ff3030;
		}
		.almost-button {
			background-color: #ff922e;
		}
		.remembered-button {
			background-color: #2fbe34;
		}
	}
`;

function AnsweredCard(props) {
	return (
    <AnsweredCardComponent answer={props.questionsArr[props.cardNumber]}>
            <p>Question {props.cardNumber + 1} {props.questionsArr[props.cardNumber]}</p>
			<BsPlay></BsPlay>    
    </AnsweredCardComponent>);
}

const AnsweredCardComponent = styled.div`
    width: 300px;
	height: 65px;
	background-color: white;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex !important;
	flex-direction: row !important;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	box-sizing: border-box;
	font-size: 35px;
	p {
		font-family: "Recursive";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 19px;
		color: #333333;
	}
`;
