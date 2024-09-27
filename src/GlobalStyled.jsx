import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body} ;
    color: ${props => props.theme.fontColor};
  }
  header a {
    color: ${props => props.theme.fontColor};
  }

  .hero-text h1 {
    color: ${props => props.theme.fontColor};

  }

  .styled-card p{
    font-weight: ${props => props.theme.fontWeight };
    font-size: ${props => props.theme.fontSize};

  }

  .styled-card a {
    color: ${props => props.theme.fontColor};
    font-weight: ${props => props.theme.fontWeight };
  }

`