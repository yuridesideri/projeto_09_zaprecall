import { useState } from "react"
import styled from 'styled-components';
import logo from "../assets/img/logo.svg";

export default function Startscreen(props) {
    const [user, setUser] = useState('');
    const [page, setPage] = useState('first-page');


    return (
        <>
            {page === 'first-page' ? <FirstPage /> : <SecondPage />}
        </>
    )
};


function FirstPage (props) {
    const [input, setInput] = useState('');

    return (
        <FirstPageBox >
            <img src={logo} alt="" />
            <p>ZapRecall</p>
            <input placeholder="Type in your name"></input>
            <button>Iniciar Recall!</button>
        </FirstPageBox>
    )
}

function SecondPage (props) {

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