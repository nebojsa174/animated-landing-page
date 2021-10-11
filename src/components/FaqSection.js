import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import questions from '../questions';
import Question from './Question';
import lines from '../images/lines.svg';

function FaqSection() {
    return (
        <FaqSectionStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span> </h3>
                <p className="faq-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, reiciendis iure. Nemo consequuntur laboriosam voluptates earum saepe, 
                    ea debitis sed eveniet reprehenderit illum.
                </p>
                <div className="lines">
                    <img src={lines} alt="" />
                </div>
                <div className="questions-container">
                     {
                         questions.map((q) => {
                             return <Question key={q.id} {...q} />
                         })
                     }
                </div>

            </InnerLayout>
        </FaqSectionStyled>
    )
}

const FaqSectionStyled = styled.section`
    .faq-paragraph{
        width: 60%;
        margin: 0 auto;
    }

    .questions-container{
        padding-top: 4rem;
    }

    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
    }

    .img{
        width: 100%;
    }
`;

export default FaqSection
