import React from 'react'
import CardSection from './components/CardSection';
import Header from './components/Header'
import {OuterLayout} from './styles/Layouts';
import styled from 'styled-components';
import ChartSection from './components/ChartSection';
import MessageSection from './components/MessageSection';
import PaymentSection from './components/PaymentSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

import { Fade } from 'react-awesome-reveal';

function App() {
  
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }

  return (
    <div className="App">
        <Header />
        <OuterLayout>
          <MainStyled>
          <Fade direction='left' triggerOnce='true'>
              <CardSection />
          </Fade>
          <Fade direction='right' triggerOnce='true'>
              <ChartSection />
          </Fade>
          <Fade direction='left' triggerOnce='true'>
              <MessageSection />
          </Fade>
          <Fade direction='right' triggerOnce='true'>
              <PaymentSection />
          </Fade>
              <FaqSection />
          </MainStyled>
        </OuterLayout>
      <Fade triggerOnce='true'>
          <Footer />
        </Fade> 
    </div>
  )
}

const MainStyled = styled.main`
`;

export default App
