import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';

import logo from '../images/logo.svg';

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-container">
                    <div className="logo-container">
                        <div className="logo-items">
                            <img src={logo} alt="" />
                            <p>
                                Copyright @2021 <br />
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                    <ul className="bottom-navigation">
                        <div className="links1">
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Fees</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Affiliate</a>
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                                <a href="#">Term of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
};

const FooterStyled = styled.footer`
    padding: 0 18rem;
    background-color: #DCE2F0;

    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    
    .footer-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .bottom-navigation{
        display: flex;
        justify-content: space-between;
        li{
            padding: 2rem 0;
            color: #16194F;
        }
    }

    .logo-container{
        display: flex;
        align-items: center;
        img{
            width: 90px;
        }
    }
`;

export default Footer
