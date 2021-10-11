import React, {useState} from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

import plus from '../images/plus.svg';
import minus from '../images/minus.svg';


function Question({ title, description }) {
    const [toggle, setToggle] = useState(false);
    const btnToggler = () =>{
        setToggle(!toggle);
    }

    return (
        <Fade direction='left' triggerOnce='true'>
            <QuestionStyled>
                <div className="question-container">
                    <div className="toggle-title">
                        <h4>{title}</h4>
                        <button onClick={btnToggler}>
                            {toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                        </button>
                    </div>
                    {toggle && <p>{description}</p>}
                </div>
            </QuestionStyled>
        </Fade>
    )
}

const QuestionStyled = styled.div`

    background-color: #fff;
    margin: 1rem 0;
    padding: 1.4rem 1rem;
    border-radius: 24px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

    .toggle-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        button{
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
        }
    }

    h4{
        color: #16194F;
        font-size: 1.3rem;
    }
`;

export default Question
