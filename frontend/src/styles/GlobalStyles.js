// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background: #f3f4f6;
    color: #1e293b;
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyles;
