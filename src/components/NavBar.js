import React from 'react'
import styled from 'styled-components';

import { Fade } from 'react-awesome-reveal';

import PrimaryButton from './PrimaryButton';
import logo from '../images/logo.svg'

function NavBar() {
    return (
        <Fade direction='down' triggerOnce='true'>
            <NavBarStyled>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Pricing</a>
                    </li>
                </ul>
                <PrimaryButton name={'Sign up'} />
            </NavBarStyled>
        </Fade>
    )
}

const NavBarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;

export default NavBar
