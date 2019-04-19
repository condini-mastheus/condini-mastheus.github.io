import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900');
  
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background-image: -webkit-linear-gradient(45deg,#484848,#000000);
    background-image: linear-gradient(45deg,#484848,#000000);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
