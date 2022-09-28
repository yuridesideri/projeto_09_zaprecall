import { useState } from "react"
import styled from 'styled-components'
import { BsPlay } from 'react-icons/bs'

export default function Cards(props) {

    const [cardState, setCardState] = useState('loaded');
    const [cardNumber, setCardNumber] = useState(props.cardNumber); // 0 notation

    return (
        <>
            {cardState === 'loaded'? <LoadedCard cardNumber={cardNumber} /> : 
            cardState === 'flipped'? <FlippedCard /> :
            cardState === 'answered'? <AnsweredCard /> : null}
        </>
    )
};


function LoadedCard (props) {

    return (
        <LoadedCardComponent>
            <p>Question {props.cardNumber + 1}</p>
            <BsPlay></BsPlay>
        </LoadedCardComponent>
    )
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
    p{
        font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    }
`


function FlippedCard (props){
    

    return(
        <FlippedCardComponent />
    )
}

const FlippedCardComponent = styled.div`

    
`



function AnsweredCard (props){
    

    return(
        <AnsweredCardComponent />
    )
}

const AnsweredCardComponent = styled.div`

    
`