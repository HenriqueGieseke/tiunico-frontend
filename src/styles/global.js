import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    @media (max-width: 480px) {
      font-size: 82.5%;
    }
  }

  body {
    background: linear-gradient(269.98deg, #CF0080 -23.72%, rgba(0, 165, 255, 0.66) 99.98%);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font-family: "Comfortaa", sans-serif;
  }


  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
