import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';

import card from '../images/creditcard.svg';

function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            One card for all your payments
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magnam et aliquid quas sequi! Tempora quaerat dolorum facere fuga eos obcaecati, accusantium nemo repellendus culpa.
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media screen and (max-width: 845px){
            grid-template-columns: repeat(1, 1fr);
        }
        
        .card-right{
            display: flex;
            justify-content: flex-end;
            img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}
        }

        .card-left{
            p{
                padding: 1rem 0;
            }
        }
    }
`;

export default CardSection
