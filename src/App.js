import React, { Component, Fragment } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/global";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Soon = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 2.5em;

  @media (min-width: 768px) {
    font-size: 4em;
  }

  @media (min-width: 992px) {
    font-size: 6em;
  }

  span {
    font-weight: 400;
    background: #936491;
    background: -moz-linear-gradient(-45deg, #936491 5%, #e70b5e 100%);
    background: -webkit-linear-gradient(-45deg, #936491 5%, #e70b5e 100%);
    background: linear-gradient(135deg, #936491 5%, #e70b5e 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#936491', endColorstr='#e70b5e', GradientType=1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyles />
        <Soon>
          <span>{"{"}</span>
          {" Em breve "}
          <span>{"}"}</span>
        </Soon>
      </Container>
    );
  }
}

export default App;
