import React from 'react';

import { Container } from './styles';

const Home = () => (
  <Container>
    <div className="about-me">
      <h1>
        Matheus
        {' '}
        <span>Condini</span>
      </h1>
      <small>Indaiatuba - SP, Brasil</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vero, neque, perspiciatis
        quam, adipisci reprehenderit veritatis commodi earum ipsa minima non. Aliquid atque officiis
        alias qui voluptatibus. Saepe, corporis recusandae.
      </p>
      <ul className="socials">
        <li>
          <a href="#oi">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="#oi">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="#oi">
            <i className="fab fa-medium" />
          </a>
        </li>
        <li>
          <a href="#oi">
            <i className="fab fa-discord" />
          </a>
        </li>
      </ul>
    </div>
  </Container>
);

export default Home;
