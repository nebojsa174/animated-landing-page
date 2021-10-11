import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Card from './Card';

import card from '../images/creditcard.svg';
import active from '../images/active.svg';
import inactive from '../images/inactive.svg';
import check from '../images/check.svg';
import checkDisabled from '../images/check-disabled.svg'

function PaymentSection() {
    return (
        <PaymentSectionStyled>
            <InnerLayout>
                <h3 className="small-heading">
                    An exceptional service, <span>at the right price</span>
                </h3>
                <p className="card-paragraph">Start with our free plan and switch to premium as you grow.</p>
                <div className="card-container">
                    <Card 
                        account={'Free'}
                        amount={'$0'}
                        text={'Manage your business with a simple and efficent account.'}
                        button={'Get Started'}
                        card={card} 
                        active={active}
                        inactive={inactive}
                        check={check}   
                        checkDisabled={checkDisabled}
                        text1={'10 free local transfers'}
                        text2={'Free ATM withdrawls in Dollar up to $250 per month'}
                        text3={'Free payments to other Draft accounts'}
                        text4={'Prepaid debit cards'}
                        text5={'Virtual cards'}
                        text6={'Priority 24/7 support'}
                        text7={'Exchange 24 currencies'}
                        text8={'Multi-user access'}
                    />
                    <Card
                        account={'Premium'}
                        amount={'$10'}
                        text={'Manage your business with a simple and efficent account.'}
                        button={'Get Started'}
                        card={card}
                        active={active}
                        inactive={inactive}
                        check={check}
                        checkDisabled={checkDisabled}
                        text1={'10 free local transfers'}
                        text2={'Free ATM withdrawls in Dollar up to $250 per month'}
                        text3={'Free payments to other Draft accounts'}
                        text4={'Prepaid debit cards'}
                        text5={'Virtual cards'}
                        text6={'Priority 24/7 support'}
                        text7={'Exchange 24 currencies'}
                        text8={'Multi-user access'}
                    />
                </div>
            </InnerLayout>
        </PaymentSectionStyled>
    )
}

const PaymentSectionStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 7.5rem;
            
        @media screen and (max-width: 689px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .card-paragraph{
        text-align: center;
    }

`;

export default PaymentSection
