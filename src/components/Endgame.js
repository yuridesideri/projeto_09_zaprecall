//import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.svg"
import LoopArrow from "../assets/img/setinha.svg";

export default function Endgame(props) {
    const {numOfZ, numOfRightAnswers} = props;
    return (
        <EndGameScreen>
            <img src={logo} alt="" />
            <p>{numOfZ + 1 <= numOfRightAnswers ? 
            `Well done! 🥳  You achieved your goal of ${numOfZ + 1} recalls` :
            `Oh no! 😢 you didn't achieve your goal of ${numOfZ + 1} recalls`}
            </p>
            <button onClick={() => window.location.reload()}>Play Again?<img src={LoopArrow} alt="" /></button>
        </EndGameScreen>
    )
};


const EndGameScreen = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(45, 24, 24, 0.76);
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: 30px;
        width: 136px;
        height: 161px;
    }
    p{
        margin-top: 20px;
        text-align: center;
        color: white;
        font-size: 34px;
        font-family: "Recursive";
        width: 80%;

    }
    button{
        margin-top: 40px;
        width: 267px;
        height: 80px;
        display: flex;
        font-size: 28px;
        text-align: center;
        justify-content: space-around;
        align-items: center;
        font-family: "Recursive";
        border-radius: 15px;
        border: none;
        img{
            margin-top: 0;
            width: 60px;
            height: 60px;
        }
    }

`
