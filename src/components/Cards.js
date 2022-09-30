import { useState, forwardRef } from "react";
import styled from "styled-components";
import { BsPlay } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import LoopArrow from "../assets/img/setinha.svg";
import RightIcon from "../assets/img/right-icon.svg";
import WrongIcon from "../assets/img/wrong-icon.svg";
import DoubtIcon from "../assets/img/doubt-icon.svg";

export default function Cards(props) {
	const {
		cardNumber,
		cardObject,
		setNumOfRightAnswers,
		setCompleted,
		setQuestionsArr,
		questionsArr
	} = props;

	const [cardState, setCardState] = useState("loaded");
	
	const animationDuration = 0.3;

	return (
		<motion.div layout transition={{ duration: 0.3 }}>
			<AnimatePresence mode='wait'>

			{cardState === "loaded" ? (
				<LoadedCard key="0"  exit={{rotateX: 90, transition: {duration: animationDuration}}}  setCardState={setCardState} cardNumber={cardNumber}> </LoadedCard>
			) : cardState === "flipped" ? (
				<FlippedCard key="1" initial={{rotateX: -90, 
				height: 65}} animate={{rotateX: 0, transition:{duration: animationDuration}}} exit={{rotateX: 90, transition: {duration: animationDuration}}} data-identifier="flashcard-index-item" setCardState={setCardState} question={cardObject.q} />
			) : cardState === "flippedAnswered" ? (
				<FlippedCardAnswered key="2" initial={{rotateX: -90}} animate={{rotateX: 0, transition:{duration: animationDuration}}} exit={{rotateX: 90, transition: {duration: animationDuration}}}
					questionsArr={questionsArr}
					cardNumber={cardNumber}
					setNumOfRightAnswers={setNumOfRightAnswers}
					setCompleted={setCompleted}
					setCardState={setCardState}
					answer={cardObject.a}
					setQuestionsArr={setQuestionsArr}
				/>
			) : cardState === "answered" ? (
				<AnsweredCard key="3" initial={{rotateX: -90}} animate={{rotateX: 0, transition:{duration: animationDuration}}} exit={{rotateX: 90, transition: {duration: animationDuration}}} questionsArr={questionsArr} cardNumber={cardNumber} />
			) : null}

			</AnimatePresence>
		</motion.div>

	);
}

const LoadedCard = motion(forwardRef((props, ref) => {
	return (
		<LoadedCardComponent ref={ref} data-identifier="flashcard-index-item">
			<p>Question {props.cardNumber + 1}</p>
			<BsPlay data-identifier="flashcard-show-btn" onClick={(e) => props.setCardState("flipped")}></BsPlay>
		</LoadedCardComponent>
	);
}))
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




const FlippedCard = motion(forwardRef((props, ref) => {
	return (
		<FlippedCardComponent ref={ref}>
			<p>{props.question}</p>
			<div>
				<img
                    data-identifier="flashcard-turn-btn"
					onClick={(e) => props.setCardState("flippedAnswered")}
					src={LoopArrow}
					alt=""
				/>
			</div>
		</FlippedCardComponent>
	);
}))
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



const FlippedCardAnswered = motion(forwardRef((props, ref) => {
	return (
		<FlippedCardAnsweredComponent ref={ref} data-identifier="flashcard-answer">
			<p>{props.answer}</p>
			<div>
				<button
                    data-identifier="forgot-btn"
					onClick={() => {
						props.setCompleted((old) => old + 1);
						props.setQuestionsArr((old) => {
							const [...newArr] = props.questionsArr;
							newArr.splice(props.cardNumber, 1, "wrong");
							return newArr;
						});
						props.setCardState("answered");
					}}
					className="forgot-button">
					Forgot
				</button>
				<button
                    data-identifier="almost-forgot-btn"
					onClick={() => {
						props.setCompleted((old) => old + 1);
						props.setQuestionsArr((old) => {
							const [...newArr] = props.questionsArr;
							newArr.splice(props.cardNumber, 1, "doubt");
							return newArr;
						});
						props.setCardState("answered");
					}}
					className="almost-button">
					Almost forgot!
				</button>
				<button
                    data-identifier="zap-btn"
					onClick={() => {
						props.setCompleted((old) => old + 1);
						props.setNumOfRightAnswers((old) => old + 1);
						props.setQuestionsArr((old) => {
							const [...newArr] = props.questionsArr;
							newArr.splice(props.cardNumber, 1, "right");
							return newArr;
						});
						props.setCardState("answered");
					}}
					className="remembered-button">
					Zap!
				</button>
			</div>
		</FlippedCardAnsweredComponent>
	);
}))
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



const AnsweredCard = motion(forwardRef((props, ref) => {
    const colors = { right: "#2FBE34", wrong: "#FF3030", doubt: "#FF922E" }
    const pictures = { right: RightIcon, wrong: WrongIcon, doubt: DoubtIcon }
    const answer = props.questionsArr[props.cardNumber];

	return (
		<AnsweredCardComponent ref={ref}
            data-identifier="flashcard-index-item"
			colors={colors}
			answer={answer}>
			<p>
				Question {props.cardNumber + 1}
			</p>
			<img data-identifier="flashcard-status" src={pictures[answer]} alt="" />
		</AnsweredCardComponent>
	);
}))
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
		color: ${props => props.colors[props.answer] || 'black'};
		text-decoration-line: line-through;
		text-decoration-color: ${props => props.colors[props.answer] || 'black'};
	}
`;
