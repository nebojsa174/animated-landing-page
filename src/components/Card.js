import React from 'react';
import styled from 'styled-components';

function Card({
    account, amount, text, button, card,
    active, inactive, check, checkDisabled,
    text1, text2, text3, text4, text5, text6, text7, text8
}) {
    return (
        <CardStyled>
            <h4 className="card-title">
                {account}
            </h4>
            <h4 className="card-title">
                {amount} <span> /m</span>
            </h4>
            <p className="card-paragraph">{text}</p>
            <div className="button-container">
                <button>{button}</button>
            </div>
            <div className="card-image-container">
                <img src={card} alt="" />
            </div>
            <div className="plan-container">
                <img src={active} alt="" />
                <img src={inactive} alt="" />
            </div>
            <div className="list-container">
                <p className="text-check">
                    <img src={check} alt="" />
                    {text1}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text2}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text3}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text4}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text5}
                </p>
                <p className="text-check">
                    <img src={checkDisabled} alt="" />
                    {text6}
                </p>
                <p className="text-check">
                    <img src={checkDisabled} alt="" />
                    {text7}
                </p>
                <p className="text-check">
                    <img src={checkDisabled} alt="" />
                    {text8}
                </p>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background-color: white;
    padding: 3rem 4rem;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    
    .card-title{
        font-size: 2rem;
        color: black;
        text-align: center;
        padding: 1.5rem 0;
        span{
            font-size: 1.5.rem;
        }
    }

    .button-container{
        text-align: center;
        padding: 1.5rem 0;
        button{
            border: 2px solid #16194F;
            padding: .8rem 1.4rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 20px;
            font-size: inherit;
            color: #16194F;
        }
    }

    .card-image-container{
        display: flex;
        justify-content: center;
        img{
            width: 70%;
        }
    }
    
    .plan-container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 0;
        img{
            padding: 0 .5rem;
        }
    }

    .text-check{
        display: flex;
        align-items: center;
        padding: .4rem 0;
        img{
            padding-right: .3rem;
            width: 24px;
        }

        &:nth-child(6){
            color: #B7B7B7;
        }
        &:nth-child(7){
            color: #B7B7B7;
        }
        &:nth-child(8){
            color: #B7B7B7;
        }

    }
`;

export default Card
