import logo from "../assets/img/logo.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Ingame(props) {
	const { cards } = props;
	const [completed, setCompleted] = useState(0);
    const [questionsArr, setQuestionsArr] = useState([...Array(cards.length)])

    useEffect(()=> console.log(questionsArr), [questionsArr])

	return (
		<GameBox>
			<header>
				<img src={logo} alt="" />
				<p>ZapRecall</p>
			</header>
			<div>
				{questionsArr.map((el, ind) => (
					<Cards
						key={`Card-${ind * 2}`}
						setCompleted={setCompleted}
						setNumOfRightAnswers={props.setNumOfRightAnswers}
						cardNumber={ind}
						cardObject={cards[ind]}
                        setQuestionsArr={setQuestionsArr}
                        questionsArr={questionsArr}
					/>
				))}
			</div>
			<footer>
				<p>
					{completed}/{cards.length} Completed{" "}
				</p>
			</footer>
		</GameBox>
	);
}

const GameBox = styled.div`
	width: 100%;
	background-color: #fb6b6b;
	padding-bottom: 150px;
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 20vh;
		img {
			width: 52px;
			height: 60px;
		}
		p {
			color: white;
			font-family: "Righteous";
			font-size: 36px;
			line-height: 45px;
			text-align: center;
			width: 203px;
			height: 44px;
		}
	}
	div {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	footer {
		background-color: white;
		position: fixed;
		bottom: 0;
		height: 100px;
		width: 100%;
		box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
		display: flex;
		justify-content: center;
		align-items: center;
		p {
			width: 145px;
			height: 22px;
			font-family: "Recursive";
			font-size: 18px;
			line-height: 22px;
		}
	}
`;
