import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavander-secondary: #6a6d9e;
        --dark-primary: #16194f;
        --border-colour: #CAB6F1;
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
    }

    body{
        background-color: var(--neutral-light);
        color: white;
        font-size: 1.2rem
    }

    a{
        color: inherit;
    }
    p{
        color: var(--lavander-secondary);
        line-height: 1.8rem;
    }
    .secondary-heading{
        font-size: 3rem;
        color: var(--purple-primary);
    }
    .small-heading{
        font-size: 2.5rem;
        color: var(--purple-primary);
        text-align: center;
    }
    span{
        color: var(--accent-pink);
    }

    .faq-paragraph{
        text-align: center;
    }
`;

export default GlobalStyle;