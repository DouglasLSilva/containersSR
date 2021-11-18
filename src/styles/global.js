import { createGlobalStyle } from 'styled-components';

import { neutral, purple, teal } from './colors';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${neutral[300]};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${purple[200]};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${purple[100]};
    transition: background 250ms;
  }

  ::-moz-selection {
    background: ${teal[200]};
    color: ${neutral[100]};
  }

  ::selection {
    background: ${teal[200]};
    color: ${neutral[100]};
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: inherit;
    width: inherit;
    font: normal 16px Gotham, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${neutral[800]};
    background: ${neutral[100]};
  }

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  div#root {
    height: inherit;
    width: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    width: fit-content;
    height: fit-content;
    font-weight: 800;
  }

  em {
    font: italic 500 16px Gotham;
  }
`;

export default GlobalStyle;
