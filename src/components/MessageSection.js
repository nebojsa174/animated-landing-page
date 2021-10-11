import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';

import avatar1 from '../images/avatar1.svg';
import avatar2 from '../images/avatar2.svg';
import avatar3 from '../images/avatar3.svg';
import avatar4 from '../images/avatar4.svg';
import avatar5 from '../images/avatar5.svg';
import messaging from '../images/conversation.svg';
import bgCircles from '../images/circleBg.svg';

function MessageSection() {
    return (
        <MessageSectionStyled>
            <InnerLayout>
                <div className="message-container">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            We support you in 5 different languages
                        </h2>
                        <p className="message-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Officiis distinctio vel, quod repellendus enim exercitationem ullam quas facere sapiente esse incidunt, odio laborum?
                        </p>
                        <div className="images-container">
                            <img src={avatar1} alt="" className="image-1" />
                            <img src={avatar2} alt="" className="image-2" />
                            <img src={avatar3} alt="" className="image-3" />
                            <img src={avatar4} alt="" className="image-4" />
                            <img src={avatar5} alt="" className="image-5" />
                            <p>&nbsp; +25</p>
                        </div>
                        <img src={bgCircles} className="bgCircle" alt="" />
                    </div>
                    <div className="right-items">
                        <img src={messaging} alt="" />
                        <img src={bgCircles} alt="" className="bgCircle" />
                    </div>
                </div>
            </InnerLayout>
        </MessageSectionStyled>
    )
}

const MessageSectionStyled = styled.section`
    .message-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    }


    .left-items{
        position: relative;
        padding-right: 2rem;
        .message-paragraph{
            padding: 1rem 0;
        }
        .images-container{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 2rem;
        }
        .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
    }
`;

export default MessageSection
