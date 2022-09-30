import logo from "../assets/img/logo.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import RightIcon from "../assets/img/right-icon.svg";
import WrongIcon from "../assets/img/wrong-icon.svg";
import DoubtIcon from "../assets/img/doubt-icon.svg";
import { LayoutGroup } from "framer-motion"

export default function Ingame(props) {
	const { cards, questionsArr, setQuestionsArr } = props;
	const [completed, setCompleted] = useState(0);


    useEffect(()=>{
        if (questionsArr !== null){
            if (completed === questionsArr.length){
                setTimeout(() => props.setGameState('endGame'), 1500) ;
            }
        }
    })

	return (
		<GameBox>
			<header>
				<img src={logo} alt="" />
				<p>ZapRecall</p>
			</header>
			<div>
			<LayoutGroup>
				{questionsArr !== null ? questionsArr.map((el, ind) => (
					<Cards
                        data-identifier="flashcard"
						key={`flashcard-${ind}`}
						setCompleted={setCompleted}
						setNumOfRightAnswers={props.setNumOfRightAnswers}
						cardNumber={ind}
						cardObject={cards[ind]}
						setQuestionsArr={setQuestionsArr}
						questionsArr={questionsArr}
					/>
				)): <></>}
			</LayoutGroup>
			</div>
			<footer data-identifier="flashcard-counter">
				<p>
					{completed}/{cards.length} Completed{" "}
				</p>
				<div>
					{questionsArr !== null? questionsArr.map((el,ind) =>
						el === undefined ? (
							<div key={ind}/>
						) : el === "right" ? (
							<img key={ind} src={RightIcon} alt="" />
						) : el === "doubt" ? (
							<img key={ind} src={DoubtIcon} alt="" />
						) : el === "wrong" ? (
							<img key={ind} src={WrongIcon} alt="" />
						) : undefined
					) : undefined}
				</div>
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
        z-index: 2;
		bottom: 0;
		height: 100px;
		width: 100%;
		box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		p {
			width: 145px;
			height: 22px;
			font-family: "Recursive";
			font-size: 18px;
			line-height: 22px;
		}
        div{
            display: flex !important;
            flex-direction: row;
            img{
                margin: 0 5px 0 5px;
            }
            div{
                border-radius: 32px;
                border: solid 1px lightgray;
                width: 23px;
                height: 23px;
                margin: 0 5px 0 5px;
            }
        }

	}
`;
