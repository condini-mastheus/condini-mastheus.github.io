import React from 'react';
import GlobalStyles, { Container, Content } from '~/styles/global';

import Home from '~/pages/Home';
import Sidebar from '~/components/Sidebar';

const App = () => (
  <Container>
    <GlobalStyles />
    <Sidebar />
    <Content>
      <Home />
    </Content>
    <Content>
      <Home />
    </Content>
  </Container>
);

export default App;
