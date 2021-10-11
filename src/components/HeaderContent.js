import React from 'react'
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';

import { Fade } from 'react-awesome-reveal';

import phone from '../images/phone.svg';
import ring1 from '../images/ring_orange.svg';
import message1 from '../images/message_pink.svg';
import message2 from '../images/message_blue.svg';

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <Fade direction='left' triggerOnce='true'>
                <div className="left-content">
                    <div className="left-text-container">
                        <h1>Smart banking for freelancers</h1>
                        <p className="white">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus porro eaque, obcaecati velit asperiores, perferendis expedita veniam autem praesentium at dignissimos hic animi! Aperiam exercitationem eos iste praesentium ad.
                        </p>
                        <SecondaryButton name={'Register Now'} />
                    </div>
                </div>
            </Fade>
            <Fade direction='right' triggerOnce='true'>
                <div className="right-content">
                    <img src={phone} alt="" className="phone" />
                    <img src={ring1} alt="" className="ring1" />
                    <img src={message1} alt="" className="message1" />
                    <img src={message2} alt="" className="message2" />
                </div>
            </Fade>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;

    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color: white;
        }

        h1{
            font-size: 4rem;
            font-weight: 600;
        }

        .white{
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }
    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        .phone{
            width: 80%;
        }
        .ring1{
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
            }
        .message1{
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .message2{
            position: absolute;
            left: 0;
            bottom: 15%;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s;
        }
    }

    //Header Animations

    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
`;

export default HeaderContent
