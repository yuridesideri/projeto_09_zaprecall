import { useEffect, useState } from "react"
import styled from 'styled-components';
import { decks } from "../assets/decks";
import logo from "../assets/img/logo.svg";

export default function Startscreen(props) {
    const [user, setUser] = useState('');
    const [page, setPage] = useState('first-page');
    useEffect(() => {
        if (user !== ''){
            setPage('second-page');
        }
    },[user]);

    return (
        <>
            {page === 'first-page' ? <FirstPage setUser={setUser} /> : <SecondPage decks={props.decks} setDeck={props.setDeck} user={user} startGame={props.setGameState}/>}
        </>
    )
};


function FirstPage (props) {
    const [input, setInput] = useState('');


    return (
        
        <FirstPageBox >
            <img src={logo} alt="" />
            <p>ZapRecall</p>
            <input onChange={(e)=>setInput(e.target.value)} placeholder="Type in your name"></input>
            <button onClick={(e) => props.setUser(input)}>Iniciar Recall!</button>
        </FirstPageBox>
    )
}

function SecondPage (props) {
    const [input, setInput] = useState(0);

    return (
            <SecondPageBox >
                <p>Welcome, {props.user}!</p>
                <img src={logo} alt="" />
                <p>ZapRecall</p>
                <label> Choose a Deck:
                    <select onChange={(e) => setInput(e.target.value)} placeholder="Choose a deck">
                    {props.decks.map((el, ind) => <option key={`Deck${ind}`} value={ind}>Deck {ind + 1}</option>)}
                    </select>
                </label>
                <button onClick={(e) => props.setDeck(decks[input])}>Start Recall!</button>
            </SecondPageBox>
            )
}

const FirstPageBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FB6B6B;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    img{
        width: 136px;
        height: 161px;
        margin-bottom: 50px;
    }
    p{
        width: 257px;
        height: 59px;
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
    }
    input{
        margin-top: 20px;
        width: 246px;
        height: 34px;
        border: 1px solid #D70900;
        outline: none;
        border-radius: 4px;
        font-family: 'Righteous';
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        ::placeholder{
            font-family: 'Righteous';
            text-align: center;
        }
    }
    button{
        margin-top: 10px;
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
        margin-bottom: 25px;
    }
    
`
const SecondPageBox = styled.div`
     display: flex;
    flex-direction: column;
    background-color: #FB6B6B;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    img{
        width: 136px;
        height: 161px;
        margin-bottom: 50px;
        margin-top: 40px;
    }
    p{
        width: 300px;
        height: 59px;
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
    }
    label{
        color: white;
        font-family: 'Righteous';
        select{
            margin-left: 10px;
            margin-top: 20px;
            width: 100px;
            height: 34px;
            border: 1px solid #D70900;
            outline: none;
            border-radius: 4px;
            font-family: 'Righteous';
            text-align: center;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

        }
    }
    button{
        margin-top: 10px;
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
        margin-bottom: 25px;
    }
    
`