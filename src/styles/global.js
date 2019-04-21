import styled, { createGlobalStyle } from 'styled-components';

import '@fortawesome/fontawesome-free/css/all.min.css';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #171717;
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

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  height: 100%;
`;

export default GlobalStyles;
