import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ChartStats from './ChartStats';

import { Roll, Bounce } from 'react-awesome-reveal';

import chart from '../images/chart.svg';
import AnimatedButton from './AnimatedButton';

function ChartSection() {
    return (
        <ChartSectionStyled>
            <InnerLayout>
                <div className="chart-container">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-money">
                                <ChartStats name={'Balance'} amount={'$250'} />
                                <ChartStats name={'Last Transaction'} amount={'$1,000'} />
                            </div>
                            <img src={chart} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your finances like a pro in no time
                        </h2>
                        <Roll triggerOnce='true'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore magni quia reiciendis cupiditate? Necessitatibus exercitationem debitis dignissimos laudantium omnis at eos maxime neque magnam ratione?
                        </p>
                        </Roll>
                        <Bounce triggerOnce='true'>
                            <AnimatedButton name={'Learn More'}/>
                        </Bounce>
                    </div>
                </div>
            </InnerLayout>
        </ChartSectionStyled>
    )
}

const ChartSectionStyled = styled.section`
    .chart-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }

        .chart-left{
            width: 80%;
                @media screen and (max-width: 1347px){
                    width: 100%;
                }
                .stats{
                    img{
                        box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                        border-radius: 62px;
                        width: 100%;
                    }
                    .stats-money{
                        display: flex;
                        padding-bottom: 1.3rem;
                        justify-content: space-between;
                    }
                }
        }

        .chart-right{
            padding-left: 2rem;
            p{
                padding: 1.3rem 0;
            }
        }
    }
`;

export default ChartSection
